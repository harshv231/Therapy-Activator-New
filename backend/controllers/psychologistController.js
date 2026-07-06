import psychologistModel from "../models/psychologistModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"

const changeAvailability = async(req, res)=> {
    try {
        
        const {psyId} = req.body

        const  psyData = await psychologistModel.findById(psyId)
        await psychologistModel.findByIdAndUpdate(psyId, {available: !psyData.available})
        res.json({success:true, message: 'Availbility Changed'})
    } catch (error) {
        console.log(error)
        res.join({success:false, message:error.message})
    }
}

const psychologistList = async (req, res)=>{
    try {
        
        const psychologists = await psychologistModel.find({}).select(['-password', '-email'])

        res.json({success:true, psychologists})


    } catch (error) {
        console.log(error)
        res.join({success:false, message:error.message})
    }
}


//API for psychologist login
const loginPsychologist = async(req, res) => {
    try {
        const { email, password } = req.body
        const psychologist = await psychologistModel.findOne({email})

        if (!psychologist) {
            return res.json({success:false, message:'Invalid Credentials'})
        }

        const isMatch = await bcrypt.compare(password, psychologist.password)

        if (isMatch) {

            const token = jwt.sign({id:psychologist._id}, process.env.JWT_SECRET)

            res.json({success:true, token})

        }else{
            res.json({success:false, message:'Invalid Credentials'})
        }

    } catch (error) {
        console.log(error)
        res.join({success:false, message:error.message})
    }
}

//API to get psychologist appointments for psychologist panel
const appointmentsPsychologist = async (req, res) => {
    try {
        
        const { psyId } = req.body
        const appointments = await appointmentModel.find({ psyId })

        res.json({success: true, appointments})

    } catch (error) {
        console.log(error)
        res.join({success:false, message:error.message})
    }
}

// API to mark appointment completed for psychologist panel
const appointmentComplete = async (req, res) => {
    try {
       
        const {psyId , appointmentId } = req.body
        
        const appointmentData = await appointmentModel.findById(appointmentId)


        if (appointmentData && appointmentData.psyId === psyId) {
            
            await appointmentModel.findByIdAndUpdate(appointmentId, {isCompleted: true})
            return res.json({success:true, message:'Appointment Completed'})

        } else {
            return res.json({success:false, message:'Mark Failed'})
        }

    } catch (error) {
        console.log(error)
        res.join({success:false, message:error.message})
    }
}

//API to cancel appointment psychologist panel
const appointmentCancel = async (req, res) => {
    try {
       
        const {psyId , appointmentId } = req.body
        
        const appointmentData = await appointmentModel.findById(appointmentId)


        if (appointmentData && appointmentData.psyId === psyId) {
            
            await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})
            return res.json({success:true, message:'Appointment Cancelled'})

        } else {
            return res.json({success:false, message:'Cancellation Failed'})
        }

    } catch (error) {
        console.log(error)
        res.join({success:false, message:error.message})
    }
}


//API to get dashboard data for pyshchologist panel
const psychologistDashboard = async (req, res) => {
    try {
        
        const {psyId} = req.body
        const appointments = await appointmentModel.find({psyId})

        let earnings = 0

        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let patients = []

        appointments.map((item)=>{
            if (!patients.includes(item.user)) {
                patients.push(item.userId)
            }
        })

        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse().slice(0, 5)
        }
        res.json({success:true, dashData})

    } catch (error) {
        console.log(error)
        res.join({success:false, message:error.message})
    }
}

//API TO GET PSYCHOLOGIST PROFILE FOR PSYCHOLOGIST PANEL
const psychologistProfile = async(req, res) =>{
    try {
        
        const {psyId} = req.body
        const profileData = await psychologistModel.findById(psyId).select('-password')

        res.json({success:true, profileData})

    } catch (error) {
        console.log(error)
        res.join({success:false, message:error.message})
    }
}

// api to upate psychologist profile data from psychologist panel
const updatePsychologistProfile = async (req, res) => {
    try {
        const {psyId, fees, address, available} = req.body

        await psychologistModel.findByIdAndUpdate(psyId, {fees, address, available})

        res.json({success:true, message:'Profile Updated'})


    } catch (error) {
        console.log(error)
        res.join({success:false, message:error.message})
    }
}

export {
    changeAvailability, psychologistList, 
    loginPsychologist, appointmentsPsychologist, 
    appointmentComplete, 
    appointmentCancel, psychologistDashboard,
    psychologistProfile, updatePsychologistProfile,
}