import React from 'react';

import { State } from './Caverna';

export default (props: { game: State }) => {
  return (
    <div>
      {Object.entries(props.game.dwarves).map(([name, entity]) => <div key={name}>{name}</div>)}
    </div>
  );
}