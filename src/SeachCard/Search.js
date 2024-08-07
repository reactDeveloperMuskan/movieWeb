import React, { useEffect, useState } from 'react'
import { SearchCard } from '../SeachCard/SearchCard'
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const Search = () => {

    const [data, setData] = useState(null)

    var url = window.location.pathname
    var cuturl = url.split('/')

    useEffect(() => {

        console.log('cuturl', cuturl);

        if (data === null) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=c173683905eefa10c44380988e8852cf&language=en-US&page=1&include_adult=false&query=${cuturl[2]}`, { method: ('GET') })
                .then(res => res.json())
                .then(result => setData(result))
                .catch(err => console.log(err))
        }
    })
    const dataNull = () =>{
        setData(null)
     
      }

    console.log('data---', data);
    return (
        <div>
            {
                data !== null ?
                    <div>
                        {/* <div className='shadow-sm border  border-gray-200 h-12 px-20 flex gap-4  py-2 items-center '>
                            <div className=''>
                                <FaSearch />

                            </div>
                            <div className='text-gray-400 w-full'>
                                <input defaultValue={cuturl[2]}  type='text' className='shadow-sm  h-12  outline-none ' />
                            </div>
                        </div> */}
                        {
                            data.results.length > 0 ?
                                data.results.map((item, index) => {
                                    return (
        <NavLink to={'/movie-detail/' + item.id} onClick={()=>dataNull()}>
                                        <SearchCard img={"https://image.tmdb.org/t/p/w500" + item.poster_path} moviename={item.original_title} date={item.release_date} MovieDetail={item.overview} />
                                        </NavLink>
                                    )
                                })
                                :
                                'no data  found'
                        }
                    </div>

                    :
                    'Loading'
            }
        </div>
    )
}
