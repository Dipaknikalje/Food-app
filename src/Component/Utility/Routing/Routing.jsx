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
import Breakfast from '../../Pages/RecipeSubpages/Breakfast'
import Searchbar from '../../Pages/searchbar/Searchbar'
import RecipePage from '../../Pages/recipe/RecipePage'
import Search from '../../Pages/searchbar/Search'
import RegisterPage from '../../Auth/RegisterPage'
import Details from '../../Pages/recipe/Details'
import SavedRecipePage from '../../Pages/BookMark/SavedRecipePage'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Rootlayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/breakfast" element={<Breakfast/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/meat' element={<Meat/>}/>
        <Route path='/healthydiet' element={<Healthy/>}/>
        <Route path='/holidays' element={<Holidays/>}/>
        <Route path='/cousine' element={<Cuisine/>}/>
        <Route path='/seasonal' element={<Seasonal/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>

        <Route path='/searchbar' element={<Searchbar/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/recipe' element={<RecipePage/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/saverecipe' element={<SavedRecipePage/>}/>

        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default Routing
