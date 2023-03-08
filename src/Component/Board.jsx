import React, {useState} from 'react'
import Box from './Box'

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
  return (
    <div>
        {board.map((value,index) => {
             return <Box value={value} key={index} /> 
              } )}       
    </div>
  )
}

export default Board