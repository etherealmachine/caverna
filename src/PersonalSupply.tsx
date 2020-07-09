import React from 'react';

import { State } from './Caverna';

export default (props: { game: State }) => {
  return (
    <div>
      {Object.entries(props.game.resources['Personal Supply']).map(([name, count]) => <div key={name}>
        <span>{name.toUpperCase()}: {count}</span>
      </div>)}
    </div>
  );
}