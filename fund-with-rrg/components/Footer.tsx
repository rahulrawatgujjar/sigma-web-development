import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white px-4 pt-5'>
      <div className="container mx-auto flex justify-around">
        <div>
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul>
            <li><Link className='hover:text-blue-500 text-gray-300 text-sm' href="/terms">Terms and Conditions</Link></li>
            <li><Link className='hover:text-blue-500 text-gray-300 text-sm' href="/refund">Cancellation and Refund Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg">Contact Us</h4>
          <p className='text-gray-300 text-sm'>Email: rahulrawatr320@gmail.com</p>
        </div>
      </div>
      <p className='text-sm text-center mt-5'>
        Copyright © | Get me a Lassi | All rights reserved
      </p>
    </footer>
  )
}

export default Footer
