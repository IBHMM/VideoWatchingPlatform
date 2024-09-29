import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const MovieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1/admin/movie',
    credentials: 'include',
  }),
  tagTypes: ['Movie'],
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: () => '/movies',
      providesTags: ['Movie'],
    }),
    
    uploadMovie: builder.mutation({
      query: (formData) => ({
        url: '/upload',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Movie'],
    }),

    updateMovie: builder.mutation({
      query: ({ movieId, formData }) => ({
        url: `/update/${movieId}`,
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['Movie'],
    }),

    deleteMovie: builder.mutation({
      query: (movieId) => ({
        url: `/delete/${movieId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Movie'],
    }),
  }),
});

export const { 
  useGetAllMoviesQuery, 
  useUploadMovieMutation,
  useUpdateMovieMutation,
  useDeleteMovieMutation, 
} = MovieApi;
