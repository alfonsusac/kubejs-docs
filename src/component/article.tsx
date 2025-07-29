import type { MDXComponents } from "next-mdx-remote-client"
import { MDX } from "./mdx"
import { Breadcrumb } from "./breadcrumb"

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