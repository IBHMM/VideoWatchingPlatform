import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { RegistrationApi } from "../api/Authentication";
import { UserApi } from "../api/admin/user/index.js";
import userReducer from "../slices/user";
import { UserMovieApi } from "../api/client/movie/index.js";
import { MovieApi } from "../api/admin/movie/index.js";

export const store = configureStore({
  reducer: {
    [RegistrationApi.reducerPath]: RegistrationApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [UserMovieApi.reducerPath]: UserMovieApi.reducer,
    [MovieApi.reducer]: MovieApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      RegistrationApi.middleware,
      UserApi.middleware,
      UserMovieApi.middleware,
      MovieApi.middleware
    ),
});

setupListeners(store.dispatch);
