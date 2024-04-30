"use client"
import React from 'react'
import { submitAction } from '@/actions/form'
import { useRef } from 'react'

const home = () => {
  const ref = useRef(null);



  return (
    <div className='container mx-auto my-5'>
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name:</label>
          <input className='text-black p-1 m-1' type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input className='text-black p-1 m-1' type="text" name="address" id="address" />
        </div>
        <div>
          <button className='border-2 p-1 m-1'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default home
