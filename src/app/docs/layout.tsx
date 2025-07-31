import type { ReactNode } from "react"

export default function DocsLayout(props: { children: ReactNode }) {

  return (
    <div>
      {props.children}
    </div>
  )

  return (
    <div className="bg-red-500">
      {props.children}
    </div>
  )
}