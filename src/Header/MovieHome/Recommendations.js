import React from 'react'

export const Recommendations = ( {img , moviename , percentage}) => {
  return (
    <div className=''>
        <img className='recommendation-image ' style={{objectFit: 'cover'}} src={img}/>
        <div className='flex justify-between  text-md  pt-1'>
            <h1 className=''> {moviename} </h1>
            <h1>{percentage}</h1>
        </div>
    </div>
  )
}
