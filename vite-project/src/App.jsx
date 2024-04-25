import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { counterContext } from './context/context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={{count,setCount}}>
        <Navbar/>
        <button className='bg-green-400 m-3 p-1 border border-black rounded-md' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </counterContext.Provider>
    </>
  )
}

export default App
