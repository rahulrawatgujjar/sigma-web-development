import React from 'react'
// import { useState, useEffect } from 'react'
import fs from "fs/promises"
import Navbar from '@/components/Navbar';
import Counter from '@/components/Counter';

let file = fs.readFile(".gitignore")

file.then((value) => {
  console.log(value.toString());
});

const home = () => {

  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='container mx-auto my-2'>
        <div>I am home</div>
        <Counter />
        {/* <div>Value of count is {count}</div> */}
        {/* <button className='bg-blue-400 p-1 rounded-lg m-1' onClick={() => { setCount(count => count + 1) }}>Click me</button> */}
      </div>
    </>
  )
}

export default home
