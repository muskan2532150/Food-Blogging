import React from 'react'

const Box = ({value,onclick}) => {
  return (
    <button onclick={()=>onclick}>{value}</button>
  )
}

export default Box