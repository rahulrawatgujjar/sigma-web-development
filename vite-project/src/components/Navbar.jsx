import React from 'react'
import rrgLogo from "/rrg-logo.jpeg"

function Navbar() {
  return (
    <div>
      <nav className="w-full flex justify-between p-2 px-4 text-white bg-purple-500 fixed">
        <ul className='flex gap-3'>
          <li className='cursor-pointer hover:text-gray-400'>Home</li>
          <li className='cursor-pointer hover:text-gray-400'>About</li>
          <li className='cursor-pointer hover:text-gray-400'>Contact Us</li>
        </ul>
        <div className="logo w-[30px] ">
          <img className='rounded-lg cursor-pointer' src={rrgLogo} alt="" />
        </div>
      </nav>
      <div className="dummy h-[46px]"></div>
    </div>
  )
}

export default Navbar
