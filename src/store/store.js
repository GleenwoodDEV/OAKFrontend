import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import { camerasApi } from "./api/CamerasApi";
import { usersApi } from "./api/UsersApi";
import { businessApi } from "./api/BusinessApi";
import messageReducer from "./slices/message";
import { notificationApi } from "./api/NotificationApi";

const reducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  [camerasApi.reducerPath]: camerasApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [businessApi.reducerPath]: businessApi.reducer,
  [notificationApi.reducerPath]: notificationApi.reducer,
});

const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(camerasApi.middleware)
      .concat(usersApi.middleware)
      .concat(businessApi.middleware)
      .concat(notificationApi.middleware),
});

export default store;
