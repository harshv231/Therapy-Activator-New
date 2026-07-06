import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllApointment from './pages/Admin/AllApointment';
import AddPsychologist from './pages/Admin/AddPsychologist';
import PsychologistList from './pages/Admin/PsychologistList';
import { PsychologistContext } from './context/PsychologistContext';
import PsychologistDashboard from './pages/Physchologist/PsychologistDashboard';
import PsychologistAppointments from './pages/Physchologist/PsychologistAppointments';
import PsychologistProfile from './pages/Physchologist/PsychologistProfile';


const App = () => {

  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(PsychologistContext)

  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          {/* Admin Route */}
          <Route path='/' element = {<></>} />
          <Route path='/admin-dashboard' element = {<Dashboard/>} />
          <Route path='/all-appointment' element = {<AllApointment/>} />
          <Route path='/add-psychologist' element = {<AddPsychologist/>} />
          <Route path='/psychologist-list' element = {<PsychologistList/>} />

          {/* Psychologist Route */}
          <Route path='/psychologist-dashboard' element = {<PsychologistDashboard/>} />
          <Route path='/psychologist-appointments' element = {<PsychologistAppointments/>} />
          <Route path='/psychologist-profile' element = {<PsychologistProfile/>} />
          
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App
