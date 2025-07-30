import type { MDXComponents } from "next-mdx-remote-client"

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
export function PageGroup(title: string, content: StandalonePage[]) {
  return {
    title: title,
    items: content,
  }
}

export type StandalonePage = ReturnType<typeof StandalonePage>

export function StandalonePage<T = {}>(opts: {
  href: string,
  title: string,
  subtitle?: string,
  content?: string,
  collection?: T,
  components?: MDXComponents,
  indexFn?: (collection: T) => {}[]
}) {
  return {
    $title: opts.title,
    $href: opts.href,
    $subtitle: opts.subtitle || "",
    $content: opts.content || "",
    $collection: (opts.collection ?? {}) as T,
    $components: opts.components,
  }
}

export function CreateTemplatedPage(components?: MDXComponents) {
  return <T,>(
    href: string,
    title: string,
    subtitle?: string,
    content?: string,
    collection?: T,
  ) => StandalonePage({
    href,
    title,
    subtitle,
    content,
    collection,
    components,
  })
}