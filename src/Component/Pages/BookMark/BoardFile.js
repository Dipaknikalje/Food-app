import React from "react";
import "./bookmark.css";
import { NavLink } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import { BsFillPlusCircleFill } from "react-icons/bs";

const BoardFile = () => {
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
        <div id="saved-page-my-boards">
          <div id="new-board-card">
            <BsFillPlusCircleFill id="saved-page-my-boards-plus-icon" />
            <h3>NEW BOARD</h3>
          </div>
        </div>
      </div>
      <Searchbar />
    </>
  );
};

export default BoardFile;
