import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UserMovieApi = createApi({
  reducerPath: 'userMovieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://movon-server-1.onrender.com/api/v1/user/movie',
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

    IncreaseView: builder.mutation({
      query: (videoId) => ({
        url: `/view/${videoId}`,
        method: 'POST',
      }),
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
      query: ({ videoId, commentId, content, score }) => ({
        url: `/videos/${videoId}/comments/update/${commentId}`,
        method: 'PUT',
        body: {videoId, commentId, content, score},
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

    likemovie: builder.mutation({
      query: ({videoId}) => ({
        url: `/like`,
        method: 'POST',
        body: {videoId}
      }),
      invalidatesTags: ["Video"],
    }),

    watchlist: builder.mutation({
      query: ({videoId}) => ({
        url: `/watchlist`,
        method: 'POST',
        body: {videoId}
      }),
      invalidatesTags: ["Video"],
    }),

    toggleCommentLike: builder.mutation({
      query: (cridentials) => ({
        url: `/videos/togglecomment`,
        method: "PATCH",
        body: cridentials,
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
  useIncreaseViewMutation,
  useLikemovieMutation,
  useWatchlistMutation,
  useToggleCommentLikeMutation,
} = UserMovieApi;
