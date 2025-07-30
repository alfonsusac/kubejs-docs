import type { StandalonePage } from "@/lib/docs/docs2"
import { CardDescription, CardLink, CardTitle } from "./card"

export function CardGridSectionList(props: {
  data: {
    title: string,
    subtitle?: string,
    items: StandalonePage[]
  }[]
}) {
  return (
    <div className="flex flex-col gap-12 my-12">
      {props.data.map((section, index) =>
        <div key={index} className="flex flex-col gap-2">
          <h2 className="text-xl font-medium mb-2">{section.title}</h2>
          <CardGridSection>
            {section.items.map(subitem => <CardLink key={subitem.$title} href={subitem.$href}>
              <CardTitle>{subitem.$title}</CardTitle>
              <CardDescription>{subitem.$subtitle}</CardDescription>
            </CardLink>)}
          </CardGridSection>
        </div>
      )}
    </div>
  )
}

export function CardGridSection<T>(props: {
  children?: React.ReactNode,
}) {
  return (
    <div className="grid grid-cols-2 gap-2 my-4">
      {props.children}
    </div>
  )
}