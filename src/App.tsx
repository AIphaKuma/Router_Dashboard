import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import About from './Component/About'
import Home from './Component/Home'
import SearchForm from './Component/SearchForm'
import NotFound from './Component/NotFound'
import Wildcard from './Component/Wildcard'
import FAQ from './Component/FAQ'
import Login from './Component/Login'

function App() {

  return (
    <BrowserRouter>
    <div>
      <h1 className= "text-center"> Dashboard </h1>
      <ul className ="d-flex justify-content-evenly m-5">
        <li className='btn btn-primary'> <Link to="/">Home</Link> </li>
        <li className='btn btn-primary'> <Link to="/SearchForm">Search</Link> </li>
        <li className='btn btn-primary'> <Link to="/About">About</Link> </li>
        <li className='btn btn-primary'> <Link to="/FAQ">FAQ</Link> </li>
        <li className='btn btn-primary'> <Link to="/Login">Log In</Link> </li>
      </ul>
    </div>

    <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/SearchForm' element={<SearchForm/>}/>

      <Route path="*"  element={<NotFound/>}/>
      <Route path=":wildcard" element={<Wildcard/>}/>

   
      <Route path='/About' element={<About/>}/>
      <Route path='/FAQ' element={<FAQ/>}/>
      <Route path='/Login' element={<Login/>}/>


    </Routes>
      </BrowserRouter>
      
  )
}

export default App
