import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  save: false,
}

const isOptionSaveSlice = createSlice({
  name: "isOptionSave",
  initialState,
  reducers: {
    saveClickOption(state) {
      state.save = true
    },
    clearOptionSave(state) {
      state.save = false
    },
  },
})

export const { saveClickOption, clearOptionSave } = isOptionSaveSlice.actions
export default isOptionSaveSlice.reducer
