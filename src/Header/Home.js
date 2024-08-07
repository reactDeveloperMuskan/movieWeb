import React, { useEffect, useState } from 'react'
import { MovieSlider } from './MovieHome/MovieSlider'
import { SignUp } from '../Form/SignUp'
import { LeaderBoard } from '../LeaderBoard/LeaderBoard'
import { SearchCard } from '../SeachCard/SearchCard'
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom'



export const Home = ( ) => {

  const [data, setData] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [localStorageData, setLocalStorageData] = useState(null);

  useEffect(() => {
      const data = localStorage.getItem("logindetail");
      if (data) {
          try {
              setLocalStorageData(JSON.parse(data));
          } catch (error) {
              console.error('Error parsing localStorage data', error);
          }
      }
  }, []);
  
  const onSerchClick = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=c173683905eefa10c44380988e8852cf&language=en-US&page=1&include_adult=false&query=${searchValue}`, { method: ('GET') })
      .then(res => res.json())
      .then(result => {
        setData(result)
        window.location.pathname = '/search/' + searchValue
      })
      .catch(err => console.log(err))
  }
  

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSerchClick();
    }
  };

  return (
    <div>
      
          <div className='lg:mx-20 md:mx-0 sm:mx-0 '>
            <div className='homeimg  '>
              <div className='pb-20' style={{ background: "rgb(0,76,124,0.61)" }}>
                <div className='text-white p-10 pt-14'>
                  <h1 className='text-5xl font-bold'>
                    Welcome.
                  </h1>
                  <h1 className='font-semibold text-3xl'> Millions of movies, TV shows and people to discover. Explore now. </h1>
                </div>
                <div className='mx-10 flex justify-around bg-white rounded-full'>
                  <input onKeyDown={handleKeyDown} onChange={(e) => setSearchValue(e.target.value)}  type='text ' placeholder='Search for a movie .' className='w-full  p-3  rounded-full outline-none' />
                  <NavLink to={'./search'+'/'+searchValue}>
                  <button  className='font-semibold text-white hover:text-black p-4 px-8 bg-blue-500 rounded-full' > Search
                  </button>
                  </NavLink>
                </div>

              </div>
            </div>
            <div className='bg-white'>
              <MovieSlider />
            </div>
            {localStorageData
            ? ""
            :
            <div className='signimg'>
              <SignUp />
            </div>
            
            }
            
            <div>
              <LeaderBoard />
            </div>
          </div>
          
    </div>
  )
}
