import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const RegistrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1/user',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: '/refresh-token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    getuser: builder.query({
      query: () => ({
        url: '/getuser',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    getcode: builder.mutation({
      query: (credentials) => ({
        url: '/forget/getcode',
        method: 'POST',
        body: credentials,
      }),
    }),
    verify: builder.mutation({
      query: (credentials) => ({
        url: '/forget/verify',
        method: 'POST',
        body: credentials,
      }),
    }),
    change: builder.mutation({
      query: (credentials) => ({
        url: '/forget/reset_password',
        method: 'POST',
        body: credentials,
      }),
    }),

    contact: builder.mutation({
      query: (text) => ({
        url: '/contact',
        method: 'POST',
        body: {
          text,
        },
      }),
    }),

    subscribe: builder.mutation({
      query: (credentials) => ({
        url: '/subscribe',
        method: 'POST',
        body: credentials,
      }),
    }),

  }),
});

export const { useLoginMutation, useSignupMutation, useRefreshMutation, useGetuserQuery, useGetcodeMutation, useVerifyMutation, useChangeMutation, useLogoutMutation, useContactMutation, useSubscribeMutation } = RegistrationApi;
