import React from 'react';

import Caverna from './Caverna';

export default (props: { game: Caverna }) => {
  return (
    <div>
      {Object.entries(props.game.resources['Personal Supply']).map(([name, count]) => <div key={name}>
        <span>{name.toUpperCase()}: {count}</span>
      </div>)}
    </div>
  );
}