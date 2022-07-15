import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: { isAuthenticated: true, token: null },
  reducers: {
    setToken(state) {},
    SetAuthentification(state,action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice;
