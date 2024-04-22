import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import cardImage from "/card.jpg"

function App() {

  const [posts, setposts] = useState(false)

  useEffect(() => {
    (async function(){
      const response= await fetch("https://jsonplaceholder.typicode.com/posts");
      const data= await response.json();
      // console.log(data);
      setposts(data);
    })()
  }, [])
  

  return (
    <>
    <Navbar />
    <div className="container m-auto flex flex-wrap justify-around mt-4">

      { posts &&
        posts.map((post)=>{
          return (
            <div key={post.id} className="card w-[95vw] sm:w-[44vw] lg:w-[28vw] m-3 p-3 pt-0 px-0 border border-purple-400 rounded-lg">
              <div className="card-image">
                <img className='h-[10vh] w-full object-cover rounded-t-[7px]' src={cardImage} alt="" />
              </div>
              <div className="id p-1 px-3">
                <h1 className="font-bold">Id:</h1>
                {post.id}
              </div>
              <div className="title p-1 px-3">
                <h1 className="font-bold">Title:</h1>
                {post.title}
              </div>
              <div className="body p-1 px-3">
                <h1 className="font-bold">Body:</h1>
                {post.body}
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default App
