import { fsig, Method, nullable, ObjectCategory } from "../helper"
import { Entity, Player, Level } from "../minecraft"
import { LevelEventKS } from "./level"

const Object = ObjectCategory(`/docs/api/objects/entity`)



export const EntityEventJS = () => Object("EntityEventJS", {
  getEntity: Method("", fsig(Entity)),
  getPlayer: Method("", fsig(nullable(Player))),
  getLevel: Method("", fsig(Level)),
}, LevelEventKS())

export const LivingEntityEventJS = () => Object("LivingEntityEventJS", {
  getEntity: Method("", fsig(Entity)),
}, EntityEventJS())