import { MDXRemote, type MDXComponents } from "next-mdx-remote-client/rsc"
import { Breadcrumb } from "./breadcrumb"
import { prose } from "./prose"
import { Pill } from "./pill"
import {
  transformerTwoslash,
} from '@shikijs/twoslash'
import { fromMarkdown } from "mdast-util-from-markdown"
import { visit } from 'unist-util-visit'
import { codeToHtml } from "shiki"
import { ScriptTarget } from "typescript"
import { Tab, Tabs } from "./tabs"
import type { ComponentProps } from "react"



// Server Component
export async function MDX(props: { source: string, components?: MDXComponents }) {

  let source = props.source

  source = source.replaceAll('<CodeTab>', '<CodeTab>\n')

  // Extract Code Blocks
  const md = source
  const tree = fromMarkdown(md)
  const blocks: { code: string, lang: string, meta: string }[] = []
  visit(tree, 'code', (node) => {
    blocks.push({
      code: node.value,
      lang: node.lang || '',
      meta: node.meta || '',
    })
  })

  const htmlMap = new Map<string, string>()
  // Highlight with Twoslash
  for (const block of blocks) {
    const code = block.code
    const lang = block.lang
    const html = await codeToHtml(code, {
      lang,
      theme: 'nord',
      transformers: [transformerTwoslash({
        twoslashOptions: {
          compilerOptions: {
            target: ScriptTarget.ES2015,
            lib: [
              "ES5",
              "ES2015"
            ],
            rootDir: "./src",
            typeRoots: [
              "./content/.probe/server/probe-types"
            ],
            baseUrl: "./content/.probe/server/probe-types",
            skipLibCheck: true
          }
        }
      })]
    })

    // Patch <pre>
    // bg - #2e3440ff
    const patchedHtml = html.replaceAll(
      'shiki nord',
      'shiki nord my-4 p-4 bg-[#2e3440] rounded overflow-x-auto overflow-y-visible text-sm leading-tight tracking-tight [&_code]:bg-transparent'
    )

    const codeBlockId = Math.random().toString(36).substring(2, 15)
    htmlMap.set(codeBlockId, patchedHtml)

    // Replace the code block in the source with the highlighted HTML
    source = source.replace(
      `\`\`\`${ lang }${ block.meta ? ` ${ block.meta }` : '' }\n${ code }\n\`\`\``,
      `<RawHTML id="${ codeBlockId }"></RawHTML>`
    )
  }

  return (
    <MDXRemote
      source={source}
      components={{
        ...prose,
        Warn: Warn,
        DiscordEmbed: DiscordEmbed,
        Logo: Logo,
        Breadcrumb: Breadcrumb,
        ObjectTag: ObjectTag,
        FunctionTag: FunctionTag,
        ValueTag: ValueTag,
        Cmd: prose.code,
        Folder: prose.code,
        Dir: prose.code,
        Kbd: prose.code,
        ...props.components,
        RawHTML: (props: { id: string }) => {
          const html = htmlMap.get(props.id)
          if (!html)
            return <div >{props.id}</div>
          return <div dangerouslySetInnerHTML={{ __html: html }} />
        },
        CodeTabs: (props: ComponentProps<typeof Tabs>) =>
          <Tabs className="bg-[#2e3440] rounded-md" {...props} />,
        CodeTab: (props: ComponentProps<typeof Tab>) =>
          <Tab className="bg-[#2e3440] rounded-md [&_pre]:my-0" {...props} />,
        Tabs: Tabs,
        Tab: Tab,
      }}
    />
  )
}

function Warn(props: { children: React.ReactNode }) {
  return (
    <div className="p-1 px-5 bg-orange-500/15 rounded-md flex gap-4">
      <prose.p className="shrink-0">
        ⚠️
      </prose.p>
      <div>
        {props.children}
      </div>
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

////

export function ObjectTag() {
  return (
    <Pill className="text-sm inline-block">Object</Pill>
  )
}
export function FunctionTag() {
  return (
    <Pill className="text-sm inline-block">Function</Pill>
  )
}
export function ValueTag() {
  return (
    <Pill className="text-sm inline-block">Value</Pill>
  )
}
export function PackageTag() {
  return (
    <Pill className="text-sm inline-block">Package</Pill>
  )
}
export function ClassTag() {
  return (
    <Pill className="text-sm inline-block self-start">Class</Pill>
  )
}