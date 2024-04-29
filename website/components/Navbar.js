import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex bg-green-800 justify-between p-4'>
      <div className="logo font-bold text-xl">Facebook</div>
      <ul className='flex gap-3'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
