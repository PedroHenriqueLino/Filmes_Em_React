//css
import './App.css'
//css

//routes
import { Outlet } from 'react-router-dom'
//Components
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
      <div className="container">

        <div className="navbar">
          <NavBar />
        </div>

        <div className="header">
          <Outlet />
        </div>


      </div>
    </>
  )
}

export default App
