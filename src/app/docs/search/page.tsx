import { article } from "@/component/article"
import { prose } from "@/component/prose"
// import { getIndexablePageList, resolveDocsHref } from "@/lib/docs/docs3"
import { indexDocuments, loadIndexedDocuments, searchDocuments } from "@/lib/docs/search"
import Form from 'next/form'
import { docs_structure2 } from "../../../../content/structure"
import { CardDescription, CardLink, CardTitle } from "@/component/card"
import { buildDirectory, getIndexablePageList } from "@/lib/docs/docs4"

export default async function DocsSearchPage(ctx: {
  searchParams: Promise<{ q?: string }>,
}) {
  const { q } = await ctx.searchParams

  if (process.env.NODE_ENV === "development") {
    const copy = buildDirectory(docs_structure2)
    const searchDocuments = getIndexablePageList(copy, '/docs')
    const index = await indexDocuments(searchDocuments)
    // console.log(index)
  }

  const index = await loadIndexedDocuments()
  // console.log(index)

  const { rankedResults, searchResults } = searchDocuments(index, q || "")

  return (
    <article.layout>
      <prose.h1 className="text-xl">Search</prose.h1>
      <Form action="/docs/search">
        <prose.input className="mt-4" name="q" defaultValue={q} />
      </Form>
      <section className="flex flex-col gap-2 mt-12">
        {
          rankedResults.map((doc, i) => {
            return <CardLink href={doc.href} key={i}>
              <CardTitle>{doc.title}</CardTitle>
              <CardDescription>{doc.subtitle}</CardDescription>
            </CardLink>

          })
        }
      </section>
    </article.layout>
  )
}