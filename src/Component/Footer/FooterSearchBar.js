import React from 'react'
import './footerSearchbar.css'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FooterSearchBar = () => {
    const [search, setSearch] = useState('') 
    const [data, setData] = useState([])

    const getSearchRecipes = (search) => {
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=591bd3cd&app_key=ee49bf3041e13fa627976b22e7cd9ebb
        &from=0&to=60`)
            .then((response) => setData(response.data.hits))
            .catch((error) => console.log("Error", error))
        console.log(data)
        setSearch("");
    }

    return (
        <>
            <div id='find-more-recipes'>
                <div id='find-more-recipes-container'>
                    <h2>FIND MORE RECIPES</h2>
                    <div id='find-more-recipes-search-bar'>
                        <BsSearch id='find-more-recipes-search-bar-search-icon' />
                        <input type='search' placeholder="I'm Craving..." value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    </div>
                    <button onClick={() => getSearchRecipes(search)}>SEARCH</button>
                </div>
            </div>
            <div id='find-more-recipes-search-data'>
                <p>SEARCH RESULTS . . .</p>
                <div id='find-more-recipes-search-data-container'>
                    <div id='find-more-recipes-search-data-cards-container'>
                        {
                            data.map((element, index) => (
                                <div id='find-more-recipes-search-data-cards' key={index}>
                                    <Link to={`/recipedescription/${element.recipe.label}`} ><img src={element.recipe.image} alt=''></img></Link>
                                    <h3 id="find-more-recipes-search-data-cards-heading">{element.recipe.label}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterSearchBar