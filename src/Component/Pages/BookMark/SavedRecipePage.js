import React, { useState, useEffect } from "react";
import "./bookmark.css";
import { NavLink, useNavigate } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import axios from "axios";
import Searchbar from "../searchbar/Searchbar";

const SavedRecipePage = ({ recipe }) => {
  // const token = localStorage.getItem('token')

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7070/fetch-recipe/:user_id", {})
      .then((response) => setData(response.data))
      .catch((error) => console.log("Error", error));
  }, []);

  useEffect(() => {
    setRecipeData(recipe);
  }, [recipe]);

  return (
    <>
      <div id="saved-page">
        <div id="saved-page-header">
          <h2>SAVES</h2>
        </div>
        <div id="saved-page-recipes-my-boards">
          <NavLink to="/saved/recipes">RECIPES</NavLink>
          <NavLink to="/saved/myboards">MY BOARDS</NavLink>
        </div>
        <div id="saved-page-recipes">
          <div id="discover-recipes-card">
            <BsPlusCircle
              id="saved-page-recipes-plus-icon"
              onClick={() => navigate("/")}
            />
            <h3 onClick={() => navigate("/")}>DISCOVER &nbsp;RECIPES</h3>
            <p>..... or .....</p>
            <NavLink to="/addRecipe">Add Your Own Recipe</NavLink>
          </div>
          {recipeData.map((element, index) => (
            <div id="saved-page-added-from-recipes">
              <NavLink to={`/details/:${element.recipe.label}`}>
                <img src={element.recipe.image} alt=""></img>
              </NavLink>
              <h3>{element.recipe.label}</h3>
            </div>
          ))}
          {data &&
            data.map((element, index) => (
              <div id="added-recipes-card">
                <img src="" alt=""></img>
                <h3>{element.recipeTitle.toUpperCase()}</h3>
              </div>
            ))}
        </div>
      </div>
      <Searchbar />
    </>
  );
};

export default SavedRecipePage;
