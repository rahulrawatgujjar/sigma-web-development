import {React, useEffect} from 'react'

function Navbar({color}) {

    // Run on first  render
    useEffect(() => {
      alert("Hey I run at first render.");
    }, []);
    
    // Run on each render
    useEffect(()=>{
      alert("Hey I run at each render.");
    });

    // Run when color is updated
    useEffect(() => {
      alert("Color was updated");
    }, [color]);

    // Example of Cleanup function
    useEffect(() => {
      alert("Hey welcome to my page. This is the first render of App.jsx");

      return () => {
         alert("Navbar component was unmounted");
      }
    }, [])
    
    

  return (
    <div>
      <div>I am a Navbar of {color} color.</div>
    </div>
  )
}

export default Navbar
