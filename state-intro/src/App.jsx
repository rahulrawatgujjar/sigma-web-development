import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>Count is {count}</div>
    <button onClick={()=>{setCount(count+1)}}>Update count</button>
    </>
  )
}

export default App
