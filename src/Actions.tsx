import React from 'react';

import Caverna from './Caverna';

export default () => {
  return (
    <div>
      {Object.entries(Caverna.actions).map(([name, entity]) => <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{entity.description}</p>
        </div>
      </div>)}
    </div>
  );
}