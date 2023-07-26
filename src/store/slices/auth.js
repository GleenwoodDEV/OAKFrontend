import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { setMessage } from "./message";

import AuthService from "../../services/auth/auth.service";
import jwtDecode from "jwt-decode";
import { useState } from "react";

const token = JSON.parse(localStorage.getItem("token"));

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(email, password);
      const decodeData = jwtDecode(data);

      if (decodeData.role === "Admin") {
        localStorage.setItem("token", JSON.stringify(data));
        return decodeData;
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = token
  ? { isLoggedIn: true, user: jwtDecode(token) }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => ({
      ...state,
      isLoggedIn: true,
      user: action.payload,
    }));
    builder.addCase(login.rejected, (state, action) => ({
      ...state,
      isLoggedIn: false,
      user: null,
    }));
    builder.addCase(logout.fulfilled, (state, action) => ({
      ...state,
      isLoggedIn: false,
      user: null,
    }));
  },
});

const { reducer } = authSlice;
export default reducer;
