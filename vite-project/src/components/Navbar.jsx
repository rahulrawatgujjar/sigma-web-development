import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {

  const count = useSelector((state) => { return state.counter.value })

  return (
    <div>
      I am a navbar and count is {count}
    </div>
  )
}

export default Navbar
