import React from 'react'

export const MovieSliderCard = ( {img , moviename , date }) => {

  return (
    <div>
        <div className=' bg-white px-3  '>
            <img src={img} className=' rounded-lg  '/>
            <h1 className='font-semibold text-black pt-2 px-2'>{moviename}</h1>
            <p className='pt-1 px-2 text-gray-600'>{date}</p>
        </div>
    </div>
  )
}
