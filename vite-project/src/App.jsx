import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [username, setUsername] = useState("Rahul");

  const handleClick = ()=>{
    alert("I am a click");
  }

  const handleMouseOver = ()=>{
    alert("I am a mouseover");
  }

  const handleChange = (e)=>{
    setUsername(e.target.value);
  }

  return (
    <>
    <div className="button">
      <button onClick={handleClick} >Click Me</button>
    </div>
    {/* <div className="pink" onMouseOver={handleMouseOver}>
    </div> */}
    <input type="text" value={username} onChange={handleChange} name="username" />


    </>
  )
}

export default App
