import React from 'react';

import PersonalSupply from './PersonalSupply';
import Dwarves from './Dwarves';
import FurnishingTiles from './FurnishingTiles';
import Actions from './Actions';
import Expedition from './Expedition';
import Forest from './Forest';
import Mountain from './Mountain';

export default () => {
  return (
    <div>
      <PersonalSupply />
      <Dwarves />
      <FurnishingTiles />
      <Actions />
      <Expedition />
      <Forest />
      <Mountain />
    </div>
  );
}