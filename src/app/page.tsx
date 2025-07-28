import Link from "next/link"
import { Suspense } from "react"
import { MDX } from "../component/mdx"

export default function Home() {
  return (
    <div id="home_page" className="max-w-2xl mx-auto">
      <section className="my-20">
        <Suspense>
          <MDX
            source={content}
            components={{
              NavLinks: NavLinks,
            }}
          />
        </Suspense>
      </section>
    </div>
  )
}



function NavLinks() {
  return (
    <nav className="flex gap-2 mb-20">
      <Link href="/docs" className="p-2 px-5 bg-purple-400/20 hover:bg-purple-400/40 text-purple-400 rounded-lg font-semibold tracking-tight text-sm">Documentation</Link>
      <Link href={URLS.sourceCode} className="p-2 px-5 bg-zinc-600/20 hover:bg-zinc-600/40 rounded-lg font-semibold tracking-tight text-sm">Source Code</Link>
      <Link href={URLS.downloads} className="p-2 px-5 bg-zinc-600/20 hover:bg-zinc-600/40 rounded-lg font-semibold tracking-tight text-sm">Downloads</Link>
    </nav>
  )
}

const URLS = {
  kubejswiki: "https://kubejs.com/wiki/",
  sourceCode: "https://github.com/KubeJS-Mods/KubeJS/tree/main",
  downloads: "https://kubejs.com/downloads",
  discord: "https://discord.gg/lat",
  supportChannel: "https://discord.com/channels/303440391124942858/1254790121807548437"
}



const content = `

# <Logo /> KubeJS
Customize your modpack or server with JavaScript!

<NavLinks />

---

## What does this mod do?

This mod lets you create scripts in JavaScript language to manage your server, add new blocks and items, change recipes, add custom handlers for quest mods and more!


## How to use it?

Run the game with mod installed once. It should generate a \`kubejs\` folder in your minecraft directory with example scripts and README.txt. Read that!


## I don't know JavaScript

There's examples and pre-made scripts here. And you can always ask in discord support channel for help with scripts, but be specific.


## Can I reload scripts?

- \`startup_scripts/\`: Restart the game or use \`/kubejs reload startup_scripts\`. Not everything is reloadable - some things require you to restart the game (e.g. registries) or the world (e.g. worldgen).

- \`server_scripts/\`: Use \`/reload\` to reload scripts, recipes, tags and all data or \`/kubejs reload server_scripts\` to reload scripts only

- \`client_scripts/\`: Use \`F3 + T\` to reload scripts and assets or \`/kubejs reload client_scripts\` to reload scripts only


## What mod recipes does it support/is mod X supported?

If the mod uses datapack recipes, then it's supported by default. Some more complicated mods require addon mods, but in theory, still would work with datapack recipes. See [Editing Recipes]() and [Addons]() sections for more info.


## What features does this mod have?

See [Tutorials]().


## How does this mod work?

It uses a fork of Rhino, a JavaScript engine by Mozilla to convert JS code to Java classes at runtime. KubeJS wraps minecraft classes and adds utilities to simplify that a lot and remove need for mappings. [Architectury]() lets nearly the same source code be compiled for both Forge and Fabric making porting extremely easy.


## Ok, but what if it.. doesn't work?

You can report issues [here]().


## I have more questions / suggestions!

If wiki didn't have the answer for what you were looking for, you can join the [Discord server]() and ask for help on [#kubejs-support](${ URLS.supportChannel }) channel!

<DiscordEmbed />

## Links

Original KubeJS wiki: [KubeJS Wiki](${ URLS.kubejswiki })

Source code: [Source code](${ URLS.sourceCode })

Download: [Download](${ URLS.downloads })

<Warn>
Last supported Minecraft version is 1.21, anything below that and you're on your own!
</Warn>
`