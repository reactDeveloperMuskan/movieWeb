import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className=' '>
            <div className='bg-blue-950 grid lg:grid-cols-5 md:grid-cols-3 gap-5 p-10  '>
                <div>
                    <img className='w-1/3 pb-4 ' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' />
                   <NavLink to={'/signupform'}>
                    <button className='font-bold p-3 bg-white rounded-md  text-blue-400 '> JOIN THE COMMUNITY</button>
                   </NavLink>
                </div>


                <div className='col-span-1'>
                    <h1 className='text-2xl font-bold text-white '> THE BASICS </h1>
                    <p className=' text-lg  text-white'>About Tlg B</p>
                    <p className=' text-lg  text-white'>Contact Us</p>
                    <p className=' text-lg  text-white'>Support Forums</p>
                    <p className='text-lg  text-white'>API</p>
                    <p className='text-lg  text-white'>System Status  </p>
                </div>
                <div className='col-span-1 '>
                    <h1 className='text-xl font-bold text-white '>GET INVOLVED</h1>
                    <p className='text-lg  text-white'>Contribution Bible</p>
                    <p className=' text-lg  text-white'>Add New Movie </p>
                    <p className=' text-lg  text-white'>Add New TV Show</p>
                </div>
                <div className='col-span-1 lg:p-0 md:py-5'>
                    <h1 className='text-xl font-bold text-white '>COMMUNITY</h1>
                    <p className=' text-lg  text-white'>Guidelines</p>
                    <p className=' text-lg  text-white'>Discussions  </p>
                    <p className=' text-lg  text-white'>Leaderboard</p>
                </div>
                <div className='col-span-1 lg:p-0 md:py-4'>
                    <h1 className='text-xl font-bold text-white '>LEGAL</h1>
                    <p className=' text-lg  text-white'>Terms of Use</p>
                    <p className=' text-lg  text-white'>API Terms of Use</p>
                    <p className=' text-lg  text-white'>Privacy Policy</p>
                    <p className=' text-lg  text-white'>DMCA Policy</p>
                </div>
            </div>

        </div>
    )
}
