import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const addedTrimsSlice = createSlice({
  name: "addedTrimsSlice",
  initialState,
  reducers: {
    addTrimInterior(state, action) {
      const trim = {
        exterior: action.payload.interior,
        interior: action.payload.exterior,
      }
      return [...state, trim]
    },
  },
})

const { actions, reducer } = addedTrimsSlice

export const { addTrimInterior } = actions
export default reducer
