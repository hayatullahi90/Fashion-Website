import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex items-center gap-2'>
        <img className='h-24 w-24' src='/logo.jpeg' alt=''/>
        <p className='text-gray-800 font-semibold text-2xl'>HAYAT</p>
      </div>
      <div>
        <ul className='flex gap-10 text-xl mb-5'>
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Product</li>
        <li className='cursor-pointer'>Offices</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      </div>
      <div className='flex gap-8 justify-center mb-16'>
          <FaInstagram size={20}/>
          <IoLogoYoutube size={20} />
          <FaFacebook size={20}/>
      </div>    
        <div className='flex flex-col items-center gap-4 w-100% mb-10 text-gray-800 font-semibold'>
          <hr className='w-100 border-0 rounded-xl bg-gray-600 h-1' />
          <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
