import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import LogoFile from "./LogoFile";
import MainLogo from "./MainLogo";
const NavBar = () => {
  return (
    <>
      <nav>
        <MainLogo />
        <input type="checkbox" id="check" />
        <div className="label">
          <label for="check">
            <i class="fas fa-bars" id="btn"></i>
            <i class="fas fa-x" id="cancel"></i>
          </label>
        </div>
        <ul className="main-nav-list">
          <li className="active">
            <NavLink to="/" className="nav_link">
              Recipe
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink className="drpdwn-link" to="/breakfast">
                    Breakfast & Brunch Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/lunch">
                    Lunch Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/appetizers">
                    Appetizers & Snack Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/dinner">
                    Dinner Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/dessert">
                    Dessert Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/drink">
                    Drink & Cocktail Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/sidedish">
                    Side Dish Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/grilling">
                    Grilling & BBQ Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/microvave">
                    Microvave Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/quick">
                    Quick & Easy Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/slowcooker">
                    Slow Cooker Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/airfryer">
                    Air Fryer Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/instant">
                    Instant Pot Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/baking">
                    Baking Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink className="drpdwn-link" to="/recipes">
                    See More
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="active">
            <NavLink to="/popular" className="nav_link">
              Popular
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink className="drpdwn-link" to="/trending">
                    Trending Now
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/casserole">
                    Casserole Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/chilli">
                    Chilli Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/soup">
                    Soup Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/pasta">
                    Pasta Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/bread">
                    Bread Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/cookie">
                    Cookie Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/salad">
                    Salad Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/tofu">
                    Tofu Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/copycat">
                    Copycat Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink className="drpdwn-link" to="/popular">
                    See More
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="active">
            <NavLink to="/meat" className="nav_link">
              Meat & seafood
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink className="drpdwn-link" to="/chicken">
                    Chicken Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/salmon">
                    Salmon Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/pork">
                    Pork Chop Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/beef">
                    Ground Beef Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/shrimp">
                    Shrimp Recipes
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/healthydiet" className="nav_link">
              Healthy & diet
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink className="drpdwn-link" to="/keto">
                    Keto Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/healthy">
                    Healthy Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/veg">
                    Vegetarian Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/vegan">
                    Vegan Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/mediterranean">
                    Mediterranean Diet Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/watchers">
                    Weight Watchers Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/crab">
                    Low-carb Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/gluten">
                    Gluten-Free Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink className="drpdwn-link" to="/healthydiet">
                    See More
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/holidays" className="nav_link">
              Holidays
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink to="/dinnerparty" className="drpdwn-link">
                    Dinner Party Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gameday" className="drpdwn-link">
                    Game Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/valentines" className="drpdwn-link">
                    Valentine's Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/patricks" className="drpdwn-link">
                    St.patrick's Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/easter">
                    Easter Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/cinco">
                    Cinco de Mayo Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/mothersday">
                    Mother's Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/memorial">
                    Memorial Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/juneteenth">
                    Juneteenth Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/july">
                    4th of July Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/halloween">
                    Halloween Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/thanksgiving">
                    Thanksgiving Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/hanukkah">
                    Hanukkah Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/christmass">
                    Christmass Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/newyear">
                    New Year's Recipes
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/cousine" className="nav_link">
              cousine
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink to="/mexican" className="drpdwn-link">
                    Mexican Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/italian" className="drpdwn-link">
                    Italian Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/indian">
                    Indian Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/thali">
                    Thali Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/korean">
                    Korean Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/french">
                    French Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/latin">
                    Latin American Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/chinese">
                    Chinese Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/japanese">
                    Japanese Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/spanish">
                    Spanish Recipes
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/seasonal" className="nav_link">
              Seasonal
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink to="/spring" className="drpdwn-link">
                    Spring Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/summer" className="drpdwn-link">
                    Summer Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fall" className="drpdwn-link">
                    Fall Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/winter" className="drpdwn-link">
                    Winter Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink to="/seasonal" className="drpdwn-link">
                    See More
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <LogoFile />
    </>
  );
};

export default NavBar;
