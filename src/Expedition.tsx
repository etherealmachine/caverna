import React from 'react'

import { State } from './Caverna'

export default (props: { game: State }) => {
  return (
    <div>
      <h4>Expedition Loot</h4>
      <div className="d-flex flex-row flex-wrap">
        {Object.entries(props.game.expedition_loot).map(([name, entity]) => <div key={name} className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{entity.level}</p>
          </div>
        </div>)}
      </div>
    </div>
  );
}