import React, { useEffect, useState } from 'react'

import Slider from "react-slick";
import { MovieSliderCard } from './MovieSliderCard';
import { NavLink } from 'react-router-dom';

export const MovieSlider = () => {
  const [data, setdata] = useState(null)
  useEffect(() => {
    if (data === null) {
      fetch("https://api.themoviedb.org/3/trending/all/week?api_key=c173683905eefa10c44380988e8852cf", { method: 'GET' })
        .then(res => res.json())
        .then(result => setdata(result))
        .catch(err => console.log(err))
    }
  })
  console.log('data', data);
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    speed: 1500,
    slidesToShow: 7,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,

        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      },
    ],

  };

  return (
    <div className='lg:pt-12 px-12 md:p-5 sm:p-5 '>
      <h1 className='text-black text-3xl font-bold  py-4'>
        Trending Movies
      </h1>


      {
        data !== null ?
          <Slider {...settings}>
            {
              data.results.map((item, index) => {
                return (
                  <NavLink to={'/movie-detail/' + item.id}>
                    <MovieSliderCard img={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                      moviename={item.original_title ? item.original_title : item.original_name} date={item.release_date ? item.release_date : item.first_air_date} />
                  </NavLink>
                )
              })
            }
          </Slider>
          :
          'Loading....'
      }

    </div>
  )
}
