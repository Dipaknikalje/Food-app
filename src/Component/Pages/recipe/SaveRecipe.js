import React, { useEffect } from "react";
import { useState } from "react";
import { fetchRecipe } from "../../Utility/FetchApi/FetchApi";
import "./saverecipe.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
const SaveRecipe = () => {
  const [showSearchBar, setShowSearchbar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(null);

  const [showSavedRecipe, setShowSavedRecipe] = useState(true);
  const [showBoards, setShowBoards] = useState(false);

  const handleShowSavedRecipe = () => {
    setShowSavedRecipe(true);
    setShowBoards(false);
  };

  const handleShowBoards = () => {
    setShowSavedRecipe(false);
    setShowBoards(true);
  };

  const handleSearchBar = () => {
    setShowSearchbar(!showSearchBar);
  };

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

  const fetchSavedRecipes = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Beare ${token}`;

      const res = await axios.get(
        "http://localhost:7070/fetch-recipe/:user_id"
      );
      console.log(res.data.saved);
      setData(res.data.saved);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSavedRecipes();
  }, []);

  return (
    <>
      <header className="save-header">
        {!showSearchBar && (
          <div className="save-title-wrapper">
            <div className="save-txt">
              <p>SAVES</p>
            </div>
            <div className="edit-wrapper">
            <i class="fa-solid fa-magnifying-glass" onClick={handleSearchBar}></i> |{" "}
              <p>EDIT</p>
            </div>
          </div>
        )}

        {showSearchBar && (
          <div className="save-search-filter-wrapper">
            <div className="save-search-bar-wrapper">
              <div className="search-icon">
                <button className="btn" onClick={handleSearch}>
                  <i class="fa-solid fa-magnifying-glass" id="search"></i>
                </button>
              </div>

              <input
                type="text"
                name="search"
                className="input-bar"
                onChange={handleOnChange}
                placeholder="Search for Recipes in Saves"
              />

              <p className="save-cancel-txt" onClick={handleSearchBar}>
                cancel{" "}
              </p>
            </div>
          </div>
        )}
      </header>

      <div className="recipes-board-wrapper">
        <div className="saved-recipes-wrapper" onClick={handleShowSavedRecipe}>
          RECIPES
        </div>
        <div className="board-wrapper" onClick={handleShowBoards}>
          {" "}
          MY BOARDS
        </div>
      </div>
      {showSavedRecipe && (
        <div className="saved-recipe-container">
          <div className="saved-recipe">
            <div className="sorting">
              <div>SORT BY :</div>
              <div className="sort-by">
                <p className="newest-txt">Newest</p> |<p className="a-z">A-Z</p>
              </div>
            </div>

            <div className="discover-btn-container">
              <div className="discover-btn-wrapper">
                <div>
                  <BsPlusCircle />
                  <p>DISOCVER RECIPES</p>
                </div>

                <div>
                  <p>....or....</p>
                  <p>Add Your Own Recipe</p>
                </div>
              </div>
            </div>

            {data
              ? data.map((item, index) => {
                  return (
                    <div key={index} className="saved-recipe-card">
                      <NavLink to={`/details?q=${item.label}`}>
                        <div className="img">
                          <img src={item.image} alt={item.label} />
                        </div>

                        <div className="recipe-label">
                          <div className="title">
                            <p className="label">{item.label}</p>
                            <p className="rating">By {item.source}</p>
                          </div>

                          <div className="rating">
                            <p>rating</p>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })
              : "Loading"}
          </div>
        </div>
      )}

      {showBoards}
    </>
  );
};

export default SaveRecipe;
