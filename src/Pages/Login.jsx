import React from 'react'

const Login = () => {
  return (
    <div className='h-[80vh] w-1/2 mx-auto bg-stone-300 rounded-xl mb-8'>
      <div className='px-16'>
        <h1 className='text-center text-2xl font-bold pt-6'>Sign Up</h1>
        <div className='flex flex-col gap-10 mt-8'>
          <input className='bg-white outline-0 text-xl font-semibold rounded-xl px-4 py-2 border-0' type='text' placeholder='Enter Your Name'/>
          <input className='bg-white outline-0 text-xl font-semibold rounded-xl px-4 py-2 border-0' type='email' placeholder='Enter Your Email'/>
          <input className='bg-white outline-0 text-xl font-semibold rounded-xl px-4 py-2 border-0' type='passowrd' placeholder='Enter Your Password'/>
        </div>
        <button className='px-4 py-2 text-white bg-red-600 border-0 font-semibold cursor-pointer mt-8 w-full'>Continue</button>
        <p className='mt-10 text-gray-500 font-semibold text-xl'>Already have an account <span className='text-red-500'>Login here</span></p>
        <div className='flex items-center mt-10 text-xl font-semibold '>
          <input  type='checkbox' name='' id=''/>
          <p>By continuing i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login;
