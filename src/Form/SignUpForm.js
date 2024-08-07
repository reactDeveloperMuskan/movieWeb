import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export const SignUpForm = () => {

    const [userName, setUserName] = useState('')
    const [userNameError, SetUserNameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setpassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [confirmpasswordError, setConfirmPasswordError] = useState('')

    
    const onClick = () => {
        if (userName === '') {
            SetUserNameError('Please enter user name')
        } else {
            SetUserNameError('')
        }
        if (email === '') {
            setEmailError('Please enter email')
        } else {
            setEmailError('')
        }
        if (password === '') {
            setPasswordError('Please enter password')
        } else {
            setPasswordError('')
        }
        if (confirmpassword === '') {
            setConfirmPasswordError('please enter password')
        } else {
            setConfirmPasswordError('')
        }

        if (password !== confirmpassword) {
            setConfirmPasswordError('Password does not match')
        } else {
            setConfirmPasswordError('')
        }

        console.log(email);

        if (email !== '' && userName!=='' && password!=='' && confirmpassword!=='' && password ===confirmpassword )  {
            window.alert('thanks for filling form')
            setUserName('')
            setEmail('')
            setConfirmPassword('')
            setpassword('')
        }


    }


    console.log(email);


    return (
        <div className='bg-white text-black pl-16  grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1'>
            <div className='col-span-1 pt-10  lg:pr-16 '>
                <div className='text-black '>
                    <div className='text-white bg-blue-400  shadow-2xl  w-full h-400 p-6 rounded-tr-lg  rounded-tl-lg'>
                        <h1 className='text-xl pb-7 font-semibold'> Benefits of being a member</h1>
                    </div>
                    <div className='bg-white w-full p-3 shadow-2xl rounded-br-lg rounded-bl-lg  h-100 pb-10'>
                        <div className='flex gap-4'>
                            <div className='pt-2'>  <FaCheck /></div>
                            <h1>Find something to watch on your subscribed streaming services</h1>
                        </div>
                        <div className='flex gap-4'>
                            <div className='pt-2'>  <FaCheck /></div>
                            <h1>Log the movies and TV shows you have watched</h1>
                        </div>
                        <div className='flex gap-4'>
                            <div className='pt-2'>  <FaCheck /></div>
                            <h1>Keep track of your favourite movies and TV shows and get recommendations from them</h1>
                        </div>
                        <div className='flex gap-4'>
                            <div className='pt-2'>  <FaCheck /></div>
                            <h1>Build and maintain a personal watchlist</h1>
                        </div>
                        <div className='flex gap-4'>
                            <div className='pt-2'>  <FaCheck /></div>
                            <h1>Build custom mixed lists (movies and TV)
                            </h1>
                        </div>
                        <div className='flex gap-4'>
                            <div className='pt-2'>  <FaCheck /></div>
                            <h1> Take part in movie and TV discussions </h1>
                        </div>
                        <div className='flex gap-4'>
                            <div className='pt-2'>  <FaCheck /></div>
                            <h1>Contribute to, and improve the information in our database </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-3 pr-20 py-10 '>
                <h1 className='font-bold text-2xl '> Sign up for an account</h1>
                <h1 className='py-2'>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</h1>
                <h1 className='pt-3'> Username</h1>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type='text' name='username' className='border border-gray-300 w-full h-10 rounded-sm' />
                <p className="text-red-500 text-sm mt-1">{userNameError}</p>
                <h1 className='pt-3'> Password (4 characters minimum) </h1>
                <input value={password} onChange={(e) => setpassword(e.target.value)} type='password' name='password' className='border border-gray-300 w-full h-10 rounded-sm' />
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                <h1 className='pt-3'> Password Confirm </h1>
                <input type='text' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} className='border border-gray-300 w-full h-10 rounded-sm' />
                <p className="text-red-500 text-sm mt-1">{confirmpasswordError}</p>
                <h1 className='pt-3' > Email</h1>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' name='email' className='border border-gray-300 w-full h-10 rounded-sm' />
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
                <h1 className='pt-6'>
                    By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.
                </h1>
                <div className='pt-8 flex gap-4'>
                    <button onClick={() => onClick()} className='bg-blue-400  text-white font-semibold py-2 px-4 rounded-md'> Sign Up</button>
                    <NavLink to={'/'}>
                        <button className='text-blue-400 font-semibold py-2 px-4 '> Cancel </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
