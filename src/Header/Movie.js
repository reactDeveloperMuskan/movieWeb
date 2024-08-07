import React, { useEffect, useState } from 'react'
import { MovieSliderCard } from './MovieHome/MovieSliderCard'
import { NavLink } from 'react-router-dom'
import { MovieCard } from './MovieCard'



export const Movie = () => {
  const [data, setdata] = useState(null)
  useEffect(() => {
    if (data === null) {
      fetch("https://api.themoviedb.org/3/trending/all/week?api_key=c173683905eefa10c44380988e8852cf", { method: 'GET' })
        .then(res => res.json())
        .then(result => setdata(result))
        .catch(err => console.log(err))
    }
  })
  console.log("data", data);
  return (
   <div className='px-20 bg-white'>
    <h1 className='text-black text-3xl font-bold  sm:py-4'>
        Trending Movies
      </h1>
     <div className=' grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-6 '>
      

      {
                      data !== null ?
                           data.results.map((item , index )=>{
                           return(
                            
                            <NavLink to={'/movie-detail/' + item.id}>
                            <MovieCard img={"https://image.tmdb.org/t/p/w500"+item.poster_path}
                             moviename={item.original_title?item.original_title:item.original_name} date={item.release_date?item.release_date:item.first_air_date} />
                        </NavLink>
      
                                        )
                           })
                    
                          :
                          'Loading....'
                  }
      
         
          
          </div>
   </div>
  )
}
