import React from 'react';

import Caverna from './Caverna';

export default (props: { game: Caverna }) => {
  return (
    <div>
      <h4>Furnishing Tiles</h4>
      <div className="d-flex flex-row flex-wrap">
        {Object.entries(props.game.furnishing_tiles).map(([name, entity]) => <div key={name} className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{entity.description}</p>
          </div>
        </div>)}
      </div>
    </div>
  );
}