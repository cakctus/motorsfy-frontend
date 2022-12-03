import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const saveOptionsSlice = createSlice({
  name: "saveOptions",
  initialState,
  reducers: {
    saveOptionsFunc(state, action) {
      const option = {
        category: action.payload.category,
        optionList: action.payload.optionList,
      }
      return [...state, option]
    },
  },
})

export const { saveOptionsFunc } = saveOptionsSlice.actions
export default saveOptionsSlice.reducer
