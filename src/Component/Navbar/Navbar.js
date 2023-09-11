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
                  <NavLink className="drpdwn-link" to="/accessories">
                    Breakfast & Brunch Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/mobiles">
                    Lunch Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/ipad">
                    Appetizers & Snack Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/laptops">
                    Dinner Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Dessert Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Drink & Cocktail Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Side Dish Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Grilling & BBQ Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Microvave Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Quick & Easy Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Slow Cooker Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Air Fryer Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Instant Pot Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Baking Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    See More
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="active">
            <NavLink to="/accessories" className="nav_link">
              Popular
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink className="drpdwn-link" to="/appleaccessories">
                    Trending Now
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/boat">
                    Casserole Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/scandisk">
                    Chilli Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/hp">
                    Soup Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Pasta Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Bread Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Cookie Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Salad Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Tofu Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Copycat Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    See More
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="active">
            <NavLink to="/mobiles" className="nav_link">
              Meat & seafood
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink className="drpdwn-link" to="/oneplus">
                    Chicken Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/samsung">
                    Salmon Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/redmi">
                    Pork Chop Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/asus">
                    Ground Beef Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/pixel">
                    Shrimp Recipes
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/ipad" className="nav_link">
              Healthy & diet
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink className="drpdwn-link" to="/ipadair">
                    Keto Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/ipadpro">
                    Healthy Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Vegetarian Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Vegan Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Mediterranean Diet Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Weight Watchers Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Low-carb Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Gluten-Free Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    See More
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/laptops" className="nav_link">
              Holidays
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink to="/asuslaptop" className="drpdwn-link">
                    Dinner Party Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/delllaptop" className="drpdwn-link">
                    Game Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hplaptop" className="drpdwn-link">
                    Valentine's Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/lenovelaptop" className="drpdwn-link">
                    St.patrick's Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Easter Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Cinco de Mayo Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Mother's Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Memorial Day Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Juneteenth Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    4th of July Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Halloween Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Thanksgiving Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Hanukkah Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Christmass Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    New Year's Recipes
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/macbook" className="nav_link">
              cousine
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink to="/macbookapple" className="drpdwn-link">
                    Mexican Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/macbookair" className="drpdwn-link">
                    Italian Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Indian Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Thali Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Korean Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    French Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Latin American Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Chinese Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Japanese Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="drpdwn-link" to="/macbook">
                    Spanish Recipes
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="active">
            <NavLink to="/laptops" className="nav_link">
              Seasonal
            </NavLink>
            <div classname="dropdown-list">
              <ul className="list">
                <li>
                  <NavLink to="/asuslaptop" className="drpdwn-link">
                    Spring Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/asuslaptop" className="drpdwn-link">
                    Summer Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/asuslaptop" className="drpdwn-link">
                    Fall Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/asuslaptop" className="drpdwn-link">
                    Winter Recipes
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink to="/asuslaptop" className="drpdwn-link">
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
