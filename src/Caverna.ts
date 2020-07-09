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
      refill: [
        {
          resource: 'wood',
          initial: 3,
          incremental: 1,
        }
      ],
      wood: 0,
    },
    'Wood Gathering': {
      description: (self: any) => `Take ${self.wood} Wood`,
      refill: [
        {
          resource: 'wood',
          initial: 1,
          incremental: 1,
          current: 0,
        }
      ],
      wood: 0,
    },
    'Excavation': {
      description: (self: any) => `Take ${self.stone} Stone and/or Place a Cavern/Cavern or Tunnel/Cavern Tile`,
      refill: [
        {
          resource: 'stone',
          initial: 1,
          incremental: 1,
          current: 0,
        }
      ],
      stone: 0,
    },
    'Ore Mining': {
      description: (self: any) => `Take ${self.ore} Ore, +2 Ore for each Ore Mine`,
      refill: [
        {
          resource: 'ore',
          initial: 2,
          incremental: 1,
        }
      ],
      ore: 0,
      bonus: {
        resource: 'ore',
        requirements: 'Ore Mine',
        amount: 2,
        foreach: true,
      },
    },
    'Sustenance': {
      description: (self: any) => `Take ${self.food} Food and 1 Grain and/or Place a Meadow/Field Tile`,
      refill: [
        {
          resource: 'food',
          initial: 1,
          incremental: 1,
          current: 0,
        }
      ],
      bonus: {
        resource: 'grain',
      },
    },
    'Ruby Mining': {
      description: (self: any) => `Take ${self.ruby} Ruby, +1 Ruby if you have at least 1 Ruby Mine`,
      refill: [
        {
          resource: 'ruby',
          initial: 1,
          incremental: 1,
          current: 0,
        }
      ],
      bonus: {
        resource: 'ruby',
        requirements: 'Ruby Mine',
        amount: 1,
        foreach: false,
      },
    },
    'Housework': {
      description: 'Take 1 Dog and/or Furnish a Cavern',
    },
    'Slash-And-Burn': {
      description: 'Place a Meadow/Field Tile and then/or Sow',
    },
    'Blacksmithing': {
      description: 'Craft a Weapon and then/or Go on 3 Expeditions',
    },
    'Sheep Farming': {
      description: 'Pay 2/4 Wood to build a Single/Double Pasture, Pay 1 Stone to build a Stable and then/or Take Sheep',
    },
    'Ore Mine Construction': {
      description: 'Place an Ore Mine/Deep Tunnel then Take 3 Ore and then/or Go on 2 Expeditions',
    },
    'Wish For Children': {
      description: 'Reproduce or Furnish a Dwelling',
    },
    'Donkey Farming': {
      description: 'Pay 2/4 Wood to build a Single/Double Pasture, Pay 1 Stone to build a Stable and then/or Take Donkeys',
    },
    'Ruby Mine Construction': {
      description: 'Place a Ruby Mine or Place a Ruby Mine on a Deep Tunnel and Take 1 Ruby',
    },
    'Ore Delivery': {
      description: 'Take Stone and Ore, Take 2 Ore for each Ore Mine',
    },
    'Family Life': {
      description: 'Activate Urgent Wish For Children, Reproduce, and/or Sow',
    },
    'Urgent Wish For Children': {
      description: 'Furnish a Dwelling and then Reproduce or Take 3 Gold',
    },
    'Ore Trading': {
      description: 'Exchange 2 Ore for 2 Gold and 1 Food up to 3 times',
    },
    'Adventure': {
      description: 'Craft a Weapon and then/or Go on an Expedition and then Go on an Expedition',
    },
    'Ruby Delivery': {
      description: 'Take Ruby, Take 1 Ruby is you have at least 2 Ruby Mines',
    },
  },
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
    },
    'Stable': {
      level: 8,
      amount: 1,
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
