import { docs_structure2 } from "../../../content/structure"
import { article } from "@/component/article"
import { MDX } from "@/component/mdx"
import { resolveDocsHref } from "@/lib/docs/docs3"

export default function DocsIndexPage() {

  resolveDocsHref('/docs', docs_structure2)
  return (
    <article.layout>
      <MDX
        source={docs_structure2.$content || ""}
        components={docs_structure2.$components({ currPath: "/docs", })}
      />
    </article.layout>
  )
}
