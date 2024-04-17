import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar logoText="CodeWithHarry" />
      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value+1)}} className="btn">Click me</button>
    </div>
  );
}

export default App;
