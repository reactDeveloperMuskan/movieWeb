import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBookmark } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import CircularProgressBar from './ProgressBar';

export const MovieDetailCard = ({ img, moviename, date, Overview, data }) => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 text-white' style={{background:"rgba(0,0,0,0.7)"}} >
      <div className=' col-span-1 lg:pl-10 pt-7 '>
        <img className='lg:w-4/5 mb-10 md:w-1/3 sm:w-1/3 lg:pl-0 md:pl-10 sm:pl-10 pl-10' src={img} />
      </div>

      <div className='col-span-3 py-7  lg:pl-0 md:pl-10 sm:pl-10 pl-10' >

          <div >
            <h1 className='text-4xl font-bold capitalize'> {moviename} </h1>
            <div className='flex gap-3 py-2'>
              <p> {date} </p>
              <p>Action , drama , and comedy</p>
            </div>
            <div className='flex gap-3 '>
            <div className='flex justify-start '>
            <CircularProgressBar progress={(data.vote_average*10).toFixed(2)}/>
            </div>
            <div className='pt-3 font-bold text-lg'>
              <h1> User</h1>
              <h1>Score</h1>
            </div>
            </div>
            <div className='flex gap-4 text-white items-center  py-5 '>
              <div className='bg-blue-950 p-4 rounded-full text-sm' >
                <TfiMenuAlt />
              </div>
              <div className='bg-blue-950 p-4 rounded-full text-sm' >
                <FaHeart />
              </div>
              <div className='bg-blue-950 p-4 rounded-full text-sm' >
                <FaBookmark />
              </div>
              <div className='flex justify-around '>
                <div className='pt-1 text-xl pr-1'>
                  <IoIosPlay />
                </div>
                <h1 className='font-semibold'> Play Trailer</h1>
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-semibold'> Overview </h1>
              <p>{Overview}</p>
          </div>

        </div>

      </div>
      <div></div>
    </div>
  )
}
