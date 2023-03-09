import React, { useState } from 'react'
import Box from './Box'

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xplayer, setXplayer] = useState(true)

    const onclickhandle = (bindex) => {
        const updatedBoard = board.map((value,index)=>{
            if (index === bindex) {
               return xplayer===true ?  'X' : 'O';
            }
            else {
                return value;
            } 
        })
       setBoard(updatedBoard);
        setXplayer(!xplayer);
    }

    return (
        <div>
            {board.map((value, index) => {
                return <Box value={value} onclick={() =>{value === null && onclickhandle(index)}} key={index} />
            })}
        </div>
    )
}

export default Board