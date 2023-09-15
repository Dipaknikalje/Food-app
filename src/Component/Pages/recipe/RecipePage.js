import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { fetchRecipe } from "../../Utility/FetchApi/FetchApi";
import "./recipe.css";
import FooterSearchRecipe from "../../Footer/FooterSearchRecipe";

const RecipePage = () => {
  const [data, setData] = useState(null);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const query = queryParams.get("q");
  console.log(query, "querry wiill be");
//   console.log(fetchRecipe(query), "data is");
  useEffect(() => {
    console.log("useEffect is working");
    fetchRecipe(query).then((res) => {
      setData(res.hits);
          console.log("data is rendering");

    },[query]);
  });

  console.log(data);

  return (
    <>
      {data ? (
        <>
          {" "}
          <div className="recipe-list-title-container">
            <div className="part-of-txt">
              <span>
                PART OF<NavLink> {data[0].recipe.dishType}</NavLink>
              </span>
            </div>

            <div className="list-title">
              <h2>{`10 ${query} Ideas`}</h2>
            </div>

            <div className="list-description"></div>

            <div className="icons-container">
              <NavLink className="insta-link">
                <i class="fa-brands fa-instagram"></i>
              </NavLink>

              <NavLink className="fb-link">
                <i class="fab fa-facebook"></i>
              </NavLink>

              <NavLink className="twitter-link">
                <i class="fa-brands fa-twitter"></i>
              </NavLink>
            </div>
          </div>
          <div className="list-main-container">
            <div className="list-ad-wrapper">
              <div className="list-container">
                {data ? (
                  <>
                    {data.map((item, index) => {
                      return (
                        <div key={index}>
                          <div key={index} className="recipe-wrapper">
                            <NavLink to={`/details?q=${item.recipe.label}`}>
                              <div className="recipe-img">
                                {" "}
                                <img
                                  src={item.recipe.image}
                                  alt={item.recipe.label}
                                />
                              </div>

                              <div className="recipe-desc">
                                <p>RECIPE</p>
                                <h3>{item.recipe.label}</h3>
                                <div className="">
                                  {item.recipe.healthLabels}
                                </div>
                                <p>-{item.recipe.source}</p>
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  "Loading"
                )}
              </div>
              <div className="ad-container"></div>
            </div>
            <FooterSearchRecipe/>
          </div>
        </>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default RecipePage;
