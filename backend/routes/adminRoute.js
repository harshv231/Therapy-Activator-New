import express from 'express'
import { addPsychologist, allPsychologists, loginAdmin, appointmentsAdmin, appointmentCancel, adminDashboard } from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authadmin.js'
import { changeAvailability } from '../controllers/psychologistController.js'

const adminRouter = express.Router()
adminRouter.post('/add-psychologist',authAdmin,upload.single('image'),addPsychologist)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/change-availability', authAdmin,changeAvailability)

adminRouter.post('/all-psychologists',authAdmin,allPsychologists)
adminRouter.get('/appointments', authAdmin, appointmentsAdmin)
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancel)
adminRouter.get('/dashboard', authAdmin, adminDashboard)

export default adminRouter