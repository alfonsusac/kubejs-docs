import { docs_structure } from "./structure"
import { ArticleLayoutTemplate } from "@/component/article"
import { CardGridSectionList } from "@/component/card-grid-lists"

export default function DocsIndexPage() {
  return (
    <ArticleLayoutTemplate
      hideBreadcrumb
      content={`
  
# Index

Collection of links to various documentation pages and resources related to KubeJS.

---

<ArticleLists />

`}
      components={{
        ArticleLists:
          () => <CardGridSectionList data={docs_structure} />
      }}
    />
  )
}
