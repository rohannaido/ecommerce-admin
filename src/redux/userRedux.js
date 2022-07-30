import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      accessToken: "",
      createdAt: "",
      email: "",
      isAdmin: true,
      updatedAt: "",
      username: "",
      __v: "",
      _id: "",
    },
  },
  reducers: {
    userLogIn: (state, action) => {
        console.log("LOGIN REDUCER ", action.payload);
        state.value = action.payload;
    },
    userLogOut: (state) => {
        console.log("LOG OUT REDUCER ");
        state.value = {};
    }
  },
});

export const { userLogIn, userLogOut } = userSlice.actions;
export default userSlice.reducer;