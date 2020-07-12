import React from 'react'
import styled from 'styled-components'

import { State } from './Caverna'

const Dwarf = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid black;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;
  text-align: center;
`

export default (props: { game: State }) => {
  const roundNo = props.game.rounds.findIndex(round => round.current) + 1;
  const dwarves = Object.entries(props.game.dwarves).filter(([_, dwarf]) => dwarf.born_on !== undefined && dwarf.born_on <= roundNo);
  return (
    <div className="d-flex flex-row justify-content-center">
      {dwarves.map(([name, entity]) => <Dwarf key={name}>
        <span>{name}</span>
      </Dwarf>)}
    </div>
  );
}