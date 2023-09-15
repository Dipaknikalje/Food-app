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
      <div className="trending-recipe-page">
        {data.map((item, itemIndex) => (
          <div className="trendingimgs-card">
            <div key={itemIndex} className="trendingimgs">
              <NavLink>
                <img src={item.recipe.image} alt="PINEAPPLE ZUCCHINI BREAD" />
                <p>{item.recipe.label}</p>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
