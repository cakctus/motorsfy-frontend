import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  brandId: 0,
  modelId: "all",
  // year: "all",
}

const searchFormSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addBrandId: (state, action) => ({
      ...state,
      brandId: action.payload,
    }),
    addModelId: (state, action) => ({
      ...state,
      modelId: action.payload,
    }),
    addYear: (state, action) => ({
      ...state,
      year: action.payload,
    }),
    increasePage(state, action) {
      return {
        ...state,
        [action.payload.page]: action.payload.value,
      }
    },
  },
})

export const { addBrandId, addModelId, addYear, increasePage } =
  searchFormSlice.actions

export default searchFormSlice.reducer
