import { TutorialPage } from "./+template"

export const editing_tags = TutorialPage({
  title: 'Editing Tags',
  subtitle: 'Adding, removing, and modifying tags',
  content: `
  <Warn>
  Tags are per item/block/fluid/entity_type and as such cannot be added based on things like NBT data!
  </Warn>

  The tags event takes an extra parameter that determines which registry it's adding tags to. You will generally only need item, block, fluid and entity_type tags. However, it does support adding tags to any registry, including other mods ones. For mod ones make sure to include the namespace!

\`\`\`js
// Listen to item tag event
  ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('forge:cobblestone', 'minecraft:diamond_ore')

  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  event.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')

  // Get #forge:ingots/copper tag and remove all entries from it
  event.removeAll('forge:ingots/copper')

  // Required for FTB Quests to check item NBT
  event.add('itemfilters:check_nbt', 'some_item:that_has_nbt_types')

  // You can create new tags the same way you add to existing, just give it a name
  event.add('forge:completely_new_tag', 'minecraft:clay_ball')

  // It supports adding tags to tags as well. Just prefix the second tag with #
  event.add('c:stones', '#forge:stone')

  // Removes all tags from this entry
  event.removeAllTagsFrom('minecraft:stick')

  // Add all items from the forge:stone tag to the c:stone tag, unless the id contains diorite
  const stones = event.get('forge:stone').getObjectIds()
  const blacklist = Ingredient.of(/.*diorite.*/)
  stones.forEach(stone => {
    if (!blacklist.test(stone)) event.add('c:stone', stone)
  })
})
\`\`\`

Recipes use item tags, not block or fluid tags. Even if items representing those are blocks, like minecraft:cobblestone, it still uses an item tag for recipes.

\`\`\`js
// Listen to the block tag event
ServerEvents.tags('block', event => {
  // Add tall grass to the climbable tag. This does make it climbable!
  event.add('minecraft:climbable', 'minecraft:tall_grass')
})
\`\`\`
  `
})