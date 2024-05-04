import React from 'react'

const login = () => {
  return (
    <div>
      This is login page
    </div>
  )
}

export default login

// or Dynamic metadata
export async function generateMetadata({ params }) {
  console.log(params)
  return {
    title: 'Admin login',
  }
}