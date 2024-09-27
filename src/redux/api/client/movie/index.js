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
      providesTags: ['Video'],
    }),

    filterVideos: builder.mutation({
      query: (querybody) => ({
        url: '/filtervideos',
        method: 'POST',  
        body: querybody,  
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['Video'],
    }),

    addComment: builder.mutation({
      query: ({ videoId, commentData }) => ({
        url: `/videos/${videoId}/comments/add`,
        method: 'POST',
        body: commentData,
      }),
      invalidatesTags: ["Comment", "Video"],
    }),

    updateComment: builder.mutation({
      query: ({ videoId, commentId, commentData }) => ({
        url: `/videos/${videoId}/comments/update/${commentId}`,
        method: 'PUT',
        body: commentData,
      }),
      invalidatesTags: ["Comment", "Video"],
    }),

    deleteComment: builder.mutation({
      query: ({ videoId, commentId }) => ({
        url: `/videos/${videoId}/comments/delete/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Comment", "Video"],
    }),
  }),
});

export const {
  useGetAllVideosQuery,
  useGetVideoByIdQuery,
  useFilterVideosMutation,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = UserMovieApi;
