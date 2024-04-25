import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-pink-400 h-12 flex items-center p-3'>
      <ul className='flex gap-3'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/login"><li>Login</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
