import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const carsCRUDApi = createApi({
  reducerPath: "carsCRUDApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (build) => ({
    getAllBrands: build.query({
      query: () => `/get-all-brands/`,
    }),
    getAllModels: build.query({
      query: (brandId) => `/get-all-models/${brandId}`,
    }),
    getGenerations: build.query({
      query: (modelId) => `/get-all-generation/${modelId}`,
    }),
  }),
})

export const {
  useGetAllBrandsQuery,
  useGetAllModelsQuery,
  useGetGenerationsQuery,
} = carsCRUDApi
