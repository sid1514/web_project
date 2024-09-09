import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: Cookies.get("isAuthenticated") === "true",
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
  isNavigating: false,
};

const LoginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;

      // Set cookies on login
      Cookies.set("isAuthenticated", "true");
      Cookies.set("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;

      // Remove cookies on logout
      Cookies.remove("isAuthenticated");
      Cookies.remove("user");
    },
    setNavigating(state, action) {
      state.isNavigating = action.payload;
    },
  },
});

export const { login, logout, setNavigating } = LoginSlice.actions;
export const selectAuth = (state) => state.auth;
export default LoginSlice.reducer;
