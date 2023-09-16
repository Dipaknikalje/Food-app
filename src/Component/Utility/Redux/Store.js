import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./CartSlice";
import UserLoggedReducer from "./UserLoggedSlice";
const Store = configureStore({
  reducer: {
    recipe: SliceReducer,
    userControl: UserLoggedReducer,

  },
});

export default Store;
