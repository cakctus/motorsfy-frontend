import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const mainCategory = createApi({
  reducerPath: "mainCategory",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["NewCars", "CarsBody"],
  endpoints: (build) => ({
    getNewCars: build.query({
      query: (page = 1, limit = 10) => `/new-cars/?page=${page}&limit=${limit}`,
      providesTags: (data) =>
        data.data
          ? [
              ...data.data.map(({ id }) => ({ type: "Cars", id })),
              { type: "Cars", id: "NewCars" },
            ]
          : [{ type: "Cars", id: "NewCars" }],
    }),
    getCarsByBody: build.query({
      query: () => `/get-cars-by-body/`,
      keepUnusedDataFor: 60 * 60 * 24 * 30,
    }),
    topEvByRange: build.query({
      query: () => `/top-ev-by-range/`,
      keepUnusedDataFor: 1000,
    }),
    topCarsBySpeed: build.query({
      query: () => `/top-cars-by-speed/`,
      keepUnusedDataFor: 10000,
    }),
    getBrandsBody: build.query({
      query: () => `/cars-brands-search-by-body/`,
      keepUnusedDataFor: 1000,
    }),
    getBodySearchResult: build.query({
      query: (searchParams) => `cars-body-search-result/?${searchParams}`,
    }),
  }),
})

export const {
  useGetNewCarsQuery,
  useGetCarsByBodyQuery,
  useTopEvByRangeQuery,
  useTopCarsBySpeedQuery,
  useGetBrandsBodyQuery,
  useGetBodySearchResultQuery,
  useLazyGetBodySearchResultQuery,
} = mainCategory
