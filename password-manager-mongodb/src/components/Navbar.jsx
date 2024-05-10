import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-2 ">
        <div className="logo font-bold text-2xl">
          <span className='text-green-500'>&lt;</span>
          <span>Pass</span>
          <span className='text-green-500'>Mg/&gt;</span>
        </div>
        {/* <ul className='flex gap-3'>
          <li className='w-16 text-center '><a className='hover:font-bold' href="/">Home</a></li>
          <li className='w-16 text-center '><a className='hover:font-bold' href="#">About</a></li>
          <li className='w-16 text-center '><a className='hover:font-bold' href="#">Contact</a></li>
        </ul> */}
        <button onClick={() => { window.open("https://github.com/rahulrawatgujjar", "_blank") }} className='flex items-center gap-3 hover:bg-green-700 p-1 rounded-full ring-white active:ring-1'>
          <img className='invert w-7' src="/icons/github.svg" alt="github" />
          <span className='font-bold'>GitHub</span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar
