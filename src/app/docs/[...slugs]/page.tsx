import { getPageFromSlugs } from "@/lib/docs/docs3"
import { docs_structure2 } from "../../../../content/structure"
import { notFound } from "next/navigation"
import { article } from "@/component/article"
import { MDX } from "@/component/mdx"
import { prose } from "@/component/prose"

export default async function DocsPage(props: {
  params: Promise<{ slugs: string[] }>
}) {
  const { slugs } = await props.params

  // Build documentation structure
  // let entry = docs_structure2
  // const { resolved, documentList } = resolveDirectory('/docs', entry)

  // Traverse the resolved structure based on slugs
  const page = getPageFromSlugs(docs_structure2, slugs)

  if (!page) {
    notFound()
  }
  return (
    <article.layout>
      <MDX
        source={`
          
        <Title>${ page.$title }</Title>
        <Subtitle>${ page.$subtitle }</Subtitle>
          
          ` + (page.$content ?? "")}
        components={page.$components?.({
          href: "",
        })}
      />
    </article.layout>
  )


  // return (
  // <div id="docs_page_details" className="max-w-2xl mx-auto">
  //   <section className="my-10">

  //     <div>
  //       {slugs.join(' / ')}
  //     </div>

  //   </section>
  // </div>
  // )
}
