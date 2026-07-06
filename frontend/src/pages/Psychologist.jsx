

import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Psychologist = () => {
  const navigate = useNavigate()
  const { speciality } = useParams()
  const [filterPsy, setFilterPsy] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const { psychologist } = useContext(AppContext)
  const applyFilter = () => {
    if (speciality) {
      setFilterPsy(psychologist.filter(psy => psy.speciality === speciality))
    } else {
      setFilterPsy(psychologist)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [psychologist, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the Psychologist specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex ' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Clinical Psychologist' ? navigate('/psychologist') : navigate('/psychologist/Clinical Psychologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Clinical psychologist" ? "bg-indigo-100 text-black" : ""}`}>Clinical psychologist</p>
          <p onClick={() => speciality === 'Counselling Psychologist' ? navigate('/psychologist') : navigate('/psychologist/Counselling Psychologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Counselling Psychologist" ? "bg-indigo-100 text-black" : ""}`}>Counselling psychologist</p>
          <p onClick={() => speciality === 'Child Psychologist' ? navigate('/psychologist') : navigate('/psychologist/Child Psychologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Child Psychologist" ? "bg-indigo-100 text-black" : ""}`}>Child psychologist</p>
          <p onClick={() => speciality === 'Neuro Psychologist' ? navigate('/psychologist') : navigate('/psychologist/Neuro Psychologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neuro Psychologist" ? "bg-indigo-100 text-black" : ""}`}>Neuro psychologist</p>
          <p onClick={() => speciality === 'Health Psychologist' ? navigate('/psychologist') : navigate('/psychologist/Health Psychologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Health Psychologist" ? "bg-indigo-100 text-black" : ""}`}>Health psychologist</p>
          <p onClick={() => speciality === 'Forensic Psychologist' ? navigate('/psychologist') : navigate('/psychologist/Forensic Psychologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Forensic Psychologist" ? "bg-indigo-100 text-black" : ""}`}>Forensic psychologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterPsy.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'} text-green-500`}>
                    <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'} rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>
                    {item.name}
                  </p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))}
        </div>

      </div>

    </div>
  )
}

export default Psychologist
