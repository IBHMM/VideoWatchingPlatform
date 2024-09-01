import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { RegistrationApi } from '../api/Authentication'
import user from '../slices/user'

export const store = configureStore({
  reducer: {
    [RegistrationApi.reducerPath]: RegistrationApi.reducer,
    user: user
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RegistrationApi.middleware),
})

setupListeners(store.dispatch)