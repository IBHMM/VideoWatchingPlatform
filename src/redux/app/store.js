import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { RegistrationApi } from '../api/Authentication';
import { UserApi } from '../api/admin/user/index.js';
import userReducer from '../slices/user';

export const store = configureStore({
  reducer: {
    [RegistrationApi.reducerPath]: RegistrationApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    user: userReducer,
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RegistrationApi.middleware, UserApi.middleware),
});

setupListeners(store.dispatch);
