// TODO - move this to /lib

// All Types

export type DataType =
  | PrimitiveType | UnionType
  | ObjectType | External | MethodType
  | ThrowType | EnumType | AppliedGenericType


// Primitive Types

type String = { $label: "string", $type: "literal" }
export const String: String = { $label: "string", $type: "literal" }
export const isString = (x: any): x is String => x?.$label === "string"

type Int = { $label: "int", $type: "literal" }
export const Int: Int = { $label: "int", $type: "literal" }
export const isInt = (x: any): x is Int => x?.$label === "int"

type Double = { $label: "double", $type: "literal" }
export const Double: Double = { $label: "double", $type: "literal" }
export const isDouble = (x: any): x is Double => x?.$label === "double"

type Void = { $label: "void", $type: "literal" }
export const Void: Void = { $label: "void", $type: "literal" }
export const isVoid = (x: any): x is Void => x?.$label === "void"

type Boolean = { $label: "boolean", $type: "literal" }
export const Boolean: Boolean = { $label: "boolean", $type: "literal" }
export const isBoolean = (x: any): x is Boolean => x?.$label === "boolean"

type Null = { $label: "null", $type: "literal" }
export const Null: Null = { $label: "null", $type: "literal" }
export const isNull = (x: any): x is Null => x?.$label === "null"

// Only used in optional parameters
// type JavaScriptUndefined = { $label: "undefined", $type: "literal" }
// const JavaScriptUndefined: JavaScriptUndefined = { $label: "undefined", $type: "literal" }
// const isJavaScriptUndefined = (x: any): x is JavaScriptUndefined =>
//   x?.$label === "undefined"

type PrimitiveType = String | Int | Void | Boolean | Null
  | Double
export const PrimitiveTypes = [String, Int, Void, Boolean, Null]
export const isPrimitiveType = (x: any): x is PrimitiveType =>
  PrimitiveTypes.some(pt => pt.$label === x?.$label)




// Utility Types

type UnionType = { $type: "union", $args: DataType[] }
export function union(...types: DataType[]): UnionType {
  return {
    $type: "union",
    $args: types,
  }
}
export const isUnionType = (x: any): x is UnionType =>
  x?.$type === "union"


export function nullable(type: DataType): UnionType {
  return union(type, Null)
}
// export function optional(type: DataType): UnionType {
//   return union(type, JavaScriptUndefined)
// }



type ThrowType = { $type: "throw", $args: DataType, }
export function Throw(type: DataType): ThrowType {
  return { $type: "throw", $args: type, }
}
export const isThrowType = (x: any): x is ThrowType =>
  x?.$type === "throw"

type AppliedGenericType = {
  $type: "generic",
  $ofType: DataType,
  $genericArgs: string[],
}
export function Generic(type: DataType, ...label: string[]): AppliedGenericType {
  return {
    $type: "generic",
    $ofType: type,
    $genericArgs: label,
  }
}


// THE Function Type

// part of a function
export type FunctionParam = {
  $label: string,
  $type: DataType,
  $info?: string,
}
export function param(label: string, type: DataType, info?: string): FunctionParam {
  return { $label: label, $type: type, $info: info }
}

// part of a function
export type FunctionSignature = {
  $return: DataType,
  $params: FunctionParam[],
}
export function fsig(returnType: DataType, ...parameters: FunctionParam[]): FunctionSignature {
  return { $return: returnType, $params: parameters ?? [] }
}

export type MethodType = {
  $type: "method",
  $info: string,
  $overloads: FunctionSignature[],
  $methodType: "method" | "anonMethod",
}
export function Method(info: string, ...overloads: FunctionSignature[]): MethodType {
  return { $type: "method", $info: info, $overloads: overloads, $methodType: "method" }
}
export function isMethodType(x: any): x is MethodType {
  return x?.$type === "method" && Array.isArray(x.$overloads) && typeof x.$info === "string"
}


export function AnonMethod(info: string, returnType: FunctionSignature['$return'], ...params: FunctionSignature['$params']): MethodType {
  return { $type: "method", $info: info, $overloads: [fsig(returnType, ...params)], $methodType: "anonMethod" }
}
export function isAnonMethodType(x: any): x is MethodType {
  return x?.$type === "method" && Array.isArray(x.$overloads) && typeof x.$info === "string" && x.$methodType === "anonMethod"
}

// THE Object type

// part of an object
// type ObjectProperty = {
//   $objectMemberType: "property",
//   $info: string,
//   $type: DataType,
// }
// export function property(info: string, type: DataType): ObjectProperty {
//   return { $objectMemberType: "property", $info: info, $type: type }
// }

// type Method = {
//   $info: string,
//   $overloads: FunctionSignature[],
// }
// Example: const myFun = Method2("Foo", fsig(), fsig("string", param(), param()), fsig())

