import React from 'react'
import "./Card.css"


function Card(props) {
  return (
    <div className='card'>
      <h1 style={{padding: "3px", "font-size": "1.5rem"}}>{props.title}</h1>
      <p style={{padding: "3px"}}>{props.desc}</p>
      <img width={200} src="https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{"margin-top":"10px", border: "1px solid black"}} />
    </div>
  )
}

export default Card
