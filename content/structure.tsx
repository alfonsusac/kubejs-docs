import { TutorialPage } from "./guide/+index"
import { Page } from "@/lib/docs/docs4"
import { CardGridSectionList } from "@/component/card-grid-lists"
import { FolderStructurePage } from "./folders/+index"


export const docs_structure2 = Page({
  title: "KubeJS Documentation",
  subtitle: "Documentation for KubeJS, a Minecraft mod that allows you to create custom scripts and data packs.",
  content: `
  
  Collection of links to various documentation pages and resources related to KubeJS.

  <DocsSectionList />
  `,
  subpages: {
    guide: TutorialPage,
    folder: FolderStructurePage
  },
  components: () => ({
    DocsSectionList: () =>
      <CardGridSectionList data={[
        {
          sectionTitle: "Getting Started",
          items: [
            TutorialPage,
            FolderStructurePage,
          ]
        }
      ]} />,
  })
})