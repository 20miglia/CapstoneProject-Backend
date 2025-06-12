import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




import NavBar from './components/navbar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx'


import Home from './pages/Home.jsx'
import Welcome from './pages/Welcome.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import MatchArea from './components/match/MatchArea.jsx'
import AddMatch from './components/match/AddMatch.jsx'
import UpdateMatch from './components/match/UpdateMatch.jsx'
import Profile from './pages/Profile.jsx'
import UpdateProfile from './pages/UpdateProfile.jsx'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
       <NavBar/>
       
    
    
         <Routes>
           
           <Route path="/" element={<Welcome/>} />
           <Route path="/home" element={<Home/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/login" element={<Login/>} />
           <Route path='/matcharea' element={<MatchArea/>} />
           <Route path="/addmatch" element={<AddMatch/>} />
           <Route path="/updatematch/:id" element={<UpdateMatch/>} />
           <Route path="/profile" element={<Profile/>} />
           <Route path="/updateprofile" element={<UpdateProfile/>} />

         </Routes>
    
    
    
       <Footer/>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
