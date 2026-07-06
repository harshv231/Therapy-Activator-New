import express from 'express'
import { psychologistList, loginPsychologist, appointmentsPsychologist, appointmentCancel, appointmentComplete, psychologistDashboard, psychologistProfile, updatePsychologistProfile } from '../controllers/psychologistController.js'
import authPsychologist from '../middleware/authPsychologist.js'

const psychologistRouter = express.Router()

psychologistRouter.get('/list', psychologistList)
psychologistRouter.post('/login', loginPsychologist)
psychologistRouter.get('/appointments', authPsychologist, appointmentsPsychologist)
psychologistRouter.post('/complete-appointment', authPsychologist, appointmentComplete)
psychologistRouter.post('/cancel-appointment', authPsychologist, appointmentCancel)
psychologistRouter.get('/dashboard', authPsychologist, psychologistDashboard )
psychologistRouter.get('/profile', authPsychologist, psychologistProfile)
psychologistRouter.post('/update-profile', authPsychologist, updatePsychologistProfile)


export default psychologistRouter