import React, { useEffect, useState } from "react";
import "./favourite.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Favourite = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const API = `https://www.edamam.com/search?q=favourite&cocktail&app_id=591bd3cd&app_key=ee49bf3041e13fa627976b22e7cd9ebb`;
    axios
      .get(API)
      .then((res) => setData(res.data.hits))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="fav-cards-wrapper">
        {data
          ? data.map((item, index) => {
              return (
                <div className="fav-card">
                  <NavLink to={`/details?q=${item.recipe.label}`}>
                    <div className="fav-img">
                      <img src={item.recipe.image} alt={item.label} />
                    </div>
                    <div className="fav-dish">
                      <p>{item.recipe.label}</p>
                    </div>
                  </NavLink>
                </div>
              );
            })
          : "Loading"}
      </div>
    </div>
  );
};

export default Favourite;
