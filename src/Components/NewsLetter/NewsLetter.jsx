import React from 'react'

const NewsLetter = () => {
  return (
    <div className='h-[40vh] flex flex-col items-center mx-auto justify-center pt-8 px-16 bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100'>
      <h1 className='font-bold text-4xl text-gray-600'>Get Exclusive Letter On Your Email</h1>
      <p className='text-xl font-semibold text-gray-600'>Suscribe to our newsletter and stay updated</p>
      <div className=' flex flex-col items-center justify-center gap-8 h-[60vh] w-80'>
        <input className='rounded-xl py-2 px-8 outline-0 bg-gray-600 border-0 text-white font-bold' type='email' placeholder='Your Email id'/>
        <button className=' px-8 py-2 text-white bg-black rounded-xl text-center font-bold'>Suscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
