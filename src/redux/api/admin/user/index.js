import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UserApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3000/api/v1/admin',
      credentials: 'include',
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
      getAllUsers: builder.query({
        query: () => '/getallusers',
        providesTags: ['User'],
      }),
  
      getUser: builder.query({
        query: (userId) => `/getalluser/${userId}`,
        providesTags: ['User'],
      }),
  
      addUser: builder.mutation({
        query: (formData) => ({
          url: '/adduser',
          method: 'POST',
          body: formData
        }),
        invalidatesTags: ['User'],
      }),
  
      updateUser: builder.mutation({
        query: ({userId, updatedData}) => ({
          url: `/update/${userId}`,
          method: 'PATCH',
          body: updatedData,
        }),
        invalidatesTags: ['User'],
      }),
  
      deleteUser: builder.mutation({
        query: (userId) => ({
          url: `/delete/${userId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['User'],
      }),
  
      blockUser: builder.mutation({
        query: (userId) => ({
          url: `/block/${userId}`,
          method: 'PATCH'
        }),
        invalidatesTags: ['User'],
      }),
  
      unblockUser: builder.mutation({
        query: (userId) => ({
          url: `/unblock/${userId}`,
          method: 'PATCH',
        }),
        invalidatesTags: ['User'],
      }),
  
      softDelete: builder.mutation({
        query: (userId) => ({
          url: `/softDelete/${userId}`,
          method: 'PATCH',
        }),
        invalidatesTags: ['User'],
      }),
  
      restoreUser: builder.mutation({
        query: (userId) => ({
          url: `/restoreUser/${userId}`,
          method: 'PATCH',
        }),
        invalidatesTags: ['User'],
      }),
  
      addSubscription: builder.mutation({
        query: (userId) => ({
          url: `/subscription/add/${userId}`,
          method: 'PATCH',
        }),
        invalidatesTags: ['User'],
      }),
  
      removeSubscription: builder.mutation({
        query: (userId) => ({
          url: `/subscription/remove/${userId}`,
          method: 'PATCH',
        }),
        invalidatesTags: ['User'],
      }),
    }),
});


export const { useGetAllUsersQuery, useGetUserQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation, useBlockUserMutation, useUnblockUserMutation, useSoftDeleteMutation, useRestoreUserMutation, useAddSubscriptionMutation, useRemoveSubscriptionMutation } = UserApi
  