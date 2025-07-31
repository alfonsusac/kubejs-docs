import { StandalonePage } from "@/lib/docs/docs2"
import { editing_recipes } from "./editing_recipes"
import { getting_started } from "./getting_started"
import { editing_tags } from "./editing_tags"
import { Page } from "@/lib/docs/docs3"
import { CardDescription, CardLink, CardTitle } from "@/component/card"

export const TutorialPage = StandalonePage({
  href: "/docs/guide",
  title: "Guides",
  subtitle: "A collection of tutorials to help you get started with KubeJS.",
  content: ``,
  subpages: {
    // getting_started,
    // editing_recipes,
    // editing_tags,
  },
})

export function Tutorial(
  title: string,
  description: string,
  content: string = "",
) {
  return StandalonePage({
    href: `/docs/guide/${ title.toLowerCase().replace(/\s+/g, "-") }`,
    title,
    subtitle: description,
    content,
  })
}

// docs v3

export const TutorialPage2 = Page({
  title: 'Guides',
  subtitle: 'A collection of tutorials to help you get started with KubeJS.',
  content: '<TutorialList/>',
  subpages: {
    getting_started,
    editing_recipes,
    editing_tags,
  },
  components: (ctx) => ({
    TutorialList: () => <section className="mt-8 flex flex-col gap-2">
      {Object.entries(TutorialPage2.$subdir).map(([slug, tutorial]) => (
        <CardLink href={`${ ctx.currPath }/${ slug }`} key={slug}>
          <CardTitle>{tutorial.$title}</CardTitle>
          <CardDescription>{tutorial.$subtitle}</CardDescription>
        </CardLink>
      ))}
    </section>
  })
})