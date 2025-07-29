import { Boolean, Double, External, fsig, Method, ObjectCategory, param, union, Void } from "../helper"
import { Entity, ExplosionInteraction } from "../minecraft"

const Object = ObjectCategory(`/docs/api/objects/core`)

// package dev.latvian.mods.kubejs.core;
export const ExplosionJS = () => {
  const thisRef = Object("ExplosionJS", {
    x: Double,
    y: Double,
    z: Double,
    explode: Method("Trigger the explosion.",
      fsig(Void)
    ),
  }, null, {}, {
    $package: "dev.latvian.mods.kubejs.level"
  })
  thisRef.$members.exploder = union(
    Entity,
    Method("Set the entity causing the explosion.",
      fsig(thisRef,
        param("entity", Entity)
      )
    )
  )
  thisRef.$members.strength = union(
    Double,
    Method("Set the strength of the explosion.",
      fsig(thisRef,
        param("f", Double)
      )
    )
  )
  thisRef.$members.causesFire = union(
    Boolean,
    Method("Set whether the explosion causes fire.",
      fsig(thisRef,
        param("b", Boolean)
      )
    )
  )
  thisRef.$members.explosionMode = union(
    ExplosionInteraction,
    Method("Set the explosion mode.",
      fsig(thisRef,
        param("mode", ExplosionInteraction)
      )
    )
  )
  return thisRef
}



export const InventoryKJS = () => Object("InventoryKJS", {
  // TODO
})