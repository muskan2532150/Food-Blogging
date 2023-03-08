import React from 'react'

const Box = ({value,onclick}) => {
  return (
    <>
        {console.log(value)}
        <button onClick={()=>onclick}>{value}</button>
    </>
  )
}

export default Box