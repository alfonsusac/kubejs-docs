import { Method, nullable, param, fsig, Int, Boolean, GenericObject, String, Void, Double, ObjectCategory } from "../helper"
import { Collection, List, Map } from "../java"
import { Level, BlockPos, ResourceLocation, Direction, BlockState, BlockEntity, CompoundTag, Entity, EntityType, ServerPlayer, ItemStack, Block, MinecraftServer } from "../minecraft"
import { ExplosionJS, InventoryKJS } from "./core"
import { EventJS } from "./event"
import { EntityArrayList } from "./player"

const Object = ObjectCategory(`/docs/api/objects/level`)


// package dev.latvian.mods.kubejs.level;
export const LevelEventKS = Object("LevelEventJS", {
  getLevel: Method("", fsig(Level)),
  getServer: Method("", fsig(nullable(MinecraftServer)))
}, () => EventJS)

// package dev.latvian.mods.kubejs.level;
export const FireworksJS = Object("FireworkJS", {
  // TODO
})


// package dev.latvian.mods.kubejs.level;
export const BlockContainerJS = Object("BlockContainerJS", {
  minecraftLevel: Level,
  // transient
  cachedState: BlockState,
  cachedEntity: BlockEntity,
  // --
  clearCache: Method(""),
  getLevel: Method("", fsig(Level)),
  getPos: Method("", fsig(BlockPos)),
  getDimension: Method("", fsig(ResourceLocation)),
  getX: Method("", fsig(Int)),
  getY: Method("", fsig(Int)),
  getZ: Method("", fsig(Int)),
  // offset: Method("", fsig(BlockContainerJS, param('f', Direction), param('d', optional(Int)))),
  // getDown: Method("", fsig(BlockContainerJS)),
  // getUp: Method("", fsig(BlockContainerJS)),
  // getNorth: Method("", fsig(BlockContainerJS)),
  // getSouth: Method("", fsig(BlockContainerJS)),
  // getWest: Method("", fsig(BlockContainerJS)),
  // getEast: Method("", fsig(BlockContainerJS)),
  getBlockState: Method("", fsig(BlockState)),
  setBlockState: Method("", fsig(Void, param('state', BlockState), param('flags', Int))),
  getId: Method(""),
  getTags: Method("", fsig(Collection(ResourceLocation))),
  hasTag: Method("", fsig(Boolean, param('tag', ResourceLocation))),
  set: Method("",
    fsig(Void, param('id', ResourceLocation), param('properties', Map()), param('flags', Int)),
    fsig(Void, param('id', ResourceLocation), param('properties', Map())),
    fsig(Void, param('id', ResourceLocation))),
  getProperties: Method("", fsig(Map(String, String))),
  getEntity: Method("", fsig(nullable(BlockEntity))),
  getEntityId: Method("", fsig(String)),
  getEntityData: Method("", fsig(nullable(CompoundTag))),
  setEntityData: Method("", fsig(Void, param('tag', nullable(CompoundTag)))),
  mergeEntityData: Method("", fsig(Void, param('tag', nullable(CompoundTag)))),
  getLight: Method("", fsig(Int)),
  getSkyLight: Method("", fsig(Int)),
  getBlockLight: Method("", fsig(Int)),
  getCanSeeSky: Method("", fsig(Boolean)),
  canSeeSkyFromBelowWater: Method("", fsig(Boolean)),
  toString: Method("", fsig(String)),
  createExplosion: Method("", fsig(ExplosionJS)),
  createEntity: Method("", fsig(nullable(Entity), param('type', EntityType))),
  spawnLightning: Method("",
    fsig(Void, param('effectOnly', Boolean), param('player', nullable(ServerPlayer))),
    fsig(Void, param("effectOnly", Boolean)),
    fsig(Void),
  ),
  spawnFireworks: Method("", fsig(Void, param('fireworks', FireworksJS))),
  getInventory: Method("", fsig(nullable(InventoryKJS), param('facing', nullable(Direction)))),
  getItem: Method("", fsig(ItemStack)),
  getDrops: Method("",
    fsig(List(ItemStack), param('entity', nullable(Entity)), param('heldItem', ItemStack)),
    fsig(List(ItemStack))
  ),
  popItem: Method("", fsig(Void, param('item', ItemStack))),
  popItemFromFace: Method("", fsig(Void, param('item', ItemStack), param('dir', Direction))),
  equals: Method("", fsig(Boolean, param('obj', GenericObject))),
  getPlayersInRadius: Method("", fsig(EntityArrayList, param('radius', nullable(Double)))),
  getBiomeId: Method("", fsig(ResourceLocation)),
  specialEquals: Method("", fsig(Boolean, param('obj', GenericObject), param('shallow', Boolean))),
  getTypeData: Method("", fsig(CompoundTag))
})

