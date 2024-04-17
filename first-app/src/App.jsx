import './App.css'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Card from './components/Card'

function App() {

  return (
    <>
    <Navbar />
    <div className="cards">
      <Card title="card-1" desc="card-1 description"/>
      <Card title="card-2" desc="card-2 description"/>
      <Card title="card-3" desc="card-3 description"/>
      <Card title="card-4" desc="card-4 description"/>
    </div>
    <Footer />
    </>
  )
}

export default App
