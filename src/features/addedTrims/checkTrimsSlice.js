import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const checkTrimsSlice = createSlice({
  name: "addedTrimsSlice",
  initialState,
  reducers: {
    addItem(state, action) {
      const s = action.payload
      return [...state, s]
    },
  },
})

const { actions, reducer } = checkTrimsSlice

export const { addItem } = actions
export default reducer
