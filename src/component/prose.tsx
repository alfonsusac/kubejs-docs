import { cn } from "lazy-cn"
import Link from "next/link"
import type { ComponentProps } from "react"

export const prose = {
  hr: (props: ComponentProps<"hr">) =>
    <hr {...props} className={cn("my-10 border-t border-foreground/20", props.className)} />,
  hr2: (props: ComponentProps<"hr">) =>
    <hr {...props} className={cn("my-10 border-t border-foreground/0", props.className)} />,
  h1: (props: ComponentProps<"h1">) =>
    <h1 {...props} className={cn("text-4xl font-semibold tracking-tight", props.className)} />,
  h2: (props: ComponentProps<"h2">) =>
    <h2 {...props} className={cn("text-2xl font-semibold tracking-tight mt-12 mb-2 text-foreground/90", props.className)} />,
  h3: (props: ComponentProps<"h3">) =>
    <h3 {...props} className={cn("text-lg font-semibold tracking-tight mt-10 mb-2 text-foreground/90", props.className)} />,
  ul: (props: ComponentProps<"ul">) =>
    <ul {...props} className={cn("list-disc pl-6 my-8", props.className)} />,
  ol: (props: ComponentProps<"ol">) =>
    <ol {...props} className={cn("list-decimal pl-6 my-8", props.className)} />,
  li: (props: ComponentProps<"li">) =>
    <li {...props} className={cn("mb-3 pl-2 text-foreground/80", props.className)} />,
  code: (props: ComponentProps<"code">) =>
    <code {...props} className={cn("bg-zinc-800 text-foreground/90 rounded px-1 py-0.5 text-xs font-mono ", props.className)} />,
  p: (props: ComponentProps<"p">) =>
    <p {...props} className={cn("my-4 text-foreground/80", props.className)} />,
  a: (props: ComponentProps<"a"> | ComponentProps<typeof Link>) => {
    if (props.href?.toString().startsWith("/"))
      return <Link {...props} className={cn("text-blue-400 hover:underline", props.className)} href={props.href.toString()} />
    return <a {...props} className={cn("text-blue-400 hover:underline", props.className)} target="_blank" href={props.href?.toString()} />
  },
  pre: (props: ComponentProps<"pre">) =>
    <pre {...props} className={cn("my-4 p-4 bg-gray-100 dark:bg-[#323843] rounded overflow-x-auto text-sm leading-tight tracking-tight [&_code]:bg-transparent", props.className)} />,

  table: (props: ComponentProps<"table">) =>
    <table {...props} className={cn("w-full my-4 border-separate border-spacing-0 text-sm bg-zinc-900 rounded-lg border border-zinc-800", props.className)} />,
  thead: (props: ComponentProps<"thead">) =>
    <thead {...props} className={cn("text-left", props.className)} />,
  tbody: (props: ComponentProps<"tbody">) =>
    <tbody {...props} className={cn("", props.className)} />,
  th: (props: ComponentProps<"th">) =>
    <th {...props} className={cn("py-2 font-semibold text-gray-700 dark:text-gray-300 px-2", props.className)} />,
  td: (props: ComponentProps<"td">) =>
    <td {...props} className={cn("py-2 text-gray-700 dark:text-gray-300 px-2 border-t border-zinc-800/50 in-[tr:first-child]:border-zinc-800", props.className)} />,
  tr: (props: ComponentProps<"tr">) =>
    <tr {...props} className={cn("border-b in-[thead]:border-zinc-800 in-[tbody]:border-zinc-800/50 in-[tbody]:last:border-transparent", props.className)} />,

}