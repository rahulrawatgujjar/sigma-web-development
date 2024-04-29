import React from 'react'

const Footer = () => {
  return (
    <div className="footer flex justify-around bg-green-800 py-8 text-sm">
      <div className="first">Copyright &copy; Facebook | All rights reserved</div>
      <ul className='flex gap-3'>
        <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/contact"><li>Contact</li></a>
      </ul>
    </div>
  )
}

export default Footer
