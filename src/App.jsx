import React from 'react'
import './App.css'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <BrowserRouter>
    <Sidebar> 
    <Routes>
      <Route path ="/" element={<Dashboard/>}/>
      <Route path ="/dashboard" element={<Dashboard/>}/>
      <Route path ="/profile" element={<Profile/>}/>
      <Route path ="/about" element={<About/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  )
}

export default App