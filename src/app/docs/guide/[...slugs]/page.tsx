import { ArticleLayoutTemplate } from "@/component/article"
import { prose } from "@/component/prose"
import { tutorial } from "../../../../../content/guide/+index"
import { MDX } from "@/component/mdx"
import { CardDescription, CardLink, CardTitle } from "@/component/card"
import type { Page } from "@/lib/docs/docs2"

export default async function DocsGuideSlugPage(props: {
  params: Promise<{ slugs: string[] }>
}) {
  const { slugs } = await props.params

  const index = tutorial
  let page: Page | null = index
  let nextPage: { page: Page, slug: string } | null = null
  let prevPage: { page: Page, slug: string } | null = null
  for (const slug of slugs) {

    const collections: Record<string, Page> | undefined = page?.$collection
    if (!collections) {
      page = null
      break
    }
    if (collections[slug]) {
      page = collections[slug]
      // Get next and previous pages
      const keys = Object.keys(collections)
      const index = keys.indexOf(slug)
      if (index > 0) {
        prevPage = { page: collections[keys[index - 1]], slug: keys[index - 1] }
      } else {
        prevPage = null
      }
      if (index < keys.length - 1) {
        nextPage = { page: collections[keys[index + 1]], slug: keys[index + 1] }
      } else {
        nextPage = null
      }
    }

  }

  if (!page) return (
    <ArticleLayoutTemplate>
      <prose.h1>Guide Not Found</prose.h1>
      <prose.p>
        The guide you are looking for does not exist or has been moved. Please check the URL or return to the <a href="/docs/guide">KubeJS Guide</a>.
      </prose.p>
    </ArticleLayoutTemplate>
  )

  return (
    <ArticleLayoutTemplate>
      <prose.h1>{page.$title}</prose.h1>
      <prose.p>{page.$subtitle}</prose.p>
      <prose.hr></prose.hr>
      <MDX source={page.$content ?? ""} />
      <div className="my-12 grid grid-cols-2 gap-4">
        {
          prevPage ?
            <CardLink href={`/docs/guide/${ prevPage?.slug }`}>
              <CardTitle>Previous</CardTitle>
              <CardDescription>
                {prevPage ? prevPage.page.$title : "No previous page"}
              </CardDescription>
            </CardLink>
            : <div></div>
        }
        {
          nextPage ?
            <CardLink href={`/docs/guide/${ nextPage?.slug }`}>
              <CardTitle>Next</CardTitle>
              <CardDescription>
                {nextPage ? nextPage.page.$title : "No next page"}
              </CardDescription>
            </CardLink>
            : <div></div>
        }
      </div>

      <prose.hr />

      <section className="text-sm text-foreground/50">
        {/* Get Data from GitHub */}
        <p>
          Last Edited: 0 seconds ago
        </p>
        <p>
          Contributors: -
        </p>
        <br />
        <prose.a href={`https://github.com/alfonsusac/kubejs-docs/blob/main/content/guide/${ slugs.join('/') }.ts`}>
          Edit this page on GitHub
        </prose.a>
      </section>
    </ArticleLayoutTemplate>
  )
}