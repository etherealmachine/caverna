import React, { useState } from 'react';

import PersonalSupply from './PersonalSupply';
import Dwarves from './Dwarves';
import FurnishingTiles from './FurnishingTiles';
import Actions from './Actions';
import Expedition from './Expedition';
import Forest from './Forest';
import Mountain from './Mountain';

import { InitialState, setOnChange } from './Caverna';

export default () => {
  const [game, setGame] = useState(InitialState);
  setOnChange(setGame);
  return (
    <div>
      <PersonalSupply game={game} />
      <Dwarves game={game} />
      <FurnishingTiles game={game} />
      <Actions game={game} />
      <Expedition game={game} />
      <div className="d-flex flex-row">
        <Forest />
        <Mountain />
      </div>
    </div>
  );
}