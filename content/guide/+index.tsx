// import { StandalonePage } from "@/lib/docs/docs2"
import { editing_recipes } from "./editing_recipes"
import { getting_started } from "./getting_started"
import { editing_tags } from "./editing_tags"
import { Page } from "@/lib/docs/docs3"
import { CardDescription, CardLink, CardTitle } from "@/component/card"
import { docs } from "@/component/docs"

// docs v3

export const TutorialPage = Page({
  title: 'Guides',
  subtitle: 'A collection of tutorials to help you get started with KubeJS.',
  content: '<TutorialList/>',
  subpages: {
    getting_started,
    editing_recipes,
    editing_tags,
  },
  components: (ctx) => ({
    TutorialList: docs.subdirGrid(ctx)
  })
})