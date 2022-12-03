import { createSlice } from "@reduxjs/toolkit"

export const initialState = []

const optionsObjectListSlice = createSlice({
  name: "optionsForm",
  initialState,
  reducers: {
    setOptionsArray(state, action) {
      const o = { ...action.payload }
      return [...state, o]
    },
    clearOptionsArray(state) {
      return []
    },
  },
})

export const { setOptionsArray, clearOptionsArray } =
  optionsObjectListSlice.actions
export default optionsObjectListSlice.reducer
