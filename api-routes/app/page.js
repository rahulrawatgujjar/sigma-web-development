"use client"
import React from 'react'

const home = () => {

  const handleClick = async () => {
    let data = {
      name: "rahul",
      age: 23
    }
    const response = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const d = await response.json()
    console.log(d);
  }


  return (
    <div className='container mx-auto'>
      <div>I am home</div>
      <h1 className='text-xl font-bold'>Next.js api routes demo</h1>
      <button onClick={handleClick} className='bg-green-500 p-1 rounded-lg m-1'>Click me</button>
    </div>
  )
}

export default home
