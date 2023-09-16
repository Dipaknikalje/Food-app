import { createSlice } from "@reduxjs/toolkit";

const UserLoggedSlice = createSlice({
  name: "userControl",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = UserLoggedSlice.actions;

export default UserLoggedSlice.reducer;