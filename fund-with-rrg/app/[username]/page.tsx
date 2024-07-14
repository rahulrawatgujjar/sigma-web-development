import { Session } from 'inspector';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const UserPage = ({ params }: { params: { username: string } }) => {


  return (
    <>
      <div className="cover relative">
        <Image height={350} width={1000} className="w-full h-[350px]  object-cover object-bottom" src="/cover.jpg" alt="coverImage" />
        <Image height={80} width={80} className='absolute -bottom-9 left-[calc(50%-40px)] object-cover object-center rounded-xl w-20 h-20 border-2 border-white' src="/profile.jpg" alt="profileImage" />
      </div>

      <div className="container mx-auto">
        <div className="info flex flex-col items-center gap-2 mt-12">
          <div className='font-bold text-lg'>
            @{params.username}
          </div>

          <div className='text-sm text-slate-400'>
            Creating educational, inspirational and fun spaceflight content
          </div>

          <div className='text-sm text-slate-400'>
            6,709 members • Posts
          </div>
        </div>

        <div className="payment flex justify-between gap-5 py-10">
          <div className="supporters bg-slate-900 p-10 rounded-lg flex-grow">
            <h2 className='font-bold text-2xl'>Supporters</h2>
            <ul className='ml-3 mt-3 space-y-4'>
              <li className='flex gap-3 items-center'>
                <Image height={25} className='rounded-full object-cover object-center' width={25} src="/avatar.jpeg" alt="" />
                <div>
                  <span className='font-bold'>Surender</span> donated <span className='font-bold'>&#x20B9; 10,000</span> with a message <span>"I support you bro with lots of loves"</span>
                </div>
              </li>
              <li className='flex gap-3 items-center'>
                <Image height={25} className='rounded-full object-cover object-center' width={25} src="/avatar.jpeg" alt="" />
                <div>
                  <span className='font-bold'>Anubhav</span> donated <span className='font-bold'>&#x20B9; 10,000</span> with a message <span>"I support you bro with lots of loves"</span>
                </div>
              </li>
              <li className='flex gap-3 items-center'>
                <Image height={25} className='rounded-full object-cover object-center' width={25} src="/avatar.jpeg" alt="" />
                <div>
                  <span className='font-bold'>Sahil</span> donated <span className='font-bold'>&#x20B9; 10,000</span> with a message <span>"I support you bro with lots of loves"</span>
                </div>
              </li>
              <li className='flex gap-3 items-center'>
                <Image height={25} className='rounded-full object-cover object-center' width={25} src="/avatar.jpeg" alt="" />
                <div>
                  <span className='font-bold'>Vijay</span> donated <span className='font-bold'>&#x20B9; 10,000</span> with a message <span>"I support you bro with lots of loves"</span>
                </div>
              </li>
              <li className='flex gap-3 items-center'>
                <Image height={25} className='rounded-full object-cover object-center' width={25} src="/avatar.jpeg" alt="" />
                <div>
                  <span className='font-bold'>Yudhister</span> donated <span className='font-bold'>&#x20B9; 10,000</span> with a message <span>"I support you bro with lots of loves"</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="makePayment bg-slate-900 p-10 rounded-lg flex-grow">
            <h2 className='font-bold text-2xl'>Make a payment</h2>
            <div className='flex flex-col ml-3 mt-3 gap-3'>
              <input className='bg-slate-700 text-white px-3 py-1 rounded-lg focus:outline-none focus:outline-purple-400 h-[44px]' type="text" placeholder='Enter Name' />
              <input className='bg-slate-700 text-white px-3 py-1 rounded-lg focus:outline-none focus:outline-purple-400 h-[44px]' type="text" placeholder='Enter Message' />
              <input className='bg-slate-700 text-white px-3 py-1 rounded-lg focus:outline-none focus:outline-purple-400 h-[44px]' type="text" placeholder='Enter Amount in &#x20B9; ' />
              <div>
                <button
                  className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white active:ring-4 active:outline-none active:ring-blue-300 dark:active:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Pay
                  </span>
                </button>
              </div>
              <div className="flex gap-3 mt-2">
                <button className='bg-slate-700 text-white px-3 py-2 rounded-lg border-2 border-transparent hover:bg-slate-600 active:border-purple-600'>&#x20B9; 100</button>
                <button className='bg-slate-700 text-white px-3 py-2 rounded-lg border-2 border-transparent hover:bg-slate-600 active:border-purple-600'>&#x20B9; 200</button>
                <button className='bg-slate-700 text-white px-3 py-2 rounded-lg border-2 border-transparent hover:bg-slate-600 active:border-purple-600'>&#x20B9; 500</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserPage
