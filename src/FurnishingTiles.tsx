import React from 'react'
import styled from 'styled-components'

import { State } from './Caverna'

const Tile = styled.div`
  width: 200px;
  height: 200px;
  h5 {
    text-align: center;
    border-bottom: 1px solid black;
  }
  p {
    font-size: 0.7vw;
  }
  margin: 4px;
`

export default (props: { game: State }) => {
  return (
    <div>
      <h4>Furnishing Tiles</h4>
      <div className="d-flex flex-row flex-wrap">
        {Object.entries(props.game.furnishing_tiles).map(([name, entity]) => <Tile key={name} className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{entity.description}</p>
            <button>Build</button>
          </div>
        </Tile>)}
      </div>
    </div>
  );
}