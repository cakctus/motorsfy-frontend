import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { createCarApi } from "../../services/createCarForm/createCarFormServices"

export const createCar = createAsyncThunk(
  "api/create-car",
  async (payload, { fulfillWithValue }) => {
    try {
      const response = await createCarApi(payload.id, payload.json)
      const data = await response.data
      if (!data.statusText === "OK") throw new Error("Server Error")
    } catch (error) {
      fulfillWithValue(error.message)
    }
  }
)

const initialState = {}

const createCarFormSlice = createSlice({
  name: "createCarFormSlice",
  initialState,
  reducers: (builder) => {
    builder.addCase(createCar.pending, (state, action) => {
      state.isLoading = "Loading..."
    })
    builder.addCase(createCar.fulfilled, (state, action) => {
      state.isLoading = "Done"
    })
    builder.addCase(createCar.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export default createCarFormSlice.reducer
