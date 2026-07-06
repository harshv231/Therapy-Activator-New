import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import psychologistRouter from './routes/psychologistRoute.js';
import userRouter from './routes/userRoutes.js';

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDb()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/psychologist', psychologistRouter)
app.use('/api/user', userRouter)
//localhost:4000/api/admin/add-psychologist

app.get('/',(req, res)=>{
    res.send('Api working ')
})
app.listen(port,()=> console.log("Server Started",port))