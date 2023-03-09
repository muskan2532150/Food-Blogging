import React from 'react'

const Box = ({value,onclick}) => {
  return (
    <>
        <button onClick={onclick}>{value}</button>
    </>
  )
}

export default Box