// export function overloadParam(...p: FunctionParam[]) {
//   return p
// }
// export function fnsig(returnType: DataType, params?: FunctionParam[]) {
//   return [returnType, params] as Overload
// }
// type Overload = [DataType, FunctionParam[]]





type ObjectType = {
  $type: "object",
  $info?: string,
  $typeName: string,
  $implements?: ObjectType | External,
  $availableAPI: Record<string, DataType>,
  $meta: {
    source?: string,
    package?: string,
  }
  $members: {
    [key in string]: DataType
  },
  $static: {
    [key in string]: DataType
  }
}
export const GenericObject = Object('GenericObject')
export function Object(
  name: string,
  properties?: Record<string, DataType>,
  _implements?: ObjectType | External,
  staticprops?: Record<string, DataType>,
  opts?: {
    $source?: string,
    $package?: string,
  },
  info?: string,
): ObjectType {

  // Resolve the implements chain to gather all accessible class members
  let accessibleClassMembers: Record<string, DataType> = {}
  let curr = _implements
  let stack = []
  while (curr !== undefined) {
    if ("$implements" in curr && curr.$implements) {
      stack.push(curr)
      curr = curr.$implements
    } else {
      curr = undefined
    }
  }
  let curr2 = stack.pop()
  while (curr2) {
    const { $members } = curr2
    const childMethods = global.Object.fromEntries(
      global.Object.entries($members).filter(([mName, mType]) => mType.$type === "method")
    )
    // console.log(curr2.$typeName)
    // console.log("ChildMethodss", global.Object.keys(childMethods))
    // console.log("accessibleClassMembers", global.Object.keys(childMethods))
    accessibleClassMembers = {
      ...accessibleClassMembers,
      ...childMethods
    }
    curr2 = stack.pop()
  }
  // end

  accessibleClassMembers = {
    ...accessibleClassMembers,
    ...properties,
  }

  // console.log(name)
  // console.log("accessibleClassMemberss", global.Object.keys(accessibleClassMembers))

  return {
    $type: "object",
    $info: info,
    $typeName: name,
    $availableAPI: accessibleClassMembers,
    $implements: _implements,
    $static: staticprops ?? {},
    $meta: {
      source: opts?.$source,
      package: opts?.$package,
    },
    $members: properties ?? {},
  }
}
export function isObjectType(x: any): x is ObjectType { return x?.$type === "object" }


// ------ external

type External = {
  $type: "external",
  $name: string,
  $fqn: string,
}
export function External(name: string, fullQualifiedName: string): External {
  return { $type: "external", $name: name, $fqn: fullQualifiedName }
}
export function isExternal(x: any): x is External { return x?.$type === "external" }


type ExternalGeneric = (...args: DataType[]) => {
  $type: "external",
  $name: string,
  $fqn: string,
  $genericArgs: DataType[],
}
export function ExternalGeneric(name: string, fullQualifiedName: string): ExternalGeneric {
  return (...args: DataType[]) => ({
    $type: "external",
    $name: name,
    $fqn: fullQualifiedName,
    $genericArgs: args,
  })
}


// ------ prepare for struct lol

// ---- THE Enum Type
type EnumType = {
  $type: "enum",
  $label?: string
  // Todo - idk what the js representation of an enum member is.
}
export function Enum(name: string): EnumType {
  return {
    $type: "enum",
    $label: name,
  }
}




// ---- events: Abstration of events for EventGroup API

type Scopes = "startup" | "server" | "client"

export const SCOPE = {
  common: ["startup", "server", "client"] as Scopes[],
  server: ["server"] as Scopes[],
  client: ["client"] as Scopes[],
  startup: ["startup"] as Scopes[],
}

export function EventHandler(
  info: string,
  scope: ("startup" | "server" | "client")[],
  eventObjectType: ObjectType, // Event handler parameter.
  eventTargetType?: FunctionParam[], // the target of the event, like the player or the block. Usually placed before the event handler parameter.
  hasResult: boolean = false, // idk what this for, but it's used in the original code.
) {
  const eventHandlerType = AnonMethod('', Void, param('event', eventObjectType))


  if (eventTargetType) {
    return {
      $scope: scope,
      ...Method(
        info,
        ...eventTargetType.map(e => fsig(Void, param(e.$label, e.$type), param('eventHandler', eventHandlerType))),
      )
    }
  }
  return {
    $scope: scope,
    ...Method(info, fsig(Void, param('eventHandler', eventHandlerType)))
  }
}
type EventHandler = ReturnType<typeof EventHandler>
export function isEventHandler(x: any): x is EventHandler {
  return x?.$scope && Array.isArray(x.$scope) && x.$type === "method" && x.$info
}

export function EventGroup(
  name: string,
  info: string,
  members: Record<string, DataType>
) {
  return Object(name, members, undefined, {}, {
    $source: "todo",
    $package: "todo",
  }, info)
}



