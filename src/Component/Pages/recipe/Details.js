import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchRecipeDetails } from "../../Utility/FetchApi/FetchApi";
import "./details.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BsCamera, BsDownload, BsSave } from "react-icons/bs";
import { BsPrinter } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import FooterSearchRecipe from "../../Footer/FooterSearchRecipe";
// import Comments from "./CommentsFIle/Comments";

const Details = () => {
  const [data, setData] = useState(null);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  //  getting query params from url
  const query = queryParams.get("q");

  console.log(query);

  const handleSaveRecipe = async (recipe) => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.put("http://localhost:7070/saverecipe", recipe).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    fetchRecipeDetails(query).then((res) => {
      console.log(res);
      setData(res.hits);
    });
  }, [query]);
  console.log(data);
  return (
    <>
      <div className="yellow-container">
        <div>
          <NavLink>PREVIOUS RECIPE</NavLink>
          <NavLink>NEXT RECIPE</NavLink>
        </div>
      </div>
      {data ? (
        <div className="detail-main-container">
          <div className="detail-wrapper">
            <div className="title-wrapper">
              <p>
                <NavLink>Recipe</NavLink> \
                <NavLink>{data[0].recipe.dishType}</NavLink>
              </p>
              <h2>{data[0].recipe.label}</h2>
              <p></p>
            </div>

            <div className="submitted-wrapper">
              <div>
                <i class="fa-solid fa-user" id="profile"></i>
                <p>Submitted By {data[0].recipe.source}</p>
              </div>
            </div>

            <div className="save-download-wrapper">
              <div className="saved-print-wrapper">
                <BsSave
                  onClick={() => {
                    handleSaveRecipe(data[0].recipe);
                  }}
                />
                <BsDownload />
                <BsPrinter />
                <BsShare />
              </div>

              <div className="i-made-this-wrapper">
                <BsCamera />
                <p>I made This</p>
              </div>
            </div>

            <div className="imgs-wrapper">
              <div className="big-img-wrapper">
                <img
                  src={data[0].recipe.images.REGULAR.url}
                  alt={data[0].recipe.label}
                />
              </div>

              <div className="small-imgs-wrapper">
                <img
                  src={data[0].recipe.images.SMALL.url}
                  alt={data[0].recipe.label}
                />
                <img
                  src={data[0].recipe.images.SMALL.url}
                  alt={data[0].recipe.label}
                />
                <img
                  src={data[0].recipe.images.SMALL.url}
                  alt={data[0].recipe.label}
                />
              </div>
            </div>

            <div className="ready-in-wrapper">
              <div className="">
                <div>
                  <p>Ready In:{data[0].recipe.totalTime} min</p>
                </div>
              </div>
            </div>

            <div className="direction-ingredient-wrapper">
              <div className="direction-wrapper"></div>
              <div className="ingredient-wrapper">
                {/* <div className="ingredients_cntnr">
                  <h2>INGREDIENTS</h2>

                  <ol className="ingredients_list" type="1">
                    <li>{data[0].recipe.ingredientLines}</li>
                  </ol>
                </div> */}

                <div className="ingredients_cntnr">
                  <h2 className="direction-label">Direction </h2>
                  <ul className="ingredients_list ">
                    {data[0].recipe.ingredientLines?.map((line, index) => (
                      <li key={index} className="flex gap-5">
                        <span className="text-sm font-cabin">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="ad-container">
            <div className="social-icons"></div>
            <div className="ad-wrapper"></div>
          </div>
          {/* <Comments/> */}
        </div>
      ) : (
        "Loading"
      )}
      <FooterSearchRecipe />
    </>
  );
};

export default Details;
