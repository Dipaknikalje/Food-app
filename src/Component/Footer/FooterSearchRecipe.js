import React from "react";
import "./searchRecipe.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const FooterSearchRecipe = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const APP_ID = "591bd3cd";
  const APP_KEY = "ee49bf3041e13fa627976b22e7cd9ebb";

  const getSearchRecipes = (searchQuery) => {
    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=60`
      )
      .then((response) => setData(response.data.hits))
      .catch((error) => console.log("Error", error));
    console.log(data);
  };
  return (
    <>
      <div id="i-want-to-make">
        <div>
          <div id="i-want-to-make-container">
            <div id="i-want-to-make-search-bar-and-text-container">
              <div id="i-want-to-make-search-bar-and-text">
                <h3>I WANT TO MAKE</h3>
                <div id="i-want-to-make-search-bar">
                  <AiOutlineSearch fontSize="1.5rem" />
                  <input
                    type="search"
                    placeholder="Search here or try our suggestions below"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  ></input>
                  <button onClick={() => getSearchRecipes(search)}>
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="i-want-to-make-suggested">
            <div id="i-want-to-make-suggested-container">
              <div>
                <Link to="">healthy lunches</Link>
              </div>
              <div>
                <Link to="">top copycat recipes</Link>
              </div>
              <div>
                <Link to="">slow-cooker faves</Link>
              </div>
              <div>
                <Link to="">air fryer recipes</Link>
              </div>
              <div>
                <Link to="">weeknight eats</Link>
              </div>
              <div>
                <Link to="">japanese foods</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="i-want-to-make-search-search-data">
        {/* <h2>SEARCH RESULTS . . .</h2> */}
        <div id="i-want-to-make-search-search-data-container">
          <div id="i-want-to-make-search-search-data-cards-container">
            {data.map((element, index) => (
              <div id="i-want-to-make-search-search-data-cards">
                <Link to={`/recipedescription/${element.recipe.label}`}>
                  <img src={element.recipe.image} alt=""></img>
                </Link>
                <h3>{element.recipe.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSearchRecipe;