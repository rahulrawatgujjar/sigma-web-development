import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [showBtn, setshowBtn] = useState(false);

  const [todos, settodos] = useState([
    {
      title: "hey",
      desc: "I am a todo"
    },
    {
      title: "hello",
      desc: "I am an another todo"
    }
  ]);

  const Todo = ({ todo }) => {
    return (
      <>
      <div className="m-2 border border-blue-500 rounded-lg">
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </div>
      </>
    )
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <div>
          {showBtn ? <button className="m-3">Click me</button> : "rahul"}
        </div>
        <div>
          {showBtn && <button className='m-3'>Click me 2</button>}
        </div>
        <div>
          <button className='m-3' onClick={() => { setshowBtn(!showBtn) }}>Change visibility</button>
        </div>
        <div className='todos m-3'>
          {
            todos.map((todo) => {
              return <Todo key={todo.title} todo={todo} />
            })
          }
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
