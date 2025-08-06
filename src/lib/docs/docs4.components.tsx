// Components for the Docs System structure
//
// For now it is still coupled with the App's Design system.

import type { MDXComponents } from "next-mdx-remote-client"
import { type Page, type PageContext } from "./docs4"
import { Fragment, type ReactNode } from "react"
import { CardDescription, CardLink, CardTitle } from "@/component/card"
import { BreadcrumbItem, BreadcrumbSeparator } from "@/component/breadcrumb"

export function PageRenderer(props: {
  page: Page,
  context: PageContext,
  baseHref: `/${ string }`
  MDX: (props: { source: string, components?: MDXComponents }) => ReactNode
}) {
  const { page } = props

  // Basic Template
  const content = `
  <Title>${ props.page.$title }</Title>
  <Subtitle>${ props.page.$subtitle }</Subtitle>
  ${ props.page.$content }
  <PrevNext/>
  `
  return (
    <props.MDX
      source={content}
      components={{
        ...props.page.$components?.(props.context),
        PrevNext: () => <PrevNext
          data={{ prev: page.$meta._$prev, next: page.$meta._$next }}
          href={props.baseHref}
        />,
        BreadCrumb: () => <Breadcrumb baseHref={props.baseHref} resolvedPage={page} />
      }}
    />
  )
}


// Modular Compoenents


function PrevNext(props: {
  data: { prev?: Page | null, next?: Page | null }
  href: `/${ string }`
}) {
  const { next, prev } = props.data
  return (
    <div className="my-12 grid grid-cols-2 gap-4">
      {
        prev ?
          <CardLink href={`${ props.href }/${ prev?.$meta._$path?.join('/') }`}>
            <CardDescription>Previous</CardDescription>
            <CardTitle>
              {prev ? prev.$title : "Untitled page"}
            </CardTitle>
          </CardLink>
          : <div></div>
      }
      {
        next ?
          <CardLink href={`${ props.href }/${ next.$meta._$path?.join('/') }`}>
            <CardDescription>Next</CardDescription>
            <CardTitle>
              {next ? next.$title : "Untitled page"}
            </CardTitle>
          </CardLink>
          : <div></div>
      }
    </div>
  )
}


export function Breadcrumb(props: {
  resolvedPage: Page,
  baseHref: `/${ string }`
}) {
  const items: Page[] = [props.resolvedPage]
  while (items[0].$meta._$parent) {
    items.unshift(items[0].$meta._$parent)
  }

  return (
    <div className="flex gap-3 mb-8 text-sm">
      {
        items.map((item, i) => {
          const isLast = i === items.length - 1
          const label = item.$title ?? "Untitled Page"
          const href = props.baseHref + `/${ item.$meta._$path?.join('/') }`
          const isHome = href === props.baseHref + '/'
          return (
            <Fragment key={i}>
              <BreadcrumbItem label={isHome ? "Home" : label} href={isLast ? undefined : href} />
              {isLast ? null : <BreadcrumbSeparator />}
            </Fragment>
          )
        })
      }
    </div>
  )
}