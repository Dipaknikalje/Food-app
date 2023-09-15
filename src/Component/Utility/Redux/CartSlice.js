import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "loggedInStatus",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = Slice.actions;

export default Slice.reducer;
