import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [form, setForm] = useState({});

  const handleClick = ()=>{
    alert("I am a click");
  }

  const handleMouseOver = ()=>{
    alert("I am a mouseover");
  }

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  return (
    <>
    <div className="button">
      <button onClick={handleClick} >Click Me</button>
    </div>
    {/* <div className="pink" onMouseOver={handleMouseOver}>
    </div> */}
    <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
    <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChange} />

    </>
  )
}

export default App
