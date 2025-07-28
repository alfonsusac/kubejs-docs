import { cn } from "lazy-cn"

export function CardLink(props: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a href={props.href}
      className="block p-4 px-4 border border-foreground/10 rounded-md hover:bg-foreground/5 flex flex-col gap-0.5"
    >
      {props.children}
    </a>
  )
}

export function CardTitle(props: React.ComponentProps<"div">) {
  return (
    <div {...props} className={cn("font-medium", props.className)} />
  )
}

export function CardDescription(props: React.ComponentProps<"div">) {
  return (
    <div {...props} className={cn("text-foreground/60 text-sm", props.className)} />
  )
}