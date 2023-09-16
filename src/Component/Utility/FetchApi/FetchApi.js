import axios from "axios";
const fetchRecipe = async (query) => {
  try {
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=591bd3cd&app_key=ee49bf3041e13fa627976b22e7cd9ebb&type=public`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchRecipeDetails = async (query) => {
  try {
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=591bd3cd&app_key=ee49bf3041e13fa627976b22e7cd9ebb&type=public`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchRecipe, fetchRecipeDetails };
