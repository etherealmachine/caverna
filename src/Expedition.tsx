import React from 'react';

import Caverna from './Caverna';

export default (props: { game: Caverna }) => {
  return (
    <div>
      <h4>Expedition Loot</h4>
      <div className="d-flex flex-row flex-wrap">
        {Object.entries(props.game.expedition_loot).map(([name, entity]) => <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{entity.level}</p>
          </div>
        </div>)}
      </div>
    </div>
  );
}