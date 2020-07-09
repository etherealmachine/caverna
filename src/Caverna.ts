import produce from 'immer'

export const InitialState = {
  dwarves: {
    'First Dwarf': {
      weapon: 0,
      location: 'Cavern00',
    },
    'Second Dwarf': {
      weapon: 0,
      location: 'Cavern00',
    },
    'Third Dwarf': {
      weapon: 0,
    },
    'Fourth Dwarf': {
      weapon: 0,
    },
    'Fifth Dwarf': {
      weapon: 0,
    },
    'Sixth Dwarf': {
      weapon: 0,
    },
  },
  resources: {
    'Personal Supply': {
      food: 2,
      gold: 0,
      wood: 0,
      stone: 0,
      ore: 0,
      ruby: 0,
      grain: 0,
      vegetables: 0,
    },
  },
  animals: {
    'Dog': {
      animal: true,
      fertile: false,
      gold: 1,
      food: 0,
    },
    'Sheep': {
      animal: true,
      fertile: true,
      gold: 2,
      food: 1,
    },
    'Cow': {
      animal: true,
      fertile: true,
      gold: 4,
      food: 3,
    },
    'Donkey': {
      animal: true,
      fertile: true,
      gold: 2,
      food: 1.5,
    }
  },
  actions: {
    'Logging': {
      description: (self: any) => `Take ${self.wood} Wood and then/or Go on an Expedition`,
      round: 0,
      refill: [
        {
          resource: 'wood',
          initial: 3,
          incremental: 1,
        }
      ],
      wood: 3,
    },
    'Wood Gathering': {
      description: (self: any) => `Take ${self.wood} Wood`,
      round: 0,
      refill: [
        {
          resource: 'wood',
          initial: 1,
          incremental: 1,
          current: 0,
        }
      ],
      wood: 1,
    },
    'Excavation': {
      description: (self: any) => `Take ${self.stone} Stone and/or Place a Cavern/Cavern or Tunnel/Cavern Tile`,
      round: 0,
      refill: [
        {
          resource: 'stone',
          initial: 1,
          incremental: 1,
        }
      ],
      stone: 1,
    },
    'Ore Mining': {
      description: (self: any) => `Take ${self.ore} Ore, +2 Ore for each Ore Mine`,
      round: 0,
      refill: [
        {
          resource: 'ore',
          initial: 2,
          incremental: 1,
        }
      ],
      ore: 2,
      bonus: {
        resource: 'ore',
        requirements: 'Ore Mine',
        amount: 2,
        foreach: true,
      },
    },
    'Sustenance': {
      description: (self: any) => `Take ${self.food} Food and 1 Grain and/or Place a Meadow/Field Tile`,
      round: 0,
      refill: [
        {
          resource: 'food',
          initial: 1,
          incremental: 1,
          current: 0,
        }
      ],
      food: 1,
      bonus: {
        resource: 'grain',
      },
    },
    'Ruby Mining': {
      description: (self: any) => `Take ${self.ruby} Ruby, +1 Ruby if you have at least 1 Ruby Mine`,
      round: 0,
      refill: [
        {
          resource: 'ruby',
          initial: 1,
          incremental: 1,
          current: 0,
        }
      ],
      ruby: 1,
      bonus: {
        resource: 'ruby',
        requirements: 'Ruby Mine',
        amount: 1,
        foreach: false,
      },
    },
    'Housework': {
      description: 'Take 1 Dog and/or Furnish a Cavern',
      round: 0,
    },
    'Slash-And-Burn': {
      description: 'Place a Meadow/Field Tile and then/or Sow',
      round: 0,
    },
    'Blacksmithing': {
      description: 'Craft a Weapon and then/or Go on 3 Expeditions',
      round: 1,
    },
    'Sheep Farming': {
      description: 'Pay 2/4 Wood to build a Single/Double Pasture, Pay 1 Stone to build a Stable and then/or Take Sheep',
      round: 2,
    },
    'Ore Mine Construction': {
      description: 'Place an Ore Mine/Deep Tunnel then Take 3 Ore and then/or Go on 2 Expeditions',
      round: 3,
    },
    'Wish For Children': {
      description: 'Reproduce or Furnish a Dwelling',
      round: 4,
    },
    'Donkey Farming': {
      description: 'Pay 2/4 Wood to build a Single/Double Pasture, Pay 1 Stone to build a Stable and then/or Take Donkeys',
      round: 5,
    },
    'Ruby Mine Construction': {
      description: 'Place a Ruby Mine or Place a Ruby Mine on a Deep Tunnel and Take 1 Ruby',
      round: 6,
    },
    'Ore Delivery': {
      description: 'Take Stone and Ore, Take 2 Ore for each Ore Mine',
      round: 7,
    },
    'Family Life': {
      description: 'Activate Urgent Wish For Children, Reproduce, and/or Sow',
      round: 8,
    },
    'Urgent Wish For Children': {
      description: 'Furnish a Dwelling and then Reproduce or Take 3 Gold',
      round: 8,
    },
    'Ore Trading': {
      description: 'Exchange 2 Ore for 2 Gold and 1 Food up to 3 times',
      round: 9,
    },
    'Adventure': {
      description: 'Craft a Weapon and then/or Go on an Expedition and then Go on an Expedition',
      round: 10,
    },
    'Ruby Delivery': {
      description: 'Take Ruby, Take 1 Ruby is you have at least 2 Ruby Mines',
      round: 11,
    },
  },
  rounds: [
    {
      harvest: false,
      current: true,
    },
    {
      harvest: false,
      current: false,
    },
    {
      harvest: true,
      current: false,
    },
    {
      harvest: '1 per Dwarf',
      current: false,
    },
    {
      harvest: true,
      current: false,
    },
    {
      harvest: true,
      current: false,
    },
    {
      harvest: true,
      current: false,
    },
    {
      harvest: true,
      current: false,
    },
    {
      harvest: true,
      current: false,
    },
    {
      harvest: true,
      current: false,
    },
    {
      harvest: true,
      current: false,
    },
  ],
  furnishing_tiles: {
    'Dwelling': {
      description: 'Room for 1 Dwarf',
      cost: {
        wood: 4,
        stone: 3,
      },
      points: 3,
      dwarf_space: 1,
    },
    'Simple Dwelling 1': {
      description: 'Room for 1 Dwarf',
      cost: {
        wood: 4,
        stone: 2,
      },
      points: 0,
      dwarf_space: 1,
    },
    'Simple Dwelling 2': {
      description: 'Room for 1 Dwarf',
      cost: {
        wood: 3,
        stone: 3,
      },
      points: 0,
      dwarf_space: 1,
    },
    'Mixed Dwelling': {
      description: 'Room for 1 Dwarf and 1 pair of animals',
      cost: {
        wood: 5,
        stone: 4,
      },
      points: 4,
      dwarf_space: 1,
      animal_space: 2,
    },
    'Couple Dwelling': {
      description: 'Room for 2 Dwarfs',
      cost: {
        wood: 8,
        stone: 6,
      },
      points: 5,
      dwarf_space: 2,
    },
    'Additional Dwelling': {
      description: 'Room for the sixth Dwarf only',
      cost: {
        wood: 4,
        stone: 3,
      },
      points: 5,
      dwarf_space: 'Sixth Dwarf',
    },
  },
  expedition_loot: {
    'All Weapons +1': {
      level: 1,
    },
    'Wood': {
      level: 1,
      amount: 1,
    },
    'Dog': {
      level: 1,
      amount: 1,
    },
    'Grain': {
      level: 2,
      amount: 1,
    },
    'Sheep': {
      level: 2,
      amount: 1,
    },
    'Stone': {
      level: 3,
      amount: 1,
    },
    'Donkey': {
      level: 3,
      amount: 1,
    },
    'Vegetable': {
      level: 4,
      amount: 1,
    },
    'Ore': {
      level: 4,
      amount: 2,
    },
    'Boar': {
      level: 5,
      amount: 1,
    },
    'Gold': {
      level: 6,
      amount: 2,
    },
    'Furnish a Cavern': {
      level: 7,
      type: 'tile',
    },
    'Stable': {
      level: 8,
      amount: 1,
    },
    'Tunnel Tile': {
      level: 9,
      type: 'tile',
    },
    'Fenced Meadow': {
      level: 9,
      cost: {
        wood: 1,
      },
      type: 'tile',
    },
    'Cow': {
      level: 10,
      amount: 1,
    },
    'Twin Fenced Meadow': {
      level: 10,
      cost: {
        wood: 2,
      },
      type: 'tile',
    },
    'Meadow': {
      level: 11,
      type: 'tile',
    },
    'Dwelling': {
      level: 11,
      amount: 1,
      cost: {
        wood: 2,
        stone: 2,
      },
      type: 'tile',
    },
    'Field': {
      level: 12,
      type: 'tile',
    },
    'Sow': {
      level: 12,
      type: 'action',
    },
    'Cavern': {
      level: 14,
      type: 'tile',
    },
    'Breed': {
      level: 14,
      type: 'action',
    },
  }
}

export type State = typeof InitialState;

export let onChange: (game: typeof InitialState) => void;

export function setOnChange(f: (game: State) => void) {
  onChange = f;
}

export function performAction(game: State, name: string, entity: object) {
  onChange(produce(game, (game: State) => {

  }));
}
