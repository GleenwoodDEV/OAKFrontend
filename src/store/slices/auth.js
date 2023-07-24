import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../../services/auth/auth.service";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const data = await AuthService.login(email, password);
      return { data };
    } catch (error) {}
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(state.user);
      state.isLoggedIn = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

const { reducer } = authSlice;
export default reducer;
