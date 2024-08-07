import React from 'react'

export const MovieCard = ( {img , moviename , date }) => {

  return (
    <div className=' py-6 rounded-md shadow-lg'>
        <div className=' bg-white   '>
            <img src={img} className=' rounded-lg  '/>
            <h1 className='font-semibold text-black pt-2 px-2'>{moviename}</h1>
            <p className='pt-1 px-2 text-gray-600'>{date}</p>
        </div>
    </div>
  )
}