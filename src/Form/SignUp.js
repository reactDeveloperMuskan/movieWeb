import React from 'react'
import { NavLink } from 'react-router-dom'

export const SignUp = () => {

  return (
    <div>
        <div className='p-10 pb-16 text-white ' style={{background:"rgba(36,6,67,0.7)"}}>
            <h1 className=' pt-6 font-bold text-3xl '>  Join Today</h1>
            <h1 className='py-5 text-lg'>Get access to maintain your own <span className='text-gray-400'>custom personal lists, track what you've seen and search</span> and filter for <span className='text-gray-300'> what to watch next—</span>regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Apple TV Plus, Crunchyroll, and Hotstar.</h1>
         <NavLink to={"/signupform"} >  <button className='py-2 px-4 rounded-md  font-bold text-md bg-purple-700'> Sign Up</button></NavLink>
        </div>
    </div>
  )
}
 