import type { ComponentProps } from "react"
import { CardDescription, CardLink, CardTitle } from "./card"
import type { Page } from "@/lib/docs/docs3"
import { cn } from "lazy-cn"

export function CardGridSectionList(props: {
  data: {
    sectionTitle: string,
    items: Page[],
  }[],
}) {
  return (
    <SectionGroupList>
      {props.data.map((section, index) =>

        <SectionGroup key={index}>
          <SectionTitle>{section.sectionTitle}</SectionTitle>
          <CardGridSection>

            {section.items.map((subitem, index) =>
              <CardLink key={index} href={subitem.$meta._$href}>
                <CardTitle>{subitem.$title}</CardTitle>
                <CardDescription>{subitem.$subtitle}</CardDescription>
              </CardLink>
            )}

          </CardGridSection>
        </SectionGroup>

      )}
    </SectionGroupList>
  )
}

function SectionGroupList(props: ComponentProps<"div">) {
  return <div {...props} className={cn('flex flex-col gap-12 my-12', props.className)} />
}
function SectionGroup(props: ComponentProps<"div">) {
  return <div {...props} className={cn('flex flex-col gap-2', props.className)} />
}
function SectionTitle(props: ComponentProps<"h2">) {
  return <h2 {...props} className={cn('text-xl font-medium mb-2', props.className)} />
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