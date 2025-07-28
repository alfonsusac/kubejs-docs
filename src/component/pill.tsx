import { cn } from "lazy-cn"
import type { ComponentProps } from "react"

export function Pill(props: ComponentProps<"div">) {
  return <div {...props} className={cn('px-1.5 py-0.3 rounded-sm text-[0.65rem] font-medium text-zinc-400/75 bg-zinc-200/7', props.className)} />
}