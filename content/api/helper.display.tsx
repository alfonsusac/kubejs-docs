// TODO - move this to /lib

import { Fragment } from "react"
import { isAnonMethodType, isExternal, isObjectType, isPrimitiveType, isUnionType, type DataType, type FunctionParam, type FunctionSignature, type MethodType } from "./helper"


// Constants

const TAB_SIZE = 2
const spaces = (n: number) => new Array(n + 1).join(' ')
const colors = {
  brackets: "text-zinc-500",
  keyword: "text-[#8EAECF]",
  identifier: "text-[#57A7AB]"
}

function a() { }






// Generic Renderers

export function RenderDataType(props: { data: DataType, offset?: number }) {
  const data = props.data
  if (isPrimitiveType(data)) {
    return <span className="">{data.$label}</span>
  }
  if (isUnionType(data)) {
    return <>
      {data.$args.map((arg, i) => {
        return <span key={i}>
          {i > 0 && <span className=""> | </span>}
          <RenderDataType data={arg} />
        </span>
      })}
    </>
  }
  if (isExternal(data)) {
    return <span className="">{data.$name}</span>
  }
  if (isObjectType(data)) {
    return <span className="">{data.$typeName}</span>
  }
  if (isAnonMethodType(data)) {
    return <>
      <span className={colors.brackets}>(</span>
      <RenderMethodSignatureParameters
        params={data.$overloads[0].$params}
      />
      <span className={colors.brackets}>) {'=>'} </span>
      <RenderDataType data={data.$overloads[0].$return} />
    </>
  }


  return `[${ data.$type }]`
}





// Specialized Renderers

export function RenderMethodOverloads(props: {
  data: MethodType,
  methodName?: string, 
  offset?: number, 
  splitLines?: boolean,
  
}) {
  const m = props.data
  const offset = props.offset ?? 0

  return <>{
    m.$overloads.map((o, i) => <span key={i} className="text-zinc-500 font-mono">
      {/* <span className="text-[#8EAECF]">(method) </span> */}
      <span className="text-[#57A7AB]">{props.methodName}</span>
      <span>(</span>{props.splitLines && <br />}
      <span>
        <RenderMethodSignatureParameters
          params={o.$params}
          offset={props.splitLines ? (offset + TAB_SIZE) : 0}
          splitLines={props.splitLines ?? false}
        />
      </span>{props.splitLines && <br />}
      <span>)</span>
      <span>{':'} </span>
      <span className="text-[#8FC8AB]!"><RenderDataType data={o.$return} /></span>{i < m.$overloads.length - 1 && '\n\n'}
    </span>)
  }</>
}

export function RenderMethodSignatureParameters(props: {
  params: FunctionParam[],
  offset?: number,
  splitLines?: boolean
}) {
  const offset = props.offset ?? 0
  const o = props.params

  return <>{
    o.map((p, j) => <Fragment key={j}>
      <span className="text-[#BCA1BE]">{spaces(offset)}{p.$label}</span>
      <span className="text-[#858C96]">: </span>
      <span className="text-[#8FC8AB]!"><RenderDataType data={p.$type} offset={offset} /></span>
      {j < o.length - 1 && <span>, {props.splitLines && <br />}</span>}
    </Fragment>)
  }</>
}