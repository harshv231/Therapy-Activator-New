import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedPsychologist from '../components/RelatedPsychologist'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointments = () => {
  
  const {psyId} = useParams()
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const {psychologist, currencySymbol, backendUrl, token, getPsychologistData} = useContext(AppContext)

  const navigate = useNavigate()
  const [psyInfo, setPsyInfo]= useState(null)
  const [psySlots, setPsySlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const fetchPsyInfo = async () => {
    const psyInfo = psychologist.find(psy => psy._id === psyId)
    setPsyInfo(psyInfo)
    }
    const getAvailableSlots = async() => {
      setPsySlots([])
      //getting current date
      let today = new Date()
      for(let i =0; i<7; i++){
        // getting date with index
        let currentDate = new Date(today)
        currentDate.setDate(today.getDate()+i)
        // setting end time of the date with index
        let endTime = new Date()
        endTime.setDate(today.getDate() + i)
        endTime.setHours(21, 0, 0, 0)

        //Setting hours
        if(today.getDate() === currentDate.getDate()){
          currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)

        }else{
          currentDate.setHours(10)
          currentDate.setMinutes(0)
        }
        let timeSlots = []
        while(currentDate < endTime){
          let formattedTime = currentDate.toLocaleTimeString ([], {hour: '2-digit', minute: '2-digit'})

          let day = currentDate.getDate()
          let month = currentDate.getMonth()+1
          let year = currentDate.getFullYear()

          const slotDate = day + "_" + month + "_" + year
          const slotTime = formattedTime

          const isSlotAvailable = psyInfo.slots_booked[slotDate] && psyInfo.slots_booked[slotDate].includes(slotTime) ? false : true

          if(isSlotAvailable) {
            timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          })
          }


          
          // Increment current time by 30 minutes
          currentDate.setMinutes(currentDate.getMinutes() + 30)
        }
        setPsySlots(prev => ([...prev, timeSlots]))
      }
    } 

    const bookAppointment = async () => {
      if (!token) {
        toast.warn('Login to Book Appointment')
        return navigate('/login')
      }

      try {
        
        const date = psySlots[slotIndex][0].datetime

        let day = date.getDate()
        let month = date.getMonth()+1
        let year = date.getFullYear() 

        const slotDate = day + "_" + month + "_" + year

        const { data } = await axios.post(backendUrl + '/api/user/book-appointment', {psyId, slotDate, slotTime}, {headers:{token}})

        if (data.success) {
          toast.success(data.message)
          getPsychologistData()
          navigate('/my-appointment')
        }else{

          toast.error(data.message)

        }

      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }


  
  useEffect(()=>{
    fetchPsyInfo()
  },[psychologist,psyId])
  useEffect(() => {
    getAvailableSlots()
  },[psyInfo])

  useEffect(() => {
    console.log(psySlots);
  },[psySlots])
  return psyInfo &&(
    <div>
      {/*-----Psychologist Details------*/ }
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
            <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={psyInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* -----Psy Info :name, degree, experiesnce */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{psyInfo.name} 
            <img className='w-5' src={assets.verified_icon} alt="" /></p>
            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              <p>{psyInfo.degree} - {psyInfo.speciality}</p>
              <button className='py-0.5 px-2 border text-xs rounded-full'>{psyInfo.experience}</button>
            </div>
            {/* ------Psychologist about-------- */}
            <div>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{psyInfo.about}</p>
            </div>
            <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{currencySymbol}{psyInfo.fees}</span></p>
        </div>
      </div>
      {/* -----Booking Slots ------  */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
         <p>Booking slots</p>
         <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            psySlots.length && psySlots.map((item,index) => (
              <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
         </div>
         <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {psySlots.length && psySlots[slotIndex].map((item,index)=>(
            <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
         </div>
         <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
      </div>
      {/* Listing related psycholgist */}
      <RelatedPsychologist psyId={psyId} speciality={psyInfo.speciality}/>
    </div>
  )
}

export default Appointments


// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const Appointments = () => {
//   const {docId} = useParams()
//   const {psychologist} = useContext(AppContext)
//   const [docInfo, setDocInfo]= useState(null)
//   const fetchDocInfo = async () => {
//     const docInfo = psychologist.find(doc => doc._id === docId)
//     setDocInfo(docInfo)
    
//     console.log(docInfo);
    
//   }
//   useEffect(()=>{
//     fetchDocInfo()
//   },[psychologist,docId])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Appointments
