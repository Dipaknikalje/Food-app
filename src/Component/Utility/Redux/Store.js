import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./CartSlice";

const Store = configureStore({
  reducer: {
    value: SliceReducer,
  },
});

export default Store;
