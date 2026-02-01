import React from 'react'

const Offers = () => {
  return (
    <div className='lg:mx-24 md:mx-16 sm:mx-8 lg:px-16 md:px-8 sm:px-4 pt-10 h-[50vh] flex justify-between pb-20 bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100' >
      <div className='flex flex-col justify-center'>
        <h1 className='text-4xl mb-2 font-bold'>Exclusive</h1>
        <h1 className='text-4xl font-bold'>Offers For You</h1>
        <p className='text-gray-600 font-bold'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='px-4 py-2 text-white font-bold text-xl mt-4 cursor-pointer rounded-xl bg-red-700 border-none font'>Check Now</button>
      </div>
      <div className='flex items-center justify-center'>
        <img  src='/pic12.jpeg'  alt=''/>
      </div>
    </div>
  )
}

export default Offers
