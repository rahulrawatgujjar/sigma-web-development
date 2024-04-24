import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="flex bg-indigo-900 text-white p-2 justify-between items-center fixed w-full">
        <div className="logo mx-3">
          <span className="font-bold text-xl">iTask</span>
        </div>
        <ul className="flex gap-3 mx-3">
          <li className='cursor-pointer hover:font-bold w-[50px] flex justify-center'>Home</li>
          <li className='cursor-pointer hover:font-bold w-[85px] flex justify-center'>Your Tasks</li>
        </ul>
      </nav>
      <div className="below-nav h-[44px]"></div>
    </>
  )
}

export default Navbar
