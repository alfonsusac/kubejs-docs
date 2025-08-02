import { article } from "@/component/article"
import { prose } from "@/component/prose"
import { getIndexablePageList, resolveDocsHref } from "@/lib/docs/docs3"
import { indexDocuments, loadIndexedDocuments, searchDocuments } from "@/lib/docs/search"
import Form from 'next/form'
import { docs_structure2 } from "../../../../content/structure"
import { CardLink } from "@/component/card"

export default async function DocsSearchPage(ctx: {
  searchParams: Promise<{ q?: string }>,
}) {
  const { q } = await ctx.searchParams

  if (process.env.NODE_ENV === "development") {
    resolveDocsHref('/docs', docs_structure2)
    const searchDocuments = getIndexablePageList(docs_structure2)
    await indexDocuments(searchDocuments)
  }

  const index = await loadIndexedDocuments()

  const { rankedResults, searchResults } = searchDocuments(index, q || "")

  return (
    <article.layout>
      <prose.h1 className="text-xl">Search</prose.h1>
      <Form action="/docs/search">
        <prose.input className="mt-4" name="q" defaultValue={q} />
      </Form>

      <pre className="whitespace-pre-wrap">
        {JSON.stringify(searchResults)}
      </pre>

      {
        rankedResults.map((doc, i) => {
          return <CardLink href="" key={i}>
            {JSON.stringify(doc)}
          </CardLink>

        })
      }
    </article.layout>
  )
}