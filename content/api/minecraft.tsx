import { External } from "./helper"

export const Level = External("Level"                      , "net.minecraft.world.level.Level")
export const Direction = External("Direction"              , "net.minecraft.core.Direction")
export const BlockPos = External("BlockPos"                , "net.minecraft.core.BlockPos")

export const BlockItem = External("BlockItem"              , "net.minecraft.world.item.BlockItem")
export const Block = External("Block"                      , "net.minecraft.world.level.block.Block")
export const BlockEntity = External("BlockEntity"          , "net.minecraft.world.level.block.entity.BlockEntity")
export const BlockState = External("BlockState"            , "net.minecraft.world.level.block.state.BlockState")

export const CompoundTag = External("CompoundTag"          , "net.minecraft.nbt.CompoundTag")

export const Entity = External("Entity"                    , "net.minecraft.world.entity.Entity")
export const EntityType = External("EntityType"            , "net.minecraft.world.entity.EntityType")

export const ItemStack = External("ItemStack"              , "net.minecraft.world.item.ItemStack")

export const ResourceLocation = External("ResourceLocation", "net.minecraft.resources.ResourceLocation")

export const Player = External("Player", "net.minecraft.world.entity.player.Player")

export const ServerPlayer = External("ServerPlayer"        , "net.minecraft.server.level.ServerPlayer")
export const MinecraftServer = External("MinecraftServer"  , "net.minecraft.server.MinecraftServer")