import React from 'react'
import styled from 'styled-components'

import { State } from './Caverna'

const Round = styled.div<{ current: boolean }>`
  width: 100px;
  border: ${props => props.current ? '2px solid green' : '2px solid black'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;
`

export default (props: { game: State }) => {
  return (
    <div className="d-flex flex-row justify-content-center">
      {props.game.rounds.map((round, roundIndex) => <Round key={`round-${roundIndex + 1}`} current={round.current}>
        <span>{roundIndex + 1}</span>
        <span>{(typeof round.harvest) === 'boolean' ? (round.harvest ? 'Harvest' : 'No Harvest') : round.harvest}</span>
      </Round>)}
    </div >
  );
}