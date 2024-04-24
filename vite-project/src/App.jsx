import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(false);

  const isFirstRender = useRef(true);


  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      setTodos(JSON.parse(todoString));
    }
  }, [])


  useEffect(() => {
    if (!isFirstRender.current) {
      saveToLS();
    }
    isFirstRender.current = false;
  }, [todos])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const handleEdit = (e, id) => {
    setTodo(todos.filter((item) => {
      return item.id === id;
    })[0].todo);
    handleDelete(e, id);
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    })
    setTodos(newTodos);
  }

  const handleAdd = (e) => {
    setTodos([...todos, { todo, id: uuidv4(), isCompleted: false }]);
    setTodo("");
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckbox = (e, id) => {
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  const toggleFinished = (e) => {
    setShowFinished(!showFinished);
  }




  return (
    <>
      <Navbar />
      <div className="sm:container sm:mx-auto mx-3 bg-violet-100 p-5 my-5 rounded-xl min-h-[85vh]">
        <h1 className='font-bold text-xl text-center'>iTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-3 sm:w-3/4 sm:mx-auto">
          <h2 className='text-lg font-bold'>Add Todo</h2>
          <div className="input-box flex justify-between gap-2">
          <input value={todo} onChange={handleChange} type="text" className='rounded-full px-3 w-full outline-none focus:outline-indigo-500 outline-[1.5px] outline-offset-0' />
          <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-indigo-700 hover:bg-indigo-900 text-white p-1 px-2 text-sm font-bold rounded-full disabled:bg-indigo-700/65 cursor-pointer'>Save</button>
          </div>
        </div>
        <div className="todos sm:w-3/4 sm:mx-auto">
            <input id="finish-box" className='mr-4 my-4' onChange={toggleFinished} type="checkbox" checked={showFinished} />
          <label className='text-sm cursor-pointer' htmlFor="finish-box">
            Show Finished
          </label>
          <div className="h-[1px] mx-3 my-2 bg-black opacity-10"></div>
          <h2 className='text-lg font-bold'>Your Todos</h2>
          {todos.length === 0 && <div className='m-5'>No Todos to display.</div>}
          {
            todos.map((item) => {
              return ( (showFinished || !item.isCompleted) &&
                <div key={item.id} className="todo flex justify-between my-3 gap-5">
                  <div className="todo flex gap-4">
                    <input className='h-fit my-[6px]' type="checkbox" checked={item.isCompleted} onChange={(e) => { handleCheckbox(e, item.id) }} />
                    <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                  </div>
                  <div className="buttons flex h-fit">
                    <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-indigo-700 hover:bg-indigo-900 text-white p-1 px-2 text-sm font-bold mx-1 rounded-md'><FaRegEdit /></button>
                    <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-indigo-700 hover:bg-indigo-900 text-white p-1 px-2 text-sm font-bold ml-1 rounded-md'><RiDeleteBin5Fill /></button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
