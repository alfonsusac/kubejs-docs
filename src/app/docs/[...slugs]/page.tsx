import { docs_structure2 } from "../../../../content/structure"
import { notFound } from "next/navigation"
import { article } from "@/component/article"
import { MDX } from "@/component/mdx"
import path from "path"
import { Breadcrumb, PageRenderer } from "@/lib/docs/docs4.components"
import { buildDirectory, getAllStaticSlugs, getPageFromSlug } from "@/lib/docs/docs4"


// SSG Stuff
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export function generateStaticParams() {
  return getAllStaticSlugs(docs_structure2)
}
// end of SSG Stuff

export default async function DocsPage(props: {
  params: Promise<{ slugs: string[] }>
}) {
  const { slugs } = await props.params
  const root = buildDirectory(docs_structure2) // todo: cache this
  const page = getPageFromSlug(root, slugs)
  if (!page) notFound()
  const currPath = `/docs/${ slugs.join("/") }`
  return (
    <article.layout>
      <Breadcrumb resolvedPage={page} baseHref="/docs" />
      <PageRenderer
        MDX={MDX}
        page={page}
        baseHref="/docs"
        context={{
          currPath,
          page,
        }}
      />
    </article.layout>
  )
}
