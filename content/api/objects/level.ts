import { Method, nullable, Object, param, Property } from "../helper"
import { Collection, List, Map } from "../java"
import { Level, BlockPos, ResourceLocation, Direction, BlockState, BlockEntity, CompoundTag, Entity, EntityType, ServerPlayer, ItemStack } from "../minecraft"
import { ExplosionJS, InventoryKJS } from "./core"
import { EntityArrayList } from "./player"

// package dev.latvian.mods.kubejs.level;
export const FireworksJS = Object("FireworkJS", {
  // TODO
})


// package dev.latvian.mods.kubejs.level;
export const BlockContainerJS = Object(
  "BlockContainerJS",
  {
    minecraftLevel: Property("", Level),
    clearCache: Method("", []),
    getLevel: Method("", [[Level]]),
    getPos: Method("", [[BlockPos]]),
    getDimension: Method("", [[ResourceLocation]]),
    getX: Method("", [['int']]),
    getY: Method("", [['int']]),
    getZ: Method("", [['int']]),
    offset: Method("", [
      ['BlockContainerJS', [Direction, 'int | null']],
      ['BlockContainerJS', ['x: int', 'y: int', 'z: int']],
    ]),
    getDown: Method("", [['BlockContainerJS']]),
    getUp: Method("", [['BlockContainerJS']]),
    getNorth: Method("", [['BlockContainerJS']]),
    getSouth: Method("", [['BlockContainerJS']]),
    getWest: Method("", [['BlockContainerJS']]),
    getEast: Method("", [['BlockContainerJS']]),
    getBlockState: Method("", [[BlockState]]),
    setBlockState: Method("", [['void', [BlockState, `flags:int`]]]),
    getId: Method("", []),
    getTags: Method("", [[Collection(ResourceLocation)]]),
    hasTag: Method("", [['boolean', [ResourceLocation]]]),
    set: Method("", [['void', [
      param('id', ResourceLocation),
      param('properties', Map(), true),
      param('flags', 'int')
    ]]]),
    getProperties: Method("", [[Map('string', 'string')]]),
    getEntity: Method("", [[nullable(BlockEntity)]]),
    getEntityId: Method("", [['string']]),
    getEntityData: Method("", [[nullable(CompoundTag)]]),
    setEntityData: Method("", [['void', [param('tag', CompoundTag, true)]]]),
    mergeEntityData: Method("", [['void', [param('tag', CompoundTag, true)]]]),
    getLight: Method("", [['int']]),
    getSkyLight: Method("", [['int']]),
    getBlockLight: Method("", [['int']]),
    getCanSeeSky: Method("", [['boolean']]),
    canSeeSkyFromBelowWater: Method("", [['boolean']]),
    toString: Method("", [['string']]),
    createExplosion: Method("", [[ExplosionJS]]),
    createEntity: Method("", [[nullable(Entity), [param('type', EntityType)]]]),
    spawnLightning: Method("", [
      ['void', [param('effectOnly', 'boolean'), param('player', ServerPlayer, true)]],
      ['void', []],
    ]),
    spawnFireworks: Method("", [['void', [param('fireworks', FireworksJS)]]]),
    getInventory: Method("", [[nullable(InventoryKJS), [param('facing', Direction, true)]]]),
    getItem: Method("", [[ItemStack]]),
    getDrops: Method("", [
      [List(ItemStack), [param('entity', Entity, true), param('heldItem', ItemStack)]],
      [List(ItemStack)]
    ]),
    popItem: Method("", [['void', [param('item', ItemStack)]]]),
    popItemFromFace: Method("", [['void', [param('item', ItemStack), param('dir', Direction)]]]),
    equals: Method("", [['boolean', [param('obj', 'object')]]]),
    getPlayersInRadius: Method("", [[EntityArrayList, [param('radius', 'double', true)]]]),
    getBiomeId: Method("", [[ResourceLocation]]),
    specialEquals: Method("", [['boolean', [param('obj', 'object'), param('shallow', 'boolean')]]]),
    getTypeData: Method("", [[CompoundTag]])
  })

