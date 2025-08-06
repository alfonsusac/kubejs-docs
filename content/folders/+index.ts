import { docs } from "@/component/docs"
import { Page } from "@/lib/docs/docs4"


export const FolderStructurePage = Page({
  title: "Folder Structure",
  subtitle: "Learn about the folder structure of /kubejs.",
  content: `<FolderStructureList />`,
  components: (ctx) => ({
    FolderStructureList: docs.subdirGrid(ctx)
  }),
  subpages: {
    assets: Page({
      title: "/assets",
      subtitle: "The assets folder",
      content: `
      The \`/assets\` folder acts just like the assets folder inside of a resource pack–however, it will always load–you can't disable it from loading in any way.
      
      Just like normal resource packs, it can be reloaded by pressing <Kbd>F3</Kbd> + <Kbd>T</Kbd>. Or you can also use <Cmd>/kubejs reload lang</Cmd> to only reload lang files.`,
    }),
    client_scripts: Page({
      title: "/client_scripts",
      subtitle: "The client scripts folder",
      content: `
      The \`/client_scripts\` folder contains scripts which are loaded every time client resources reload.
      
      They are used for:
      - JEI/REI events
      - tooltips
      - etc.
      
      You can reload all code inside of this folder by pressing <Kbd>F3</Kbd> + <Kbd>T</Kbd>, or you can reload all code outside of any event listeners by running <Cmd>/kubejs reload client_scripts</Cmd>.
      `,
    }),
    config: Page({
      title: "/config",
      subtitle: "The config folder",
      content: `
      The \`/config\` folder is the KubeJS config storage.
      
      This is also the only directory that scripts can access other than the world directory.`
    }),
    data: Page({
      title: "/data",
      subtitle: "The data folder",
      content: `
      The \`/data\` folder acts just like the data folder inside of a datapack-however, it will always load-you can't disable it from loading in any way.

      Just like normal datapacks, it can be reloaded by running <Cmd>\`/reload\`</Cmd>.

      On KubeJS 6.1+, you can also drop a datapack \`.zip\` into the data folder to load it.
      `
    }),
    exported: Page({
      title: "/exported",
      subtitle: "The exported folder",
      content: `
      The exported folder is used to store data dumps by KubeJS, like texture atlases.
      `
    }),
    server_scripts: Page({
      title: "/server_scripts",
      subtitle: "The server scripts folder",
      content: `
      The \`/server_scripts\` folder contains scripts which are loaded every time server resources load (world load, <Cmd>/reload</Cmd>).

      They're used for:

      - adding/removing recipes
      - adding/removing tags
      - modifying loot tables
      - handling server events, like a player right clicking a block
      - etc.

      You can reload all code inside of this folder by running <Cmd>/reload</Cmd>, or you can reload all code outside of any event listeners by running <Cmd>/kubejs reload server_scripts</Cmd>.
      `
    }),
    startup_scripts: Page({
      title: "/startup_scripts",
      subtitle: "The startup scripts folder",
      content: `
      The startup_scripts folder contains scripts which are used for things which require a full game restart.
      
      They're used for:
      - registering items/blocks
      - modifying existing items/blocks
      - adding forge event listeners
      - etc.
      
      You can reload all code inside of this folder by restarting the game, or you can reload all code outside of any event listeners by running /kubejs reload startup_scripts.`
    }),
  },
})
