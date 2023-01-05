import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  brand: null,
  bodyType: null,
  page: 1,
  limit: 10,
}

const getBodyCarsSlice = createSlice({
  name: "gerCars",
  initialState,
  reducers: {
    getBodyId(state, action) {
      return {
        ...state,
        brand: action.payload,
      }
    },
    getBodyType(state, action) {
      return {
        ...state,
        bodyType: action.payload,
      }
    },
    increasePage(state, action) {
      return {
        ...state,
        [action.payload.page]: action.payload.value,
      }
    },
  },
})

export const { getBodyId, getBodyType, increasePage } = getBodyCarsSlice.actions
export default getBodyCarsSlice.reducer
