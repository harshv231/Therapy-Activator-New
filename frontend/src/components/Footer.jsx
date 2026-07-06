import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ----Left section---*/}
        <div>
          <img className='mb-5 w-40' src={assets.logo1} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Therapy Activator is a web app connecting individuals with psychologists for online therapy. It offers chat and video call sessions for easy access to mental health support.</p>
        </div>
        {/*----centersection---*/}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gatp-2 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>
        </div>
        {/*----right section---*/}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gatp-2 text-gray-600'>
              <li>+91-9724543035</li>
              <li>therapyactivator231@gmail.com</li>

            </ul>
        </div>
      </div>
      <div>
        {/*----copyright text---*/}
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ Therapy Activator-All Right Reserverd</p>
      </div>
    </div>
  )
}

export default Footer
