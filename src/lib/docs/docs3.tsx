import type { MDXComponents } from "next-mdx-remote-client"

type PageCtx = {
  href: string,
  // slug: string,
}

type Page = {
  $subdir: Record<string, Page>,
  $title?: string,
  $subtitle?: string,
  $content?: string,
  $meta?: Record<string, any>,
  $components?: (ctx: PageCtx) => MDXComponents,
}
// type PageFn = (ctx: PageCtx) => Page


export function Page<
  TPage extends Page,
  Meta
// NB: generics isn't used in [...slug] but can be used
//  if manual rendering is needed.
>(opts: {
  roothref?: string,
  title: string,
  subtitle?: string,
  content?: string,
  subpages?: Record<string, TPage>,
  meta?: Meta,
  components?: (ctx: PageCtx) => MDXComponents,
}) {
  return {
    $href: opts.roothref ?? "/",
    $title: opts.title,
    $subtitle: opts.subtitle,
    $content: opts.content,
    $subdir: opts.subpages ?? {},
    $meta: opts.meta ?? {},
    $components: opts.components ?? (() => ({})),
  }
}

export function StubDir<TPage extends Page>(opts: {
  subpages?: Record<string, TPage>,
}) {
  return (() => ({
    $subdir: opts.subpages ?? {},
  }))
}



// ^ Design
// ------------------------------------------------
// v Resolution

type ResolvedPage = Omit<Page, "$subdir"> & {
  $subdir: Record<string, ResolvedPage>,
}

// export function resolveDirectory(
//   currPath: string,
//   rootPage: Page,
//   slug?: string,
// ) {

//   const documentList: Page[] = []

//   function recursiveResolve(
//     currPath: string,
//     pageFn: Page,
//     slug?: string,
//   ): ResolvedPage {
//     const resolvedPage = pageFn({
//       href: currPath,
//       slug: slug ?? '#root',
//     })
//     documentList.push(resolvedPage)
//     const resolvedSubdir = Object.fromEntries(
//       Object.entries(resolvedPage.$subdir).map(([subSlug, subPageFn]) => {
//         return [subSlug, recursiveResolve(`${ currPath }/${ subSlug }`, subPageFn, subSlug)]
//       })
//     )
//     return {
//       ...resolvedPage,
//       $subdir: resolvedSubdir,
//     }
//   }

//   const resolved = recursiveResolve(currPath, rootPage, slug)

//   return { resolved, documentList }
// }


export function getPageFromSlugs(
  resolvedRootPage: Page,
  slugs: string[],
) {
  // traverse resolved root page based on slugs
  let currentPage: Page | null = resolvedRootPage
  for (const slug of slugs) {
    if (!currentPage.$subdir[slug]) {
      return null // slug not found
    }
    currentPage = currentPage.$subdir[slug]
  }
  return currentPage
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
