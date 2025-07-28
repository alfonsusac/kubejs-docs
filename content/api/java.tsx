import { External, ExternalGeneric } from "./helper"

export const Collection = ExternalGeneric("Collection", "java.util.Collection")
export const Map = ExternalGeneric("Map", "java.util.Map")
export const List = ExternalGeneric("List", "java.util.List")

export const Exception = External("Exception", "java.lang.Exception")