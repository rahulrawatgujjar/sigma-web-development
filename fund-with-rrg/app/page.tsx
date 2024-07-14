import React from 'react'

const HomePage = () => {
  return (
    <div className='container mx-auto text-white'>
      <div className='min-h-[40vh] flex flex-col items-center justify-center gap-3 px-3'>
        <h1 className='font-bold text-3xl flex items-center gap-3'>
          Get me a Lassi
          <span>
            <img src="/lassi.png" alt="lassi" width={60} />
          </span>
        </h1>
        <p className='text-center'>A crowdfunding platform for creators. Get funded by your fans and followers.</p>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start here
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Read more
            </span>
          </button>
        </div>
      </div>

      <div className='h-1 bg-white opacity-10'></div>

      <div className='my-16 px-3'>
        <h2 className='font-bold text-2xl mb-10 text-center'>Your fans can buy you a Lassi</h2>
        <div className='flex gap-5 justify-around'>
          <div className="item flex flex-col items-center gap-1">
            <img className='bg-slate-800 rounded-full p-3' src="groot.png" alt="man" width={88} />
            <p className='font-bold text-center'>Fans want to help</p>
            <p className='text-center'>Your fans are available to support you</p>
          </div>
          <div className="item flex flex-col items-center gap-1">
            <img className='bg-slate-800 rounded-full p-3' src="coin.png" alt="coin" width={88} />
            <p className='font-bold text-center'>Fans want to contribute</p>
            <p className='text-center'>Your fans are willing to contribute financially</p>
          </div>
          <div className="item flex flex-col items-center gap-1">
            <img className='bg-slate-800 rounded-full p-3' src="group.png" alt="man" width={88} />
            <p className='font-bold text-center'>Fans want to collaborate</p>
            <p className='text-center'>Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>

      <div className='h-1 bg-white opacity-10'></div>

      <div className='my-16 px-3'>
        <h2 className='font-bold text-2xl mb-6 text-center'>Learn about us</h2>
        <div className='flex flex-col gap-3'>
          <p className='text-center'>Welcome to <b>Get me a Lassi</b>, your trusted platform for crowdfunding and bringing dreams to life!</p>
          <p className=''><b>Rahul Rawat</b>, a Computer Engineering graduate from Bhiwani, Haryana, is the visionary behind <b>Get me a Lassi</b>. With a passion for technology and a commitment to making a difference, Rahul has created this platform to empower individuals and organizations to raise funds for their innovative projects and causes.</p>
        </div>
      </div>

    </div>
  )
}

export default HomePage
