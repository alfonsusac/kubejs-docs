import { MDXRemote, type MDXComponents } from "next-mdx-remote-client/rsc"
import Link from "next/link"

// Server Component

export function MDX(props: {  source: string, components?: MDXComponents }) {
  return (
    <MDXRemote
      source={props.source}
      components={{
        h1: (props: any) => <h1 className="text-4xl font-semibold tracking-tight" {...props} />,
        hr: (props: any) => <hr className="my-4 border-t border-foreground/20" {...props} />,
        h2: (props: any) => <h2 className="text-4xl font-semibold tracking-tight mt-6 mb-2 text-foreground/90" {...props} />,
        h3: (props: any) => <h3 className="text-2xl font-semibold tracking-tight mt-6 mb-1 text-foreground/90" {...props} />,
        li: (props: any) => <li className="list-disc ml-5 mb-3" {...props} />,
        code: (props: any) => <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm font-mono" {...props} />,
        a: (props: any) => {
          if (props.href?.startsWith("/"))
            return <Link className="text-blue-400 hover:underline" {...props} />
          return <a className="text-blue-400 hover:underline" target="_blank" {...props} />
        },
        p: (props: any) => <p className="my-3 text-foreground/80" {...props} />,
        Warn: Warn,
        DiscordEmbed: DiscordEmbed,
        Logo: Logo,
        ...props.components,
      }}
    />
  )
}

function Warn(props: { children: React.ReactNode }) {
  return (
    <div className="p-1 px-4 bg-orange-500/10 border-orange-500/25 border">
      {props.children}
    </div>
  )
}

function DiscordEmbed() {
  // @ts-expect-error allowtransparency is not recognized by TypeScript
  return <iframe src="https://discord.com/widget?id=303440391124942858&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
}

function Logo() {
  return (
    <div className="inline-block rounded-lg overflow-hidden align-[-7px]">
      <img src="https://avatars.githubusercontent.com/u/55331035" className="" width={40} height={40} />
    </div>
  )
}