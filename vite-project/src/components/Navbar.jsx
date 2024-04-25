import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-pink-400  flex items-center px-3'>
      <ul className='flex gap-3'>
        <NavLink className={(e)=>{return e.isActive?"bg-yellow-600":""}} to="/"><li className='p-3'>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"bg-yellow-600":""}} to="/about"><li className='p-3'>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"bg-yellow-600":""}} to="/login"><li className='p-3'>Login</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
