import React from 'react'
import Header from './Header/Header'
import { Route, Routes } from 'react-router-dom';
import { Movie } from './Header/Movie';
import { Home } from './Header/Home';
import { Tvshows } from './Header/Tvshows';
import { Footer } from './Footer/Footer';
import { MovieDetail } from './Header/MovieHome/MovieDetail';
import { SignUpForm } from './Form/SignUpForm';
import { LoginForm } from './Form/LoginForm';
import { Search } from './SeachCard/Search';
import { People } from './Header/MovieHome/People';

 const App = () => {
  return (
    <div>
      <Header/>
     
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/movie' exact element={<Movie/>}/>
        <Route path='/tvshows' exact element={<Tvshows/>}/>
        <Route path='/movie-detail/:number' exact element={<MovieDetail/>}/>
        <Route path='/signupform' exact element={<SignUpForm/>}/>
        <Route path='/loginform' exact element={<LoginForm/>}/>
        <Route path='/search/:abc' exact element={<Search/>}/>
        <Route path='/people' exact element={<People/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export default App;



