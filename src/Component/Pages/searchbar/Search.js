import React, { useState } from "react";
import "./search.css";
import { fetchRecipe } from "../../Utility/FetchApi/FetchApi";
import { NavLink } from "react-router-dom";
import FooterSearchRecipe from "../../Footer/FooterSearchRecipe";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(null);

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchRecipe(searchQuery).then((res) => {
      setData(res.hits);
      console.log(res.hits);
    });
  };

  return (
    <>
      <div className="search-filter-container">
        <div className="search-filter-wrapper">
          <div className="search-bar-wrapper">
            <div className="make-txt">
              <span> I WANT TO MAKE</span>
            </div>

            <div className="search-icon">
              <button className="btn" onClick={handleSearch}>
              <i class="fa-solid fa-magnifying-glass" id="search"></i>
              </button>
            </div>
          </div>

          <input
            type="text"
            name="search"
            className="input-bar"
            onChange={handleOnChange}
          />

          <p className="clear-txt">clear </p>
        </div>
      </div>

      <div className="result-container">
        {data ? (
          <div className="result-number-wrapper">
            <div>20 RESULTS</div>
          </div>
        ) : (
          ""
        )}

        <div className="search-result-container">
          <div className="search-result-wrapper">
            {data
              ? data.map((item, index) => {
                  return (
                    <div key={index} className="searched-recipe-wrapper">
                      <NavLink to={`/details?q=${item.recipe.label}`}>
                        <div className="searched-recipe-img">
                          <img
                            src={item.recipe.image}
                            alt={item.recipe.label}
                          />
                        </div>

                        <div className="searched-recipe-name-rating-wrapper">
                          <div className="recipe-name">
                            <p className="recipe-label">{item.recipe.label}</p>
                            <p className="recipe-source">
                              By <span>{item.recipe.source}</span>
                            </p>
                          </div>

                          <div className="recipe-rating">
                            <div className="recipe-time">
                              {item.recipe.totalTime} min
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
      <FooterSearchRecipe/>
    </>
  );
};

export default Search;
