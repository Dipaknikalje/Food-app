import React, { useEffect,useState } from 'react'
import FooterSearchRecipe from '../../Footer/FooterSearchRecipe';

const Searchbar = () => {
    const [data,setData]=useState([]);
    const [content,setContent]=useState("")

    const fetchData= async ()=>{
        try {
            const data=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=recipe&app_id=591bd3cd&app_key=ee49bf3041e13fa627976b22e7cd9ebb`)
            const res=data.json();
            return res;
        } catch (error) {
            console.log("something went wrong",error.message)
        }
    }
    fetchData();

    const recipeSearch=(queryString)=>{
        fetchData(queryString).then((res)=>{
            setData(res)
            console.log(res)
        })
    }
    useEffect(()=>{
        if (content){
            recipeSearch(content)
        }
    })

    const recipeData=()=>{
        if(!data){
            return null;
        }
        else{
            return data.hits.map((item,index)=>(
                <div key={index} className='recipe-data'>
                <div className="recipe-data-card">
          <img
            src={item.recipe.image}
            alt={item.recipe.label}
            className="card-image"
          />
          <div className="card-text">
            <h2 className="card-label">
              {item.recipe.label}
            </h2>
            <h3 className="card-recipe-source">by {item.recipe.source}</h3>
          </div>
          <div className="card-link-recipe">
            <a
              href={item.recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="recipe-url"
            >
              View Recipe
            </a>
          </div>
          <div className="card-feedback">
            <div className="card-rating">
              Rating: {item.recipe.rating || "N/A"}
            </div>
            <div className="card-review">
              Reviews: {item.recipe.reviews || 0}
            </div>
          </div>
        </div>
      </div>
  ))
             
}
}
const handleClear=()=>{
  setContent(null)
}

  return (
    <div className="searchbar-page">
        <div className="searchbar-content">
        <div className="searchbar-box">
          <div className="searchbar-box-content">
            {/* search section */}
            <div className="box-data">
              <label htmlFor="" className="box-tittle">
                I WANT TO MAKE
              </label>
              <ul className="listed-content">
              <i class="fa-solid fa-magnifying-glass" id="serachbar"></i>
                <li
                  className="content-text"
                  onClick={() => {
                    recipeSearch(content);
                  }}
                >
                </li>
                <li>
                  <input
                    type="text"
                    placeholder=""
                    className="placeholder-content"
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    value={content}
                  />
                </li>
                <div className="close-content">
                  <li className="clr" onClick={handleClear}>clear</li>
                  <li className="emp">
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <p className="recent-seraches">Your recent searches</p>
          <p className="recent-items">Burger | Pizza</p>
        </div>
      </div>




      
      <div className="result-data">
        <div className="result-data-recepi">
          {data ? `${data.hits.length} Results` : ""}
        </div>

        <div className="main-card">
          {recipeData()}
        </div>
      </div>
      <FooterSearchRecipe/>
    </div>
  )
}

export default Searchbar
