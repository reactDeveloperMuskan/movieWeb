import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [enterPassword, setEnterPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [enterEmail, setEnterEmail] = useState('');

    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [emailError, setEmailError] = useState('');

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        return match ? `${match[1]}-${match[2]}-${match[3]}` : value;
    };

    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    };

    const validatePhoneNumber = (value) => {
        // Simple regex for US phone number validation (e.g., 123-456-7890)
        const regex = /^\d{3}-\d{3}-\d{4}$/;
        return regex.test(value);
    };

    const onClick = () => {
        // Reset errors
        setUserNameError('');
        setPasswordError('');
        setPhoneNumberError('');
        setEmailError('');

        // Validate inputs
        let isValid = true;

        if (userName === '') {
            setUserNameError('Please fill username');
            isValid = false;
        }
        if (enterPassword === '') {
            setPasswordError('Please fill password');
            isValid = false;
        }
        if (phoneNumber === '') {
            setPhoneNumberError('Please fill phone number');
            isValid = false;
        } else if (!validatePhoneNumber(phoneNumber)) {
            setPhoneNumberError('Invalid phone number format');
            isValid = false;
        }
        if (enterEmail === '') {
            setEmailError('Please fill email');
            isValid = false;
        } else if (!validateEmail(enterEmail)) {
            setEmailError('Invalid email address');
            isValid = false;
        }

        if (isValid) {
            const json = {
                username: userName,
                password: enterPassword,
                phoneNumber: phoneNumber,
                email: enterEmail,
            };

            localStorage.setItem("logindetail", JSON.stringify(json));
            window.location.pathname = '/';
        }
    };

    return (
        <div className='p-8 mx-20'>
            <h1 className='font-bold text-2xl'>Login to your account</h1>
            <p className='pt-2'>
                In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations, you will need to login to your account. If you do not have an account, registering is free and simple. <NavLink to={'/signupform'} className='text-blue-500'>Click here</NavLink> to get started.
            </p>
            <p className='pt-4'>
                If you signed up but didn't get your verification email, <NavLink to={'/signupform'} className='text-blue-500'>click here</NavLink> to have it resent.
            </p>

            <div className='pt-7'>
                <h1 className='text-gray-700 pb-1'>Username</h1>
                <input
                    type='text'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className='w-full pl-6 h-10'
                    style={{ background: "rgba(1,180,228,0.12)" }}
                />
                <p className='text-md text-red-600'>{userNameError}</p>
            </div>
            <div className='pt-7'>
                <h1 className='text-gray-700 pb-1'>Password</h1>
                <input
                    type='password'
                    value={enterPassword}
                    onChange={(e) => setEnterPassword(e.target.value)}
                    className='w-full pl-6 h-10'
                    style={{ background: "rgba(1,180,228,0.12)" }}
                />
                <p className='text-sm mt-1 text-red-500'>{passwordError}</p>
            </div>
            <div className='pt-7'>
                <h1 className='text-gray-700 pb-1'>Phone Number</h1>
                <input
                    type='text'
                    value={phoneNumber}
                    placeholder='Enter your phone number'
                    maxLength='12'
                    onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                    className='w-full pl-6 h-10'
                    style={{ background: "rgba(1,180,228,0.12)" }}
                />
                <p className='text-sm mt-1 text-red-500'>{phoneNumberError}</p>
            </div>
            <div className='pt-7'>
                <h1 className='text-gray-700 pb-1'>Email</h1>
                <input
                    type='email'
                    value={enterEmail}
                    onChange={(e) => setEnterEmail(e.target.value)}
                    className='w-full pl-6 h-10'
                    style={{ background: "rgba(1,180,228,0.12)" }}
                />
                <p className='text-sm mt-1 text-red-500'>{emailError}</p>
            </div>
            <div className='pt-7 gap-5'>
                <button
                    className='py-2 px-4 text-white rounded-lg'
                    style={{ background: "rgba(1,180,228,0.77)" }}
                    onClick={onClick}
                >
                    Login
                </button>
                <NavLink to={'/'}>
                    <button
                        className='py-2 px-5'
                        style={{ color: "rgba(1,180,228,0.87)" }}
                    >
                        Reset Password
                    </button>
                </NavLink>
            </div>
        </div>
    );
};
