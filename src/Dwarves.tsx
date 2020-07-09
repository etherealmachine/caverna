import React from 'react';

import Caverna from './Caverna';

export default (props: { game: Caverna }) => {
  return (
    <div>
      {Object.entries(props.game.dwarves).map(([name, entity]) => <div key={name}>{name}</div>)}
    </div>
  );
}