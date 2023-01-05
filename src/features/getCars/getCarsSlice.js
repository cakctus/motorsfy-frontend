import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  brands,
  models,
  generations,
} from "../../services/searchFormServices/searchFormServices"

const initialState = {
  brandId: null,
}

export const modelsListSlice = createAsyncThunk(
  "api/modelsList",
  async (payload, { fulfillWithValue }) => {
    try {
      const response = await models(payload)
      const data = await response.data
      if (!data.statusText === "OK") throw new Error("Error")
      return data
    } catch (error) {
      fulfillWithValue(error.message)
    }
  }
)

const getCarsSlice = createSlice({
  name: "gerCars",
  initialState,
  reducers: {
    getBrandId(state, action) {
      return {
        ...state,
        brandId: action.payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(modelsListSlice.pending, (state, action) => {
      state.isModelLoading = "Loading..."
    })
    builder.addCase(modelsListSlice.fulfilled, (state, action) => {
      state.isModelLoading = "Done"
      state.models = action.payload
    })
    builder.addCase(modelsListSlice.rejected, (state, action) => {
      state.isModelLoading = "Error"
    })
  },
})

export const { getBrandId } = getCarsSlice.actions
export default getCarsSlice.reducer
