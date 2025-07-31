import { getPageFromSlugs, resolveDocsHref, type Page } from "@/lib/docs/docs3"
import { docs_structure2 } from "../../../../content/structure"
import { notFound } from "next/navigation"
import { article } from "@/component/article"
import { MDX } from "@/component/mdx"


// SSG Stuff
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export function generateStaticParams() {

  let params: { slugs: string[] }[] = []

  // Generate all possible slugs for the docs structure
  const generateSlugs = (page: Page, prefix: string[] = []) => {
    if (!page.$subdir) return
    for (const dir in page.$subdir) {
      // 1. add this page to slug
      // 2. if it has children, recurse into children
      const newprefix = [...prefix, dir]
      params.push({ slugs: newprefix })
      generateSlugs(page.$subdir[dir], newprefix)
    }
  }

  generateSlugs(docs_structure2)
  return params
}
// end of SSG Stuff








export default async function DocsPage(props: {
  params: Promise<{ slugs: string[] }>
}) {
  const { slugs } = await props.params

  resolveDocsHref('/docs', docs_structure2)

  // Traverse the resolved structure based on slugs
  const { page } = getPageFromSlugs(docs_structure2, slugs)
  if (!page) notFound()

  const currPath = `/docs/${ slugs.join("/") }`
  const displayPrevNext = page.$meta?.prevNext ?? false

  return (
    <article.layout>
      <MDX
        source={`
        ${ page.$content ?? "" }

        ${ displayPrevNext ? `<PrevNext/>` : "" }
          `}
        components={{
          ...page.$components?.({ currPath }),
          PrevNext: () => <article.PrevNext
            data={{ prevPage: page.$meta?._$prev, nextPage: page.$meta?._$next }}
            href={`/docs/${ slugs.slice(0, -1).join("/") }/`}
          />
        }}
      />
    </article.layout>
  )
}
