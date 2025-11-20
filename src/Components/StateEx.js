import React, { useState } from 'react'

const StateEx = () => {
  const [count ,countSet] =useState(0)
  return (
    <div className='container p-5 '>
      <h1>counter :{count}</h1>
      <button className='btn btn-primary me-4' onClick={()=> countSet(count + 1)}>increment</button>
      <button className='btn btn-danger' onClick={()=> countSet(count - 1)}>Decrement</button>
    </div>
  )
}

export default StateEx