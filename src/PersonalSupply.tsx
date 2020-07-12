import React from 'react'
import styled from 'styled-components'

import { State } from './Caverna'

const Resource = styled.div`
  width: 100px;
  border: '2px solid black';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;
`

export default (props: { game: State }) => {
  return (
    <div className="d-flex flex-row justify-content-center">
      {Object.entries(props.game.resources['Personal Supply']).map(([name, count]) => <Resource key={name}>
        <span>{name[0].toUpperCase() + name.slice(1)}</span>
        <span>{count}</span>
      </Resource>)}
    </div>
  );
}