import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "lazy-cn"
import Link from "next/link"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">

      {/* <body className={cn(geistSans.variable, geistMono.variable, "antialiased px-4")}> */}
      <body className={`${ geistSans.variable } ${ geistMono.variable } ${ cn("antialiased px-4 font-sans") }`}>

        <div className="max-w-4xl mx-auto">
          <header className="flex gap-8 items-center h-14">
            <Link href="/"                                            className="font-semibold">KubeJS</Link>
            <Link href="/docs"                                        className="text-zinc-400/50 hover:text-zinc-400 text-sm">Documentation</Link>
            <Link href="https://kubejs.com/support"   target="_blank" className="text-zinc-400/50 hover:text-zinc-400 text-sm">Support</Link>
            <Link href="https://kubejs.com/downloads" target="_blank" className="text-zinc-400/50 hover:text-zinc-400 text-sm">Downloads</Link>
          </header>

          <div id="root_layout_children_boundary" className="mt-4">
            {children}
          </div>

        </div>

      </body>

    </html>
  )
}
