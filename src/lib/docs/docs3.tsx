import type { MDXComponents } from "next-mdx-remote-client"

type PageCtx = {
  currPath: string,
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

export function resolveDocsHref(rootHref: string, rootPage: Page) {
  // Plugin system, maybe?

  // Adds .href mutably, interal props in .meta, based on root .href
  for (const slug in rootPage.$subdir) {
    const subpage = rootPage.$subdir[slug]
    subpage.$meta._$href = `${ rootHref }/${ slug }`
    resolveDocsHref(subpage.$meta.$href, subpage)
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

export function getPageFromSlugs(
  resolvedRootPage: Page,
  slugs: string[],
) {
  // traverse resolved root page based on slugs
  let currentPage: Page | null = resolvedRootPage
  let parentPage: Page | null = null
  for (const slug of slugs) {
    if (!currentPage.$subdir[slug]) {
      return { page: null } // slug not found
    }
    parentPage = currentPage
    currentPage = currentPage.$subdir[slug]
  }
  // if (!parentPage) {
  //   return { page: null } // no parent page found
  // }

  // // get prev and next page
  // const slugsList = Object.keys(parentPage?.$subdir ?? {})
  // const currentIndex = slugsList.indexOf(slugs[slugs.length - 1])
  // const prevSlug = slugsList[currentIndex - 1] ?? null
  // const nextSlug = slugsList[currentIndex + 1] ?? null
  // let prev: { page: Page, slug: string } | null = null
  // let next: { page: Page, slug: string } | null = null
  // if (prevSlug) {
  //   prev = { page: parentPage.$subdir[prevSlug], slug: prevSlug }
  // }
  // if (nextSlug) {
  //   next = { page: parentPage.$subdir[nextSlug], slug: nextSlug }
  // }

  // return { page: currentPage, prev, next }

  return { page: currentPage }
}

export function isPage(page: Page) {

}

// ^ Resolution
// ------------------------------------------------
// v Implementation


// ^ Implementation
// ------------------------------------------------
// v Indexing

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