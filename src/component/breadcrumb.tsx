'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment } from "react"

export function Breadcrumb() {
  const path_str = usePathname()
  const path = path_str.slice(1).split('/')

  return <div className="flex gap-2 mb-8 text-sm">
    {path.map((item, i) => {
      const href = '/' + path.slice(0, i + 1).join('/')
      const isLast = i === path.length - 1
      return (
        <Fragment key={i}>
          <BreadcrumbItem label={item} href={isLast ? undefined : href} />
          {isLast ? null : <BreadcrumbSeparator />}
        </Fragment>
      )
    })}
  </div>
}



function BreadcrumbItem(props: {
  label: string,
  href?: string,
}) {
  if (!props.href) {
    return <span className="text-foreground/75">{props.label}</span>
  }
  return (
    <Link className="text-foreground/50" href={props.href}>
      {props.label}
    </Link>
  )
}

function BreadcrumbSeparator() {
  return (
    <div className="text-foreground/25">
      /
    </div>
  )
}