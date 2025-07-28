import { EventGroup, EventHandler, Int, Method, Object, SCOPE, Void, fsig, nullable, param } from "../helper"
import { Block, BlockItem, BlockState, Direction, Entity, ItemStack, Level, Player, ServerPlayer } from "../minecraft"
import { EntityEventJS } from "../objects/entity"
import { BlockContainerJS } from "../objects/level"
import { PlayerEventJS } from "../objects/player"


const SUPPORTS_BLOCK_TARGET_PARAM = [
  param('block', Block),
  param('item', BlockItem),
  param('state', BlockState),
]

// --------------------------------------------------------

const BlockBrokenEventJS = Object("BlockBrokenEventJS", {
  getEntity: Method("The player that broke the block.", fsig(ServerPlayer)),
  getBlock: Method("The block that was broken.", fsig(Object("BlockContainerJS (anon subclass)", {
    getBlockState: Method("Gets the state of the block in the context of block breaks", fsig(BlockState))
  }, () => BlockContainerJS, {}, {
    $docHref: BlockContainerJS.$meta.$docHref,
  }))),
  getXp: Method("The block that was broken.", fsig(Int)),
  setXp: Method("Sets the experience dropped by the block. Only works on Forge.", fsig(Void, param('xp', Int))),
}, () => PlayerEventJS)

const BROKEN = EventHandler(
  "Invoked when a block is destroyed by a player.",
  SCOPE.common,
  BlockBrokenEventJS,
  SUPPORTS_BLOCK_TARGET_PARAM,
  true
)

// --------------------------------------------------------

const BlockPlacedEventJS = Object("BlockBrokenEventJS", {
  getLevel: Method("The level of the block that was placed.", fsig(Level)),
  getEntity: Method("The entity that placed the block.", fsig(Entity)),
  getBlock: Method("The block that is placed.", fsig(Object("BlockContainerJS (anon subclass)", {
    getBlockState: Method("Gets the state of the block in the context of block placement", fsig(BlockState))
  }, () => BlockContainerJS))),
}, () => EntityEventJS)

const PLACED = EventHandler(
  "Invoked when a block is placed.",
  SCOPE.common,
  BlockPlacedEventJS,
  SUPPORTS_BLOCK_TARGET_PARAM,
  true
)

// --------------------------------------------------------

const BlockLeftClickedEventJS = Object("BlockLeftClickedEventJS", {
  getEntity: Method("The entity that placed the block.", fsig(Player)),
  getBlock: Method("The block that was left clicked.", fsig(BlockContainerJS)),
  getItem: Method("The item that was used to left click the block.", fsig(ItemStack)),
  getFacing: Method("The face of the block that was left clicked.", fsig(nullable(Direction)))
}, () => PlayerEventJS)

const LEFT_CLICKED = EventHandler(
  "Invoked when a player left clicks on a block.",
  SCOPE.common,
  BlockLeftClickedEventJS,
  SUPPORTS_BLOCK_TARGET_PARAM,
  true
)

// --------------------------------------------------------


export const BlockEvents = EventGroup("BlockEvents", "Events related to blocks", {
  // modification: undefined,
  // rightClicked: undefined,
  leftClicked: LEFT_CLICKED,
  placed: PLACED,
  broken: BROKEN,
  // detectorChanged: 0,
  // detectorPowered: 0,
  // detectorUnpowered: 0,
  // farmlandTrampled: 0,
})