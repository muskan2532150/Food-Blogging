import React, { useState } from 'react'
import Box from './Box'

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xplayer, setXplayer] = useState(true);
    const [scores, setScores] = useState({xscore:0,yscore:0})
    const WINNER_cond = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

   const checkWinner = (updatedBoard) =>{
    console.log(board);
    for(let i=0;i<WINNER_cond.length;i++)
    {
        const [a,b,c] = WINNER_cond[i];
        if(updatedBoard[a] && updatedBoard[a]===updatedBoard[b] && updatedBoard[b] === updatedBoard[c] && updatedBoard[c])
        {
            console.log('1',updatedBoard[a])
        return updatedBoard[a]; 
        }
    }
   }

    const onclickhandle = (bindex) => {
        const updatedBoard = board.map((value, index) => {
            if (index === bindex) {
                return xplayer === true ? 'X' : 'O';
            }
            else {
                return value;
            }
        })
        setBoard(updatedBoard);
       const winner = checkWinner(updatedBoard);
       if(winner){
          if(winner === 'X')
          setScores(...scores,scores.xscore+1)
          else
          setScores(...scores,scores.yscore+1)
       }
       else 
       setXplayer(!xplayer);
    }

    return (
        <div>
            {board.map((value, index) => {
                return <Box value={value} onclick={() => { value === null && onclickhandle(index) }} key={index} />
            })}
        </div>
    )
}

export default Board