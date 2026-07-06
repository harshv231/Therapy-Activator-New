import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Appointments from './pages/Appointments'
import MyAppointments from './pages/MyAppointments'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Psychologist from './pages/Psychologist'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/psychologist' element = {<Psychologist/>}/>
        <Route path='/psychologist/:speciality' element = {<Psychologist/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/my-profile' element = {<MyProfile/>}/>
        <Route path='/my-appointments' element = {<MyAppointments/>}/>
        <Route path='/appointment/:psyId' element = {<Appointments/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
