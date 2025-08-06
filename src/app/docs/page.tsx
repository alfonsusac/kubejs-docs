import { docs_structure2 } from "../../../content/structure"
import { article } from "@/component/article"
import { MDX } from "@/component/mdx"
import { resolveDocsHref } from "@/lib/docs/docs3"
import { PageRenderer } from "@/lib/docs/docs4.components"

export default function DocsIndexPage() {

  resolveDocsHref('/docs', docs_structure2)
  return (
    <article.layout
      hideBreadcrumb={true}
    >
      <PageRenderer
        MDX={MDX}
        baseHref="/docs"
        context={{ currPath: '/docs', page: docs_structure2 }}
        page={docs_structure2}
      />
    </article.layout>
  )
}
