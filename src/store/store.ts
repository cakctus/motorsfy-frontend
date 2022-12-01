import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/auth/authSlice"
import optionsFormSlice from "../features/optionsForm/optionsFormSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    optionsForm: optionsFormSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
