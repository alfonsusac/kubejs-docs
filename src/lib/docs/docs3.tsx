import type { MDXComponents } from "next-mdx-remote-client"

export type PageCtx = {
  currPath: string,
  page: Page,
}

export type Page<
  P extends Record<string, Page> = Record<string, Page<any, any>>,
  M extends Record<string, any> = Record<string, any>,
> = {
  // dir properties
  $subdir: P,
  // page properties
  $title?: string,
  $subtitle?: string,
  $content?: string,
  $meta: M,
  $components?: (ctx: PageCtx) => MDXComponents,
}

export function Page<
  P extends Record<string, Page> = {},
  M extends Record<string, any> = {},
// NB: generics isn't used in [...slug] but can be used
//  if manual rendering is needed.
>(opts: {
  title: string,
  subtitle?: string,
  content?: string,
  subpages?: P,
  meta?: M,
  components?: (ctx: PageCtx) => MDXComponents,
}) {

  return {
    $title: opts.title,
    $subtitle: opts.subtitle,
    $content: `
    <Title>${ opts.title }</Title>
    <Subtitle>${ opts.subtitle ?? "" }</Subtitle>
    
    ${ opts.content }
    `,
    $subdir: opts.subpages ?? {} as P,
    $meta: opts.meta ?? {} as M,
    $components: opts.components ?? (() => ({})),
  }
}

// export function StubDir<TPage extends Page>(opts: {
//   subpages?: Record<string, TPage>,
// }) {
//   return (() => ({
//     $subdir: opts.subpages ?? {},
//   }))
// }



// ^ Design
// ------------------------------------------------
// v Resolution

type ResolvedPage = Omit<Page, "$subdir"> & {
  $subdir: Record<string, ResolvedPage>,
}

// Resolve Docs Strucutre, basically making it a tree.
export function resolveDocsHref(rootHref: string, rootPage: Page) {
  // Plugin system, maybe?

  // Adds .href mutably, interal props in .meta, based on root .href
  for (const slug in rootPage.$subdir) {
    const subpage = rootPage.$subdir[slug]
    subpage.$meta._$href = `${ rootHref }/${ slug }`
    resolveDocsHref(subpage.$meta._$href, subpage)
  }

  // Adds prev and next mutable, internal props in .meta, somehow?
  const subdirKeys = Object.keys(rootPage.$subdir)
  for (let i = 0; i < subdirKeys.length; i++) {
    const slug = subdirKeys[i]
    const subpage = rootPage.$subdir[slug]
    const prevKey = subdirKeys[i - 1] ?? null
    const nextKey = subdirKeys[i + 1] ?? null
    subpage.$meta._$prev = prevKey ? { page: rootPage.$subdir[prevKey], slug: prevKey } : null
    subpage.$meta._$next = nextKey ? { page: rootPage.$subdir[nextKey], slug: nextKey } : null
  }
}

export function traversePageTree(
  root: Page,
  onVisit: (page: Page) => void,
) {
  onVisit(root)
  for (const slug in root.$subdir) {
    const subpage = root.$subdir[slug]
    traversePageTree(subpage, onVisit)
  }
}


export function traversePageTreeWithSlug(
  root: Page,
  slugs: string[],
  onVisit: (page: Page, slug: string) => void,
  onBreak: () => void = () => { }
) {
  let current = root
  for (const slug of slugs) {
    const next = current.$subdir?.[slug]
    if (!next) {
      onBreak()
      break
    }
    onVisit(next, slug)
    current = next
  }
}





export function getPageFromSlugs(
  resolvedRootPage: Page,
  slugs: string[],
) {
  let currentPage: Page | null

  traversePageTreeWithSlug(
    resolvedRootPage,
    slugs,
    (page, slug) => currentPage = page,
    () => currentPage = null // break traversal
  )

  return { page: currentPage! }
}

export function getBreadcrumbData(
  rootPage: Page,
  slugs: string[],
) {
  const breadcrumbs: { label: string, href: string }[] = []

  traversePageTreeWithSlug(
    rootPage,
    slugs,
    (page, slug) => {
      breadcrumbs.push({
        label: page.$title ?? slug,
        href: page.$meta._$href,
      })
    },
    () => { } // no break action needed
  )

  return breadcrumbs
}

// ^ Resolution
// ------------------------------------------------
// v Implementation


// ^ Implementation
// ------------------------------------------------
// v Indexing

export function getIndexablePageList(docs: Page) {

  const searchDocuments: {
    id: string
    title: string
    href: string
    subtitle: string
    content: string
  }[] = []

  traversePageTree(docs, (page) => {
    if (!page.$meta._$href || !page.$title || !page.$subtitle) return
    searchDocuments.push({
      id: page.$meta._$href,
      title: page.$title,
      href: page.$meta._$href,
      subtitle: page.$subtitle,
      content: page.$content || "",
    })
  })

  return searchDocuments
}

// export function GetSearchDocuments(page: Page) {
//   const docs: SearchDocument[] = []
//   docs.push({
//     id: page({ href: '', slug: '' }).$href,
//     href: page({ href: '', slug: '' }).$href,
//     title: page({ href: '', slug: '' }).$title,
//     subtitle: page({ href: '', slug: '' }).$subtitle ?? "",
//     content: page({ href: '', slug: '' }).$content ?? "",
//   })
//   for (const subpage of Object.values(page({ href: '', slug: '' }).$subdir)) {
//     docs.push(...GetSearchDocuments(subpage as Page))
//   }
//   return docs
// }

// ^ Indexing
// ------------------------------------------------
// v Template Making

type PageGroup = ReturnType<typeof PageGroup>
export function PageGroup(title: string, content: Page[]) {
  return {
    title: title,
    items: content,
  }
}