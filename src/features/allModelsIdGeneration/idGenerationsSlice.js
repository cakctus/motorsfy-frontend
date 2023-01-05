import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  modelId: null,
}

const idGenerationSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addModelIdSlice: (state, action) => ({
      ...state,
      modelId: action.payload,
    }),
  },
})

export const { addModelIdSlice } = idGenerationSlice.actions

export default idGenerationSlice.reducer
