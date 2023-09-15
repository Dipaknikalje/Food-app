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
                  <NavLink to="/recipe?q=breakfast" className="dropdown-list">
                    Breakfast & Brunch Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=lunch">
                    Lunch Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=snack">
                    Appetizers & Snack Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=dinner">
                    Dinner Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=dessert">
                    Dessert Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=drink">
                    Drink & Cocktail Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=sidedish">
                    Side Dish Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=grilling">
                    Grilling & BBQ Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=microvave">
                    Microvave Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=quick">
                    Quick & Easy Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=slowcooker">
                    Slow Cooker Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=airfryer">
                    Air Fryer Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=instant">
                    Instant Pot Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=baking">
                    Baking Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=recipes">
                    See More
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="active">
            <NavLink to="/recipe?q=popular" className="nav_link">
              Popular
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=trending">
                    Trending Now
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=casserole">
                    Casserole Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=chilli">
                    Chilli Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=soup">
                    Soup Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=pasta">
                    Pasta Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=bread">
                    Bread Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=cookie">
                    Cookie Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=salad">
                    Salad Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=tofu">
                    Tofu Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=copycat">
                    Copycat Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=popular">
                    See More
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="active">
            <NavLink to="/recipe?q=meat" className="nav_link">
              Meat & seafood
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=chicken">
                    Chicken Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=salmon">
                    Salmon Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=pork">
                    Pork Chop Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=beef">
                    Ground Beef Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=shrimp">
                    Shrimp Recipes
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/recipe?q=healthydiet" className="nav_link">
              Healthy & diet
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=keto">
                    Keto Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=healthy">
                    Healthy Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=veg">
                    Vegetarian Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=vegan">
                    Vegan Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=mediterranean">
                    Mediterranean Diet Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=watchers">
                    Weight Watchers Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=crab">
                    Low-carb Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=gluten">
                    Gluten-Free Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=healthydiet">
                    See More
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/recipe?q=holidays" className="nav_link">
              Holidays
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink to="/recipe?q=dinnerparty" className="drpdwn-link">
                    Dinner Party Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recipe?q=gameday" className="drpdwn-link">
                    Game Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recipe?q=valentines" className="drpdwn-link">
                    Valentine's Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recipe?q=patricks" className="drpdwn-link">
                    St.patrick's Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=easter">
                    Easter Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=cinco">
                    Cinco de Mayo Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=mothersday">
                    Mother's Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=memorial">
                    Memorial Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=juneteenth">
                    Juneteenth Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=july">
                    4th of July Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=halloween">
                    Halloween Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=thanksgiving">
                    Thanksgiving Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=hanukkah">
                    Hanukkah Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=christmass">
                    Christmass Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=newyear">
                    New Year's Recipes
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/recipe?q=cousine" className="nav_link">
              cousine
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink to="/recipe?q=mexican" className="drpdwn-link">
                    Mexican Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recipe?q=italian" className="drpdwn-link">
                    Italian Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=indian">
                    Indian Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=thali">
                    Thali Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=korean">
                    Korean Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=french">
                    French Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=latin">
                    Latin American Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=chinese">
                    Chinese Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=japanese">
                    Japanese Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/recipe?q=spanish">
                    Spanish Recipes
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/recipe?q=seasonal" className="nav_link">
              Seasonal
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink to="/recipe?q=spring" className="drpdwn-link">
                    Spring Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recipe?q=summer" className="drpdwn-link">
                    Summer Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recipe?q=fall" className="drpdwn-link">
                    Fall Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recipe?q=winter" className="drpdwn-link">
                    Winter Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink to="/recipe?q=seasonal" className="drpdwn-link">
                    See More
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <LogoFile />
      </nav>
    </>
  );
};

export default NavBar;
