"use client"
import React, { useRef, useState } from 'react'

const DashboardPage = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    profilePic: '',
    coverPic: '',
    razorpayId: '',
    razorpaySecret: '',

  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    console.log(form);
  }


  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold text-center px-3 pt-10'>Welcome to your Dashboard</h1>
      <div className='px-3 py-10 sm:w-1/2 mx-auto'>
        <form ref={formRef} className='space-y-5' >
          <div>
            {/* input for name  */}
            {/* <label htmlFor="name" className='block font-bold mb-1'>Name</label> */}
            <input type="text" onChange={handleChange} name="name" id="name" placeholder='Name' className='w-full p-2 rounded-lg bg-slate-700 focus:outline-none focus:outline-purple-400' />
          </div>
          <div>
            {/* input for email  */}
            {/* <label htmlFor="email" className='block font-bold mb-1'>Email</label> */}
            <input type="email" onChange={handleChange} name="email" id="email" placeholder='Email' className='w-full p-2 rounded-lg bg-slate-700 focus:outline-none focus:outline-purple-400' />
          </div>
          <div>
            {/* input for username  */}
            {/* <label htmlFor="username" className='block font-bold mb-1'>Username</label> */}
            <input type="text" onChange={handleChange} name="username" id="username" placeholder='Username' className='w-full p-2 rounded-lg bg-slate-700 focus:outline-none focus:outline-purple-400' />
          </div>
          <div>
            {/* input for profile picture link */}
            {/* <label htmlFor="profile-picture" className='block font-bold mb-1'>Profile Picture</label> */}
            <input type="text" onChange={handleChange} name="profilePic" placeholder='Profile Picture' id="profile-picture" className='w-full p-2 rounded-lg bg-slate-700 focus:outline-none focus:outline-purple-400' />
          </div>
          <div>
            {/* input for cover picture link  */}
            {/* <label htmlFor="cover-picture" className='block font-bold mb-1'>Cover Picture</label> */}
            <input type="text" onChange={handleChange} name="coverPic" id="cover-picture" placeholder='Cover Picture' className='w-full p-2 rounded-lg bg-slate-700 focus:outline-none focus:outline-purple-400' />
          </div>
          <div>
            {/* input for razorpayid */}
            {/* <label htmlFor="razorpayid" className='block font-bold mb-1'>Razorpay ID</label> */}
            <input type="text" onChange={handleChange} name="razorpayId" id="razorpayid" placeholder='Razorpay ID' className='w-full p-2 rounded-lg bg-slate-700 focus:outline-none focus:outline-purple-400' />
          </div>
          <div>
            {/* input for razorpaysecret */}
            {/* <label htmlFor="razorpaysecret" className='block font-bold mb-1'>Razorpay Secret</label> */}
            <input type="text" onChange={handleChange} name="razorpaySecret" id="razorpaysecret" placeholder='Razorpay Secret' className='w-full p-2 rounded-lg bg-slate-700 focus:outline-none focus:outline-purple-400' />
          </div>
          <div>
            {/* save button  */}
            {/* <button className='w-full p-2 rounded-lg bg-slate-700 focus:outline-none focus:outline-purple-400 text-white'>Save</button> */}
            <button type="submit" onClick={
              (e) => {
                e.preventDefault();
                handleSubmit(e);
                if (formRef.current){
                  formRef.current.reset()
                }
              }
            } className="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white active:ring-4 active:outline-none active:ring-blue-300 dark:active:ring-blue-800">
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Save
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage
