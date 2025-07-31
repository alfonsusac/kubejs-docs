// import { ArticleLayoutTemplate } from "@/component/article"
// import { prose } from "@/component/prose"
// import { readFile } from "fs/promises"
// import { notFound } from "next/navigation"
// import { ClassTag, PackageTag } from "@/component/mdx"
// import { CardLink, CardTitle } from "@/component/card"
// import { CardGridSection } from "@/component/card-grid-lists"
// import { isMethodType, isObjectType } from "../../../../../../../content/api/helper"
// import { RenderDataType, RenderMethodOverloads } from "../../../../../../../content/api/helper.display"

// export default async function DocsAPIObjectsCategoryPage(props: {
//   params: Promise<{ category: string, entry: string }>,
// }) {
//   const { category, entry } = await props.params

//   const has_file = await readFile(`./content/api/objects/${ category }.ts`).catch(() => null)
//   if (!has_file)
//     return notFound()

//   const pkg = await import(`@/../content/api/objects/${ category }`)
//   if (entry in pkg === false)
//     return notFound()

//   const entryItemFn = pkg[entry]
//   if (typeof entryItemFn !== "function")
//     throw new Error(`Entry "${ entry }" in package "${ category }" is not a function.`)
//   const entryItem = entryItemFn()
//   if (!isObjectType(entryItem))
//     throw new Error(`Entry "${ entry }" in package "${ category }" is not an object type.`)

//   return <ArticleLayoutTemplate>
//     <ClassTag />
//     <prose.h1>{entry}</prose.h1>

//     <section className="my-2 text-sm [&_p]:my-1">
//       <prose.p><span className="font-semibold">Package</span>: {entryItem.$meta.package ?? "unknown"}</prose.p>
//       <prose.p><span className="font-semibold">Type</span>: Object</prose.p>
//       <prose.p>{entryItem.$info}</prose.p>
//     </section>

//     <prose.h2>Properties</prose.h2>

//     <prose.table>
//       <prose.thead>
//         <prose.tr>
//           <prose.th>Name</prose.th>
//           <prose.th>Type</prose.th>
//           <prose.th>Description</prose.th>
//         </prose.tr>
//       </prose.thead>
//       <prose.tbody>
//         {Object
//           .entries(entryItem.$members)
//           .filter(([key, member]) => member.$type !== "method")
//           .map(([name, member]) => {
//             return (
//               <prose.tr key={name}>
//                 <prose.td><prose.code>{name}</prose.code></prose.td>
//                 <prose.td><prose.code>
//                   <RenderDataType data={member} />
//                 </prose.code></prose.td>
//                 <prose.td>-</prose.td>
//               </prose.tr>
//             )
//           })}
//       </prose.tbody>
//     </prose.table>

//     <prose.hr2 />


//     <prose.h2>Method</prose.h2>

//     {Object
//       .entries(entryItem.$members)
//       .filter(([key, member]) => member.$type === "method")
//       .map(([name, method], i) => {
//         if (isMethodType(method) === false) return

//         const flattenedParamsFromOverloads = method.$overloads
//           .flatMap(overload => overload.$params)
//           .filter((param, i, arr) => i === arr.findIndex(o => o.$label === param.$label)) // unique params

//         return <div key={i}>
//           <prose.h3 key={name} className="text-sm whitespace-pre-wrap mb-0">
//             <RenderMethodOverloads data={method} methodName={name} useSingleNewLine />
//           </prose.h3>
//           {/* {
//             flattenedParamsFromOverloads.map(param => {
//               return <span key={param.$label} className="text-xs text-gray-500">
//                 {param}
//                 {flattenedParamsFromOverloads.indexOf(param) < flattenedParamsFromOverloads.length - 1 ? ", " : ""}
//               </span>
//             })
//           } */}
//           <prose.p className="my-2 text-sm">{method.$info || "No information provided for this method."}</prose.p>

//           {!!flattenedParamsFromOverloads.length && <prose.table>
//             <prose.thead>
//               <prose.tr>
//                 <prose.th>Parameter</prose.th>
//                 <prose.th>Type</prose.th>
//                 <prose.th>Description</prose.th>
//               </prose.tr>
//             </prose.thead>
//             <prose.tbody>
//               {flattenedParamsFromOverloads
//                 .map((param, i) => {
//                   return (
//                     <prose.tr key={i}>
//                       <prose.td><prose.code>{param.$label}</prose.code></prose.td>
//                       <prose.td><prose.code>
//                         <RenderDataType data={param.$type} />
//                       </prose.code></prose.td>
//                       <prose.td>{param.$info || "-"}</prose.td>
//                     </prose.tr>
//                   )
//                 })}
//             </prose.tbody>
//           </prose.table>}

//         </div>
//       })
//     }



//   </ArticleLayoutTemplate>

// }