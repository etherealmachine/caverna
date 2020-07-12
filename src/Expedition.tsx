import React from 'react'
import styled from 'styled-components'

import { State } from './Caverna'

const Loot = styled.div`
  width: 200px;
  margin: 4px;
`

export default (props: { game: State }) => {
  const levels = Object.entries(props.game.expedition_loot).reduce((levels: any, [name, reward]) => {
    if (levels[reward.level] === undefined) {
      levels[reward.level] = [];
    }
    levels[reward.level].push(name);
    return levels;
  }, {});
  return (
    <div>
      <h4>Expedition Loot</h4>
      <div className="d-flex flex-row flex-wrap">
        {Object.entries(levels).map(([level, rewards]) => <Loot key={level} className="card">
          <div className="card-body">
            <h5 className="card-title">{level}</h5>
            <div>{(rewards as Array<string>).map(reward => <p className="card-text" key={reward}><button>{reward}</button></p>)}</div>
          </div>
        </Loot>)}
      </div>
    </div>
  );
}