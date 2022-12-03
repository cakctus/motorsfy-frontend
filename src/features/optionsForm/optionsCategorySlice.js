import { createSlice } from "@reduxjs/toolkit"

export const initialState = {}

const optionsCategorySlice = createSlice({
  name: "optionsForm",
  initialState,
  reducers: {
    setCategoryOptions(state, action) {
      state.category = action.payload
    },
  },
})

export const { setCategoryOptions } = optionsCategorySlice.actions
export default optionsCategorySlice.reducer
