// package dev.latvian.mods.kubejs.player

import { Boolean, fsig, Method, nullable, ObjectCategory, param, String, Void } from "../helper"
import { Player } from "../minecraft"
import { LivingEntityEventJS } from "./entity"


const Object = ObjectCategory(`/docs/api/objects/player`)

export const EntityArrayList = () => Object("EntityArrayList", {
  // TODO
})

export const PlayerEventJS = () => Object("PlayerEventJS", {
  getEntity: Method("", fsig(Player)),
  getPlayer: Method("Same as getEntity()", fsig(nullable(Player))),
  hasGameStage: Method("Checks if the player has the specified game stage", fsig(Boolean, param('stage', String))),
  addGameStage: Method("Adds the specified game stage to the player", fsig(Void, param('stage', String))),
  removeGameStage: Method("Removes the specified game stage from the player", fsig(Void, param('stage', String))),
}, LivingEntityEventJS())