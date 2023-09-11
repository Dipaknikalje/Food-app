import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Rootlayout from '../../Pages/Rootlayout'
import Home from '../../Pages/Home/Home'
import Popular from '../../Pages/Popular'
import Meat from '../../Pages/Meat'
import Healthy from '../../Pages/Healthy'
import Holidays from '../../Pages/Holidays'
import Cuisine from '../../Pages/Cuisine'
import Seasonal from '../../Pages/Seasonal'
import LoginPage from '../../Auth/LoginPage'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Rootlayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/meat&seafood' element={<Meat/>}/>
        <Route path='/healthydiet' element={<Healthy/>}/>
        <Route path='/holidays' element={<Holidays/>}/>
        <Route path='/cuisine' element={<Cuisine/>}/>
        <Route path='/seasonal' element={<Seasonal/>}/>
        <Route path='/seasonal' element={<Seasonal/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default Routing