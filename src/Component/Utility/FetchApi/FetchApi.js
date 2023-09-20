import axios from "axios";
import { appId, appKey } from "../HostLink";
const fetchRecipe = async (query) => {
  try {
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}&type=public`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchRecipeDetails = async (query) => {
  try {
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}&type=public`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchRecipe, fetchRecipeDetails };
