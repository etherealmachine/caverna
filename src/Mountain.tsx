import React from 'react'
import styled from 'styled-components'

import { State } from './Caverna'

const Space = styled.td`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-collapse: collapse;
`

export default (props: { game: State }) => {
  return (
    <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
      <tbody>
        {props.game.mountain.map((rows, rowNo) => <tr key={rowNo} className="d-flex flex-row">
          {rows.map((space, colNo) => <Space key={colNo}>
            {space.name !== undefined && space.name}
          </Space>)}
        </tr>)}
      </tbody>
    </table>
  );
}