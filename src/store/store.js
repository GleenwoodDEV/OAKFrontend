import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import { camerasApi } from "./api/CamerasApi";
import { usersApi } from "./api/UsersApi";
import { businessApi } from "./api/BusinessApi";

const reducer = combineReducers({
  auth: authReducer,
  [camerasApi.reducerPath]: camerasApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [businessApi.reducerPath]: businessApi.reducer,
});

const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(camerasApi.middleware)
      .concat(usersApi.middleware)
      .concat(businessApi.middleware),
});

export default store;
