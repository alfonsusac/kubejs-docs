import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "lazy-cn"
import Link from "next/link"
import Form from 'next/form'
import { prose } from "@/component/prose"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "KubeJS Unofficial Wiki",
  description: "An unofficial wiki for KubeJS, a modding framework for Minecraft.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  // Todo! - Dev Only
  // const searchDocuments: SearchDocument[] = []
  // docs_structure.map(section => section.items.map(page => {
  //   searchDocuments.push({
  //     id: page.$href,
  //     title: page.$title,
  //     href: page.$href,
  //     subtitle: page.$subtitle,
  //     content: page.$content || "",
  //   })
  // }))
  // indexDocuments(searchDocuments)

  // // TODO - make this dev only code, index on dev, commit and push to production.
  // const searchDocuments: SearchDocument[] = []
  // resolveDocsHref('/docs', docs_structure2)
  // traversePageTree(docs_structure2, (page) => {
  //   if (!page.$meta._href || !page.$title || !page.$subtitle) return
  //   searchDocuments.push({
  //     id: page.$meta._$href,
  //     title: page.$title,
  //     href: page.$meta._href,
  //     subtitle: page.$subtitle,
  //     content: page.$content || "",
  //   })
  // })
  // console.log(searchDocuments)
  // indexDocuments(searchDocuments)




  return (
    <html lang="en">

      {/* <body className={cn(geistSans.variable, geistMono.variable, "antialiased px-4")}> */}
      <body className={`${ geistSans.variable } ${ geistMono.variable } ${ cn("antialiased px-4 font-sans") }`}>

        <div className="max-w-4xl mx-auto">
          <header className="flex gap-8 items-center h-14">
            {/* Convert to Component */}
            <Link href="/" className="font-semibold">KubeJS</Link>
            <Link href="/docs" className="text-zinc-400/50 hover:text-zinc-400 text-sm">Documentation</Link>
            <Link href="https://kubejs.com/support" target="_blank" className="text-zinc-400/50 hover:text-zinc-400 text-sm">Support</Link>
            <Link href="https://kubejs.com/downloads" target="_blank" className="text-zinc-400/50 hover:text-zinc-400 text-sm">Downloads</Link>
            <Link href="/docs/search" className="text-zinc-400/50 hover:text-zinc-400 text-sm">Search</Link>
            {/* <Link className="bg-zinc-800/50 rounded-full text-sm text-zinc-700 p-1.5 px-4 w-full max-w-60" href="/docs/search">
              Search
            </Link> */}
            <div className="grow" />

            <Form action="/docs/search" className="w-full max-w-60">
              <prose.input className="rounded-full" name="q" placeholder="Search" />
            </Form>

          </header>

          <div id="root_layout_children_boundary" className="mt-4">
            {children}
          </div>

        </div>

      </body>

    </html>
  )
}
