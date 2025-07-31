import { PageGroup, StandalonePage } from "@/lib/docs/docs2"
import { EventGroupsPage } from "./api/events/+index"
import { FolderStructurePage } from "./folders/+index"
import { TutorialPage, TutorialPage2 } from "./guide/+index"
import { Page } from "@/lib/docs/docs3"

export const docs_structure = [
  PageGroup("Getting Started", [
    TutorialPage,
    StandalonePage({ href: "/docs/tips", title: "Tips", subtitle: "A collection of tips and tricks to help you use KubeJS effectively." }),
    FolderStructurePage,
    StandalonePage({ href: "/docs/addons", title: "Addons", subtitle: "All KubeJS mod integrations" }),
    StandalonePage({ href: "/docs/tooling", title: "Tooling", subtitle: "Tools to help you develop KubeJS scripts." }),
  ]),
  PageGroup("References", [
    EventGroupsPage,
    StandalonePage({ href: "/docs/api/objects", title: "Objects", subtitle: "List of all objects that KubeJS supports." }),
    StandalonePage({ href: "/docs/api/datapack", title: "Data Pack" }),
    StandalonePage({ href: "/docs/api/commands", title: "Commands" }),
  ]),
]


export const docs_structure2 = Page({
  title: "KubeJS Documentation",
  subtitle: "Documentation for KubeJS, a Minecraft mod that allows you to create custom scripts and data packs.",
  content: ``,
  subpages: {
    guide: TutorialPage2,
  }
})