import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (build) => ({
    getBrands: build.query({
      query: () => `/cars-brands-search/`,
      keepUnusedDataFor: 60 * 60 * 24 * 31,
    }),
    getModels: build.query({
      query: (brandId) => `/cars-models-search/${brandId}`,
    }),
    getGenerations: build.query({
      query: ({ params, page }) =>
        `/cars-generations-search/?${params}&page=${page}`,
      keepUnusedDataFor: 0,
    }),
    getGenerationsResult: build.query({
      query: ({ modelId, year }) =>
        `/cars-generations-result/${modelId}/${year}`,
    }),
  }),
})

export const {
  useGetBrandsQuery,
  useGetModelsQuery,
  useGetGenerationsQuery,
  useLazyGetGenerationsQuery,
  useGetGenerationsResultQuery,
} = searchApi
