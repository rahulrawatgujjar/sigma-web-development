"use client"
import React from 'react'
import { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  return (
    <div className='my-3'>
      <div>Value of count is {count}</div>
      <button className='bg-blue-400 p-1 rounded-lg m-1' onClick={() => { setCount(count => count + 1) }}>Click me</button>
    </div>
  )
}

export default Counter
