type DataType = ObjectType | 'string' | 'int' | 'void' | 'boolean' | External | NullableType | UnionType | (string & {})

export function Property(info: string, type: DataType) {
  return {
    $type: "property",
    $info: info,
    $propType: type,
  }
}
type Property = ReturnType<typeof Property>


export function Method(info: string, overloads: [returnType: DataType, parameters?: (Param | DataType)[]][]) {
  return {
    $type: "method",
    $info: info,
    $overloads: overloads
  }
}
type Method = ReturnType<typeof Method>


export function param(label: string, type: DataType, nullable?: boolean, info?: string) {
  return {
    $label: label,
    $nullable: nullable ?? false,
    $type: type,
    $info: info,
  }
}
type Param = ReturnType<typeof param>


export function overloadParam(...p: Param[]) {
  return p
}

export function fnsig(returnType: DataType, params?: Param[]) {
  return [returnType, params] as Overload
}
type Overload = [DataType, Param[]]


export function nullable(type: DataType) {
  return {
    $nullable: true,
    $type: type
  } as NullableType
}
type NullableType = { $nullable: true, $type: DataType }


export function union(...types: DataType[]) {
  return {
    $type: "union",
    $types: types,
  }
}
type UnionType = { $type: "union", $types: DataType[] }


export function Object(
  name: string,
  properties: Record<string, Method | Property>,
  _implements?: ObjectType,
  opts?: {
    $source?: string,
    $package?: string,
  }
) {
  let accessibleClassMembers: Record<string, Method | Property> = {}

  let curr = _implements
  let stack = []
  while (curr !== undefined) {
    stack.push(curr)
    curr = curr.$implements
  }

  let curr2 = stack.pop()
  while (curr2) {
    const { $members } = curr2
    accessibleClassMembers = {
      ...accessibleClassMembers,
      ...$members
    }
    curr2 = stack.pop()
  }

  return {
    $typeName: name,
    $availableAPI: accessibleClassMembers,
    $type: "object",
    $implements: _implements,
    $meta: {
      source: opts?.$source,
      package: opts?.$package,
    },
    $members: properties,
  } as ObjectType
}

type ObjectType = {
  $typeName: string,
  $implements: ObjectType,
  $availableAPI: Record<string, Method>,
  $type: "object",
  $meta: {
    source: string,
    package: string,
  }
  $members: {
    [key in string]: Method | Property
  }
}

// ------ external

export function External(name: string, fullQualifiedName: string) {
  return {
    $type: "external",
    $name: name,
    $fqn: fullQualifiedName,
  }
}
export type External = ReturnType<typeof External>


export function ExternalGeneric(name: string, fullQualifiedName: string) {
  return (...args: DataType[]) => ({
    $type: "external",
    $name: name,
    $fqn: fullQualifiedName,
    $genericArgs: args,
  })
}

// ------ events

export function EventHandler(
  info: string,
  scope: ("startup" | "server" | "client")[],
  eventType: ObjectType,
  eventTarget?: Param[],
  hasResult: boolean = false,
) {
  return {
    $scope: scope,
    ...Method(info, eventTarget
      ? eventTarget.map(e => [eventType, [param(e.$label, e.$label), eventType]])
      : [[eventType]]
    ),
  }
}
type EventHandler = ReturnType<typeof EventHandler>


export function EventGroup(
  name: string,
  info: string,
  events: Record<string, EventHandler>,
) {
  return {
    $name: name,
    $type: "eventGroup",
    $info: info,
    $events: events,
  }
}
type EventGroup = ReturnType<typeof EventGroup>

// ------ prepare for struct lol

