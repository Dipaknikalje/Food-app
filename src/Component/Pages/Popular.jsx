import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./pages.css"

const Popular = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const API = `https://www.edamam.com/search?q=popular&cocktail&app_id=591bd3cd&app_key=ee49bf3041e13fa627976b22e7cd9ebb`;
    axios
      .get(API)
      .then((res) => setData(res.data.hits))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="FeaturedHomeCntnr">
        <div className="FeaturedSubCntnr">
          {data.map((item, itemIndex) => (
              <div key={itemIndex} className="Featcard">
                <NavLink to={`/article/${item.ids}`} className="Featcard-data">
                  <img src={item.recipe.image} alt="loading" />
                  <div className="product_title">{item.recipe.label}</div>
                  <p>{item.recipe.source}</p>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Popular
