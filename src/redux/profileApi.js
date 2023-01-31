import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["Profile"],
  endpoints: (build) => ({
    getProfile: build.query({
      query: (id) => `/get-profile/${id}`,
      providesTags: ["Profile"],
      keepUnusedDataFor: 50,
    }),
    updateProfile: build.mutation({
      query: ({ userPhoto, userId }) => ({
        url: `/update-user-photo/`,
        method: "POST",
        body: { userPhoto, userId },
      }),
      invalidatesTags: [{ type: "Profile", id: "ProfiliId" }],
    }),
    getComment: build.query({
      query: (modificationId) => `/get-car-comment/${modificationId}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Comments", id })),
              { type: "Comments", id: "CommentList" },
            ]
          : [{ type: "Comments", id: "CommentList" }],
    }),
  }),
})

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi
