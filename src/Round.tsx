import React from 'react'

import { State } from './Caverna'

export default (props: { game: State }) => {
  return (
    <div>
      <h4>Round</h4>
      <div className="d-flex flex-row">
        {props.game.rounds.map((entity, roundIndex) => <div key={`round-${roundIndex + 1}`} className={entity.current ? 'text-primary' : ''}>
          {roundIndex + 1}: {`${entity.harvest}`}
        </div>)}
      </div >
    </div >
  );
}