import Link from "next/link"
import type { ComponentProps } from "react"

export const prose = {
  hr: (props: ComponentProps<"hr">) => <hr className="my-12 border-t border-foreground/20" {...props} />,
  h1: (props: ComponentProps<"h1">) => <h1 className="text-4xl font-semibold tracking-tight" {...props} />,
  h2: (props: ComponentProps<"h2">) => <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-2 text-foreground/90" {...props} />,
  h3: (props: ComponentProps<"h3">) => <h3 className="text-lg font-semibold tracking-tight mt-10 mb-2 text-foreground/90" {...props} />,
  ul: (props: ComponentProps<"ul">) => <ul className="list-disc pl-3 my-8" {...props} />,
  li: (props: ComponentProps<"li">) => <li className="list-disc ml-5 mb-3" {...props} />,
  code: (props: ComponentProps<"code">) => <code className="bg-gray-100 dark:bg-zinc-800 text-foreground/90 rounded px-1 py-0.5 text-sm font-mono" {...props} />,
  p: (props: ComponentProps<"p">) => <p className="my-2 text-foreground/80" {...props} />,
  a: (props: ComponentProps<"a"> | ComponentProps<typeof Link>) => {
    if (props.href?.toString().startsWith("/"))
      return <Link className="text-blue-400 hover:underline" {...props} href={props.href.toString()} />
    return <a className="text-blue-400 hover:underline" target="_blank" {...props} href={props.href?.toString()} />
  },
  pre: (props: ComponentProps<"pre">) => <pre className="my-4 p-4 bg-gray-100 dark:bg-zinc-800 rounded overflow-x-auto text-sm" {...props} />,
}