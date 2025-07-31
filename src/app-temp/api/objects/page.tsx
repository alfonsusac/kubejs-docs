// import { ArticleLayoutTemplate } from "@/component/article"
// import { CardGridSection } from "@/component/card-grid-lists"
// import { CardDescription, CardLink, CardTitle } from "@/component/card"
// import { getAPIObjects } from "./data"

// export default async function DocsAPIObjectsPage() {

//   const data = await getAPIObjects()

//   return (
//     <ArticleLayoutTemplate
//       components={{
//         ObjectPackageList: () => <CardGridSection>
//           {data.map(pkg => (
//             <CardLink key={pkg.name} href={pkg.href}>
//               <CardTitle>{pkg.name}</CardTitle>
//               <CardDescription>
//                 {pkg.exported.length} object{pkg.exported.length !== 1 ? 's' : ''}
//               </CardDescription>
//             </CardLink>
//           ))}
//         </CardGridSection>
//       }}
//       content={`

// # Objects API

// Collection of Objects that might be referenced in KubeJS scripts. These objects are used to interact with the game and provide various functionalities.

// <ObjectPackageList />

// In this documentation, objects are categorized into packages based on where they were found in the source code.

//         `}

//     />
//   )
// }