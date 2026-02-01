import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100 flex justify-between lg:pt-32 md:pt-16  lg:px-40 md:px-20 sm:px-14">
      <div className='flex flex-col leading-1 gap-4'>
        <p className='text-black font-bold' style={{fontSize: "12px"}}>NEW ARRIVALS ONLY</p>
        <div>
          <div className='flex items-center gap-2'>
            <p className='text-black text-5xl font-bold'>new</p>
            <img className='h-8 w-8' src="/logo2.jpeg" alt="hand_icon"/>
          </div>
          <p className='text-black text-5xl font-bold'>collections</p>
          <p className='text-black text-5xl font-bold'>for everyone</p>
        </div>
        <div className='mt-2'>
          <button className='flex items-center gap-1 bg-red-600 rounded-2xl py-3 px-3 text-white font-bold' style={{fontSize: "12px"}} >Latest Collection <FaLongArrowAltRight /></button>
        </div>
      </div>

      <div>
        <img className='h-[70%] w-80%' src="/pic6.jpeg" alt=''/>
      </div>
    </div>
  )
}

export default Hero
