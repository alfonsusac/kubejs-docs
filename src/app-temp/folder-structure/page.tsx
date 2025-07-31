// import { ArticleLayoutTemplate } from "@/component/article"
// import { prose } from "@/component/prose"
// import { CardDescription, CardLink, CardTitle } from "@/component/card"
// import { FolderStructurePage } from "../../../content/folders/+index"

// export default function DocsFolderStructurePage() { 
//   return (
//     <ArticleLayoutTemplate>
//       <prose.h1>{FolderStructurePage.$title}</prose.h1>
//       <prose.p>{FolderStructurePage.$subtitle}</prose.p>
//       <section className="mt-8 flex flex-col gap-2">
//         {Object.entries(FolderStructurePage.$data).map(([slug, folder]) => (
//           <CardLink href={`/docs/folder-structure/${ slug }`} key={slug}>
//             <CardTitle key={folder.$title}>{folder.$title}</CardTitle>
//             <CardDescription>{folder.$subtitle}</CardDescription>
//           </CardLink>
//         ))}
//       </section>
//     </ArticleLayoutTemplate>
//   )
// }