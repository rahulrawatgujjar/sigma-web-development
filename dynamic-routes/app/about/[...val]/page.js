
import React from 'react'

const page = ({ params }) => {

  console.log(params)
  console.log(params.val)

  return (
    <>
      <div>I am about page</div>
      <div>
        { 
          params.val.map((item) => {
            return <div className='text-green-500'>{item}</div>
          })
        }
      </div>
    </>
  )

}

export default page
