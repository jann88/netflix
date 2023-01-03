import React from 'react';

function Signup() {
  return (
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover'src="" alt="" />
        <div className='g-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-x-[320px] mx-auto py-16'> 
                <h1 className='text-3xl font-bold'>Sign Up</h1>  
                <form>
                    <input  className='p-3 my-2bg-gray-700 rounded'type="email" placeholder='Email' autoComplete='email'/>
                    <input  className='p-3 my-2bg-gray-700 rounded'type="password" placeholder="Password" autoComplete='current-password' />
                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                    <div className='flex justify-between items-center'>
                        <p><input className='mr-2'type="checkbox" />Remember Me</p>
                        <p>Need Help?</p>
                    </div>
                </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signup;