import React from 'react'

export const SearchCard = ( { img , moviename , date , MovieDetail}) => {
  return (
    <div>
        
        <div className='flex mx-20 my-10 shadow-md rounded-xl border border-gray-200'>
            <div className='w-[10%]'>  
                <img className='w-[100px] h-full rounded-tl-lg rounb' src={img}/>
            </div>
            <div className='w-[90%] self-center'>
                <h1 className='text-xl font-bold'> {moviename}</h1>
                <h1> {date} </h1>
                <p className='pt-4 text-sm'> {MovieDetail}</p>
            </div>
        </div>
    </div>
  )
}
