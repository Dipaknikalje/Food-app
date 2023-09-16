import { configureStore } from "@reduxjs/toolkit";
import UserLoggedReducer from "./UserLoggedSlice";
const Store = configureStore({
  reducer: {
    userControl: UserLoggedReducer,

  },
});

export default Store;
