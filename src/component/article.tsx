import type { MDXComponents } from "next-mdx-remote-client"
import { MDX } from "./mdx"
import { Breadcrumb } from "./breadcrumb"
import type { ComponentProps } from "react"
import { cn } from "lazy-cn"
import { CardDescription, CardLink, CardTitle } from "./card"

export function ArticleLayoutTemplate(props: {
  children?: React.ReactNode
  content?: string
  components?: MDXComponents
  hideBreadcrumb?: boolean
}) {
  return (
    <div id="docs_page" className="max-w-2xl mx-auto pb-20">
      <section className="my-10">
        {!props.hideBreadcrumb && <Breadcrumb />}
        {props.content && <MDX
          source={props.content.trim()}
          components={props.components}
        />}
        {props.children}
      </section>
    </div>
  )
}

// Prev Next ----------------------------------------

function getPrevNextPage(slug: string, collection: Record<string, any>) {
  const keys = Object.keys(collection)
  const index = keys.indexOf(slug)
  let nextPage: { page: any, slug: string } | null = null
  let prevPage: { page: any, slug: string } | null = null
  if (index > 0) {
    prevPage = { page: collection[keys[index - 1]], slug: keys[index - 1] }
  } else {
    prevPage = null
  }
  if (index < keys.length - 1) {
    nextPage = { page: collection[keys[index + 1]], slug: keys[index + 1] }
  } else {
    nextPage = null
  }
  return { nextPage, prevPage }
}

function PrevNext(props: {
  data: ReturnType<typeof getPrevNextPage>,
  href: string
}) {
  const { nextPage, prevPage } = props.data
  return (
    <div className="my-12 grid grid-cols-2 gap-4">
      {
        prevPage ?
          <CardLink href={`${ props.href }${ prevPage?.slug }`}>
            <CardDescription>Previous</CardDescription>
            <CardTitle>
              {prevPage ? prevPage.page.$title : "No previous page"}
            </CardTitle>
          </CardLink>
          : <div></div>

      }
      {
        nextPage ?
          <CardLink href={`${ props.href }${ nextPage?.slug }`}>
            <CardDescription>Next</CardDescription>
            <CardTitle>
              {nextPage ? nextPage.page.$title : "No next page"}
            </CardTitle>
          </CardLink>
          : <div></div>
      }
    </div>
  )
}

// (end) Prev Next ----------------------------------------


// Slug Traversal  ----------------------------------------

function traverseSlug<E, R1, R2>(
  slugs: string[],
  entry: E,
  accessor: (e: E, slug: string) => R1 | undefined
) {
  let result: any 

  for (const slug of slugs) {
    result = accessor(entry, slug)
    if (result !== undefined) {
      entry = result
    } else {
      return undefined
    }
  }

}





export const article = {
  layout: ArticleLayoutTemplate,
  getPrevNext: getPrevNextPage,
  PrevNext,
}