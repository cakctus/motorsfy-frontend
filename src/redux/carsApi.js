import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["Cars", "Comments"],
  endpoints: (build) => ({
    getBrands: build.query({
      query: () => `/cars-brands/`,
    }),
    getModels: build.query({
      query: (brandName) => `/cars-models/${brandName}`,
    }),
    getGenerationsMain: build.query({
      query: (modelId) => `/main-cars-generations/${modelId}`,
    }),
    getGenerations: build.query({
      query: ({ modelId, page }) => `/cars-generations/${modelId}?page=${page}`,
    }),
    getModifications: build.query({
      query: (generationId) => `/cars-modifications/${generationId}`,
    }),
    getModificationDetail: build.query({
      query: (modificationId) => `/cars-modifications-detail/${modificationId}`,
      providesTags: (result) =>
        result
          ? [
              ...result.comment.map(({ id }) => ({ type: "Comments", id })),
              { type: "Comments", id: "CommentList" },
            ]
          : [{ type: "Comments", id: "CommentList" }],
    }),
    putRating: build.mutation({
      query: ({ id, rating, userId }) => ({
        url: `/rating/${id}`,
        method: "PUT",
        body: { id, rating, userId },
      }),
      invalidatesTags: [{ type: "Cars", id: "Object" }],
    }),
    getRating: build.query({
      query: (modificationId) => `/get-rating/${modificationId}`,
      providesTags: [{ type: "Cars", id: "Object" }],
    }),
    postComment: build.mutation({
      query: ({ comment, modificationId, userId }) => ({
        url: `/create-car-comment/${modificationId}`,
        method: "POST",
        body: { comment, modificationId, userId },
      }),
      invalidatesTags: [{ type: "Comments", id: "CommentList" }],
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

export const {
  useGetBrandsQuery,
  useGetModelsQuery,
  useGetGenerationsQuery,
  useGetModificationsQuery,
  useGetModificationDetailQuery,
  usePutRatingMutation,
  useGetRatingQuery,
  usePostCommentMutation,
  useGetCommentQuery,
  useGetGenerationsMainQuery,
} = carsApi
