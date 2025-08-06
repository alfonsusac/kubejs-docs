// The Page() content system.
// 
// Uses the power of typescript to write content that are 
// type-safe which makes it consistent.
//
// Drawbacks:
// - no ISR support

import type { MDXComponents } from "next-mdx-remote-client"
import type { MDXRemote } from "next-mdx-remote-client/rsc"
import type { ReactNode } from "react"

// This is the base type for the Page type.
export type Page = {
  $subdir: Record<string, Page>,
  $title?: string,
  $subtitle?: string,
  $content?: string,
  $meta: DefaultMeta,
  $components?: (ctx: PageContext) => MDXComponents
}

// The meta is used for various purposes which includes stuff
// like compiled data or dev-injected metas.
// 
// The DefaultMeta are object that only exists on a tree. i.e, these 
// are irrelevant on their own page. These contains data that is only
// relevant if the page is on a tree. i.e after calling buildDirectory()
//
// Must be serializable! (no complex objects like Page)
//
// Todo - Add into plugin system
// type DefaultSerializableMeta = {
//   _$path?: string[],
//   _$slug?: string,
//   _$prev?: { $path: string[], $title?: string } | null,
//   _$next?: { $path: string[], $title?: string } | null,
//   _$breadcrumb?: { $label: string, $path: string[] }[]
// }
type DefaultMeta = {
  _$resolved?: true,
  _$path?: string[],
  _$slug?: string,
  _$prev?: Page | null,
  _$next?: Page | null,
  _$parent?: Page | null,
  _$breadcrumb?: { $label: string, $path: string[] }[],
}

// Page context is used for rendering since the meta are
// usually only hydrated after compiling the entire
// page structure.
export type PageContext = {
  currPath: string,
  page: Page,
}

// This function is used to create a page.
export function Page(opts: {
  title: string,
  subtitle?: string,
  content?: string,
  subpages?: Record<string, Page>,
  meta?: Record<string, any>,
  components?: (ctx: PageContext) => MDXComponents
}): Page {
  return {
    $title: opts.title,
    $subtitle: opts.subtitle,
    $content: opts.content,
    $subdir: opts.subpages ?? {},
    $meta: opts.meta ?? {},
    $components: opts.components
  }
}

export function buildDirectory(nonCircularRoot: Page) {
  if (nonCircularRoot.$meta._$resolved) {
    return nonCircularRoot
  }
  console.log("Building Directory")
  // Todo - Find way to not mutate page
  const resolveTreeDirectory = (
    root: Page, path: string[] = []
  ) => {
    root.$meta._$resolved = true
    root.$meta._$path = path
    root.$meta._$slug = path.at(-1)
    // Resolve child pages first before other metas
    for (const slug in root.$subdir) {
      root.$subdir[slug].$meta._$parent = root
      resolveTreeDirectory(root.$subdir[slug], [...path, slug])
    }

    // Prev-next meta
    const childKeys = Object.keys(root.$subdir)
    for (let i = 0; i < childKeys.length; i++) {
      const slug = childKeys[i]
      const subpage = root.$subdir[slug]
      const prevKey = childKeys[i - 1] ?? null
      const nextKey = childKeys[i + 1] ?? null
      if (prevKey) {
        const prevPage = root.$subdir[prevKey]
        subpage.$meta._$prev = prevPage
      } else {
        subpage.$meta._$prev = null
      }
      if (nextKey) {
        const nextPage = root.$subdir[nextKey]
        subpage.$meta._$next = nextPage
      } else {
        subpage.$meta._$next = null
      }
    }
  }
  resolveTreeDirectory(nonCircularRoot)
  return nonCircularRoot
}

// ^ Core
// ------------------------------------------------
// v Utilities

export function traversePage(root: Page, onVisit: (page: Page) => void) {
  onVisit(root)
  for (const slug in root.$subdir) {
    const subpage = root.$subdir[slug]
    traversePage(subpage, onVisit)
  }
}
export function mapPage<T>(root: Page, mapFn: (page: Page) => T) {
  const arr: T[] = []
  traversePage(root, (page) => arr.push(mapFn(page)))
  return arr
}

// ^ Utilities
// ------------------------------------------------
// v SSG Utils

// Generate all possible slugs for the docs structure
export function getAllStaticSlugs(root: Page) {
  let params: { slugs: string[] }[] = []
  const generateSlugs = (page: Page, prefix: string[] = []) => {
    if (!page.$subdir) return
    for (const dir in page.$subdir) {
      // 1. add this page to slug
      // 2. if it has children, recurse into children
      const newprefix = [...prefix, dir]
      params.push({ slugs: newprefix })
      generateSlugs(page.$subdir[dir], newprefix)
    }
  }
  generateSlugs(root)
  return params
}

export function getPageFromSlug(root: Page, slugs: string[]) {
  let currentPage: Page | null = null
  let current = root
  for (const slug of slugs) {
    const next = current.$subdir?.[slug]
    if (!next) {
      currentPage = null
      break
    }
    currentPage = next
    current = next
  }
  return currentPage
}

// ^ SSG Utils
// ------------------------------------------------
// v Indexing Utils

export function getIndexablePageList(docs: Page, baseHref: `/${ string }`) {

  const searchDocuments: {
    id: string
    title: string
    href: string
    subtitle: string
    content: string
  }[] = []

  traversePage(docs, (page) => {
    if (!page.$meta._$path || !page.$title || !page.$subtitle) return
    searchDocuments.push({
      id: baseHref + '/' + page.$meta._$path.join('/'),
      title: page.$title,
      href: baseHref + '/' + page.$meta._$path.join('/'),
      subtitle: page.$subtitle,
      content: page.$content || "",
    })
  })

  return searchDocuments
}

// ^ Indexing Utils
// ------------------------------------------------
// v Rendering
