import React, { useEffect, useState } from 'react'
import { MovieDetailCard } from './MovieDetailCard'
import CircularProgressBar from './ProgressBar'
import { Recommendations } from './Recommendations'
import { allApiHit } from './api'
import { NavLink } from 'react-router-dom'

export const MovieDetail = () => {
  const [data, setData] = useState(null)
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    var url = window.location.pathname
    var cuturl = url.split('/')
    if (data === null) {
      allApiHit(`https://api.themoviedb.org/3/movie/${cuturl[2]}?api_key=c173683905eefa10c44380988e8852cf&language=en-US`, setData)
    }

    if (detail === null) {
      allApiHit(`https://api.themoviedb.org/3/movie/${cuturl[2]}/recommendations?api_key=c173683905eefa10c44380988e8852cf&language=en-US&page=1`, setDetail)
    }
  })

  const dataNull = () =>{
    setData(null)
    setDetail(null)
  }

  return (
    data !== null ?
      detail !== null ?

        <div>
          <div style={{ backgroundImage: `url('${"https://image.tmdb.org/t/p/w500" + data.backdrop_path}')`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%" }}>
            <MovieDetailCard data={data} img={"https://image.tmdb.org/t/p/w500" + data.poster_path} moviename={data.original_title} date={data.release_date} Overview={data.overview} />
          </div>
          <div className='m-10'>
  <p className='text-2xl text-black font-bold'>Recommendations</p>
  <div className='overflow-x-auto'>
    <div className='w-[400%]  flex gap-6 pt-10 pb-4'>
      {
        detail.results.map((item, index) => {
          const imageUrl = item.backdrop_path
            ? "https://image.tmdb.org/t/p/w500" + item.backdrop_path
            : 'https://i.pinimg.com/736x/7d/6f/6a/7d6f6a1856e57babdf5b03bfc7e3ecd1.jpg';
          
          return (
            <NavLink key={index} to={'/movie-detail/' + item.id} onClick={() => dataNull()}>
              <Recommendations 
                img={imageUrl} 
                moviename={item.original_title} 
                percentage={(item.vote_average * 10).toFixed(2)} 
              />
            </NavLink>
          );
        })
      }
    </div>
  </div>
</div>

        </div>

        :
        'Loading'
      :
      'Loading'
  )
}
