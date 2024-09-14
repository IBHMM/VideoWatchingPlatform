import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UserMovieApi = createApi({
  reducerPath: 'userMovieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1/user/movie',
    credentials: 'include',
  }),
  tagTypes: ['Video', 'Comment'],
  endpoints: (builder) => ({
    getAllVideos: builder.query({
      query: () => '/getallvideos',
      providesTags: ['Video'],
    }),

    getVideoById: builder.query({
      query: (id) => `/getvideo/${id}`,
      providesTags: (result, error, id) => [{ type: 'Video', id }],
    }),

    filterVideos: builder.query({
      query: (queryParams) => ({
        url: '/filtervideos',
        params: queryParams, 
      }),
      providesTags: ['Video'],
    }),

    addComment: builder.mutation({
      query: ({ videoId, commentData }) => ({
        url: `/videos/${videoId}/comments/add`,
        method: 'POST',
        body: commentData,
      }),
      invalidatesTags: (result, error, { videoId }) => [{ type: 'Comment', videoId }],
    }),

    updateComment: builder.mutation({
      query: ({ videoId, commentId, commentData }) => ({
        url: `/videos/${videoId}/comments/update/${commentId}`,
        method: 'PUT',
        body: commentData,
      }),
      invalidatesTags: (result, error, { videoId }) => [{ type: 'Comment', videoId }],
    }),

    deleteComment: builder.mutation({
      query: ({ videoId, commentId }) => ({
        url: `/videos/${videoId}/comments/delete/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, { videoId }) => [{ type: 'Comment', videoId }],
    }),
  }),
});

export const {
  useGetAllVideosQuery
} = UserMovieApi;
