import { MDXRemote, type MDXComponents } from "next-mdx-remote-client/rsc"
import { Breadcrumb } from "./breadcrumb"
import { prose } from "./prose"
import { Pill } from "./pill"

// Server Component

export function MDX(props: { source: string, components?: MDXComponents }) {
  return (
    <MDXRemote
      source={props.source}
      components={{
        ...prose,
        Warn: Warn,
        DiscordEmbed: DiscordEmbed,
        Logo: Logo,
        Breadcrumb: Breadcrumb,
        ObjectTag: ObjectTag,
        FunctionTag: FunctionTag,
        ValueTag: ValueTag,
        ...props.components,
        Cmd: prose.code,
        Folder: prose.code,
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