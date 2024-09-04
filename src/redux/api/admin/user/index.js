import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UserApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3000/api/v1/admin',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
      // Get all users
      getAllUsers: builder.query({
        query: () => '/getallusers',
        providesTags: ['User'],
      }),
  
      // Get a single user by ID
      getUser: builder.query({
        query: (userId) => `/getalluser/${userId}`,
        providesTags: ['User'],
      }),
  
      // Add a new user
      addUser: builder.mutation({
        query: (formData) => ({
          url: '/adduser',
          method: 'POST',
          body: { ...formData }
        }),
        invalidatesTags: ['User'],
      }),
  
      // Update a user by ID
      updateUser: builder.mutation({
        query: ({ userId, ...updatedData }) => ({
          url: `/update/${userId}`,
          method: 'PATCH',
          body: updatedData,
        }),
        invalidatesTags: (result, error, { userId }) => [{ type: 'User', id: userId }],
      }),
  
      // Delete a user by ID
      deleteUser: builder.mutation({
        query: (userId) => ({
          url: `/delete/${userId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['User'],
      }),
  
      // Block a user by ID
      blockUser: builder.mutation({
        query: (userId) => ({
          url: `/block/${userId}`,
          method: 'PATCH'
        }),
        invalidatesTags: ['User'],
      }),
  
      // Unblock a user by ID
      unblockUser: builder.mutation({
        query: (userId) => ({
          url: `/unblock/${userId}`,
          method: 'PATCH',
        }),
        invalidatesTags: ['User'],
      }),
  
      // Soft delete a user by ID
      softDelete: builder.mutation({
        query: (userId) => ({
          url: `/softDelete/${userId}`,
          method: 'PATCH',
        }),
        invalidatesTags: (result, error, userId) => [{ type: 'User', id: userId }],
      }),
  
      // Restore a soft-deleted user by ID
      restoreUser: builder.mutation({
        query: (userId) => ({
          url: `/restoreUser/${userId}`,
          method: 'PATCH',
        }),
        invalidatesTags: (result, error, userId) => [{ type: 'User', id: userId }],
      }),
  
      // Add a subscription to a user by ID
      addSubscription: builder.mutation({
        query: (userId) => ({
          url: `/subscription/add/${userId}`,
          method: 'PATCH',
        }),
        invalidatesTags: (result, error, userId) => [{ type: 'User', id: userId }],
      }),
  
      // Remove a subscription from a user by ID
      removeSubscription: builder.mutation({
        query: (userId) => ({
          url: `/subscription/remove/${userId}`,
          method: 'PATCH',
        }),
        invalidatesTags: (result, error, userId) => [{ type: 'User', id: userId }],
      }),
    }),
});


export const { useGetAllUsersQuery, useGetUserQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation, useBlockUserMutation, useUnblockUserMutation, useSoftDeleteMutation, useRestoreUserMutation, useAddSubscriptionMutation, useRemoveSubscriptionMutation } = UserApi
  