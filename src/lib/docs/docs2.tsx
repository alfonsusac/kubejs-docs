import type { MDXComponents } from "next-mdx-remote-client"
import type { SearchDocument } from "./search"

export type BasePage = {
  $title: string,
  $subtitle: string,
  $content?: string,
  $components?: MDXComponents
}


export type Page<T extends {} = {}> = BasePage & {
  $collection?: Record<string, Page>,
} & Record<string, any> & T

type PageGroup = ReturnType<typeof PageGroup>
export function PageGroup(title: string, content: Page[]) {
  return {
    title: title,
    items: content,
  }
}

export type StandalonePage<T = {}> = {
  $href: string,
  $title: string,
  $subtitle?: string,
  $content?: string,
  $subpages?: Record<string, StandalonePage>,
  $data?: T,
  $components?: MDXComponents,
}

export function StandalonePage<T = {}>(opts: {
  href: string,
  title: string,
  subtitle?: string,
  content?: string,
  subpages?: Record<string, StandalonePage>
  data?: T,
  components?: MDXComponents,
  indexFn?: (collection: T) => SearchDocument[]
}) {
  return {
    $href: opts.href,
    $title: opts.title,
    $subtitle: opts.subtitle,
    $content: opts.content,
    $subpages: opts.subpages,
    $data: (opts.data ?? {}) as T,
    $components: opts.components,
  }
}

export function CreateTemplatedPage(components?: MDXComponents) {
  return <T,>(
    href: string,
    title: string,
    subtitle?: string,
    content?: string,
    data?: T,
  ) => StandalonePage({
    href,
    title,
    subtitle,
    content,
    data,
    components,
  })
}