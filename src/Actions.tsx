import React from 'react';

import { State, performAction } from './Caverna';

export default (props: { game: State }) => {
  const round = props.game.rounds.findIndex(round => round.current) + 1;
  const actions = Object.entries(props.game.actions).filter(([_, action]) => action.round <= round);
  return (
    <div>
      <h4>Actions</h4>
      <div className="d-flex flex-row flex-wrap">
        {actions.map(([name, entity]) => <div key={name} className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{typeof entity.description === 'function' ? entity.description(entity) : entity.description}</p>
            <button onClick={() => performAction(props.game, name, entity)}>Take</button>
          </div>
        </div>)}
      </div>
    </div>
  );
}