export abstract class TypeBuilderAbstract {
  abstract build(): string
}

type SupportedLiterals = TypeBuilderAbstract



export class TypeBuilder implements TypeBuilderAbstract {

  constructor(
    readonly name: string,
    public value: TypeBuilderAbstract = new PrimitiveTypeBuilder("unknown"),
    readonly exportThis: boolean = false
  ) { }

  setValue(value: SupportedLiterals) {
    this.value = value
    return this
  }

  build() {
    if (this.exportThis) {
      return `export type ${ this.name } = ${ this.value.build() }`
    }
    return `type ${ this.name } = ${ this.value.build() }`
  }
}


export class PrimitiveTypeBuilder implements TypeBuilderAbstract {
  constructor(private type: "string" | "unknown") { }
  build() {
    return this.type
  }
}


export class ObjectLiteralTypeBuilder implements TypeBuilderAbstract {
  properties: [string, SupportedLiterals][] = []

  addProperty(name: string, type: SupportedLiterals) {
    this.properties.push([name, type])
    return this
  }

  build() {
    return `{${ this.properties.map(([name, type]) => `${ name }: ${ type.build() }`).join(", ") }}`
  }

}


export class TupleLiteralTypeBuilder implements TypeBuilderAbstract {
  properties: SupportedLiterals[] = []

  addElement(type: SupportedLiterals) {
    this.properties.push(type)
  }

  build() {
    return `[${ this.properties.map(prop => prop.build()).join(", ") }]`
  }
}


export class ArrayLiteralTypeBuilder implements TypeBuilderAbstract {
  value: SupportedLiterals

  constructor(value: SupportedLiterals) {
    this.value = value
  }

  build() {
    return `${ this.value.build() }[]`
  }
}