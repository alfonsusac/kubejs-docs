import { TutorialPage2 } from "./guide/+index"
import { Page, PageGroup } from "@/lib/docs/docs3"
import { CardGridSectionList } from "@/component/card-grid-lists"

export const docs_structure = [
  PageGroup("Getting Started", [
    TutorialPage2,
    // StandalonePage({ href: "/docs/tips", title: "Tips", subtitle: "A collection of tips and tricks to help you use KubeJS effectively." }),
    // FolderStructurePage,
    // StandalonePage({ href: "/docs/addons", title: "Addons", subtitle: "All KubeJS mod integrations" }),
    // StandalonePage({ href: "/docs/tooling", title: "Tooling", subtitle: "Tools to help you develop KubeJS scripts." }),
  ]),
  PageGroup("References", [
    // EventGroupsPage,
    // StandalonePage({ href: "/docs/api/objects", title: "Objects", subtitle: "List of all objects that KubeJS supports." }),
    // StandalonePage({ href: "/docs/api/datapack", title: "Data Pack" }),
    // StandalonePage({ href: "/docs/api/commands", title: "Commands" }),
  ]),
]


export const docs_structure2 = Page({
  title: "KubeJS Documentation",
  subtitle: "Documentation for KubeJS, a Minecraft mod that allows you to create custom scripts and data packs.",
  content: `
  
  Collection of links to various documentation pages and resources related to KubeJS.

  <DocsSectionList />
  `,
  subpages: {
    guide: TutorialPage2,
  },
  components: (ctx) => ({
    DocsSectionList: () =>
      <CardGridSectionList data={[
        {
          sectionTitle: "Getting Started",
          items: [
            TutorialPage2
          ]
        }
      ]} />,
  })
})