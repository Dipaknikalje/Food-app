
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  userId: localStorage.getItem("userId")
    ? localStorage.getItem("userId")
    : null,
  recipeItems: localStorage.getItem("recipeItems")
    ? JSON.parse(localStorage.getItem("recipeItems"))
    : [],
  recipeTotalQuantity: 0,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId", action.payload);
    },
    add(state, action) {
      const itemIndex = state.recipeItems.findIndex((item) => {
        console.log(item._id);

        return item._id === action.payload._id;
      });
      if (itemIndex >= 0) {
        state.recipeItems[itemIndex].recipeQuantity += 1;
        toast.info(
          `Increased ${state.recipeItems[itemIndex].name} recipe quantity!`,
          { position: toast.POSITION.TOP_RIGHT }
        );
      } else {
        const tempProduct = { ...action.payload, recipeQuantity: 1 };
        state.recipeItems.push(tempProduct);
        toast.success(`${action.payload.name} added to recipe`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      localStorage.setItem("recipeItems", JSON.stringify(state.recipeItems));
      // state.push(action.payload)
    },
   
    clearrecipe: (state, action) => {
      state.recipeItems = [];
      localStorage.setItem("recipeItems", JSON.stringify(state.recipeItems));
      toast.error("recipe cleared", { position: toast.POSITION.TOP_RIGHT });
    },
    

    removeFromrecipe: (state, action) => {
      // console.log(state.recipeItems);
      state.recipeItems.map((recipeItem) => {
        if (recipeItem._id === action.payload._id) {
          const filteredItems = state.recipeItems.filter(
            (item) => item._id !== recipeItem._id
          );
          state.recipeItems = filteredItems;

          toast.error("Product removed from recipe", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        localStorage.setItem("recipeItems", JSON.stringify(state.recipeItems));
        return state;
      });
    },
    userLoggedOut: (state, action) => {
      state.recipeItems = [];
      localStorage.setItem("recipeItems", JSON.stringify(state.recipeItems));
      toast.error("Logged out Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  },
});
export const {
  setUserId,
  add,
  decreaserecipe,
  clearrecipe,
  getTotal,
  removeFromrecipe,
  userLoggedOut,
  orderPlaced,
} = recipeSlice.actions;
export default recipeSlice.reducer;

