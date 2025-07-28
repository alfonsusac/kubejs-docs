import { EventGroup, EventHandler, Method, Object, fnsig, nullable, overloadParam, param } from "../helper"
import { Block, BlockItem, BlockState, Direction, Entity, ItemStack, Level, Player } from "../minecraft"
import { BlockContainerJS } from "../objects/level"
import { SCOPE } from "./helper"


const SUPPORTS_BLOCK_TARGET_PARAM = overloadParam(
  param('block', Block),
  param('item', BlockItem),
  param('state', BlockState),
)

// --------------------------------------------------------

const EventJS = Object("EventJS", {
  cancel: Method(`Cancels the event with default exit value. Execution will be stopped **immediately**.
					
		\`cancel\` denotes a \`false\` outcome.`, [['throw EventExit', ['value: Object | null']]]),
  success: Method(`Stops the event with default exit value. Execution will be stopped **immediately**.
					
		\`success\` denotes a \`true\` outcome.`, [['throw EventExit', ['value: Object | null']]]),
  exit: Method(`Stops the event with default exit value. Execution will be stopped **immediately**.
					
		\`exit\` denotes a \`default\` outcome.`, [['throw EventExit', ['value: Object | null']]])
})

const LevelEventKS = Object("LevelEventJS", {
  getLevel: Method("", [["Level"]]),
  getServer: Method("", [["MinecraftServer | null"]])
}, EventJS)

const EntityEventJS = Object("EntityEventJS", {
  getEntity: Method("", [["Entity"]]),
  getPlayer: Method("", [["Player | null"]]),
  getLevel: Method("", [[Level]]),
}, LevelEventKS)

const LivingEntityEventJS = Object("LivingEntityEventJS", {
  getEntity: Method("", [["Entity"]]),
  getPlayer: Method("", [["Player | null"]]),
  getLevel: Method("", [["Level"]]),
}, EntityEventJS)

const PlayerEventJS = Object("PlayerEventJS", {
  getEntity: Method("", [["Player"]]),
  getPlayer: Method("Same as getEntity()", [["Player | null"]]),
  hasGameStage: Method("Checks if the player has the specified game stage", [["boolean", ["stage: string"]]]),
  addGameStage: Method("Adds the specified game stage to the player", [["void", ["stage: string"]]]),
  removeGameStage: Method("Removes the specified game stage from the player", [["void", ["stage: string"]]]),
}, LivingEntityEventJS)

const BlockBrokenEventJS = Object("BlockBrokenEventJS", {
  getEntity: Method("The player that broke the block.", [["ServerPlayer"]]),
  getBlock: Method("The block that was broken.", [[Object("BlockContainerJS (anon subclass)", {
    getBlockState: Method("Gets the state of the block in the context of block breaks", [["BlockState"]])
  }, BlockContainerJS)]]),
  getXp: Method("The block that was broken.", [["int"]]),
  setXp: Method("Sets the experience dropped by the block. Only works on Forge.", [["void", ['int']]]),
}, PlayerEventJS)

const BROKEN = EventHandler(
  "Invoked when a block is destroyed by a player.",
  SCOPE.common,
  BlockBrokenEventJS,
  SUPPORTS_BLOCK_TARGET_PARAM,
  true
)

// --------------------------------------------------------

const BlockPlacedEventJS = Object("BlockBrokenEventJS", {
  getLevel: Method("The level of the block that was placed.", [fnsig(Level)]),
  getEntity: Method("The entity that placed the block.", [fnsig(Entity)]),
  getBlock: Method("The block that is placed.", [fnsig(Object("BlockContainerJS (anon subclass)", {
    getBlockState: Method("Gets the state of the block in the context of block placement", [["BlockState"]])
  }, BlockContainerJS))]),
}, EntityEventJS)

const PLACED = EventHandler(
  "Invoked when a block is placed.",
  SCOPE.common,
  BlockPlacedEventJS,
  SUPPORTS_BLOCK_TARGET_PARAM,
  true
)

// --------------------------------------------------------

const BlockLeftClickedEventJS = Object("BlockLeftClickedEventJS", {
  getEntity: Method("The entity that placed the block.", [fnsig(Player)]),
  getBlock: Method("The block that was left clicked.", [fnsig(BlockContainerJS)]),
  getItem: Method("The item that was used to left click the block.", [fnsig(ItemStack)]),
  getFacing: Method("The face of the block that was left clicked.", [fnsig(nullable(Direction))])
}, PlayerEventJS)

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