import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/auth/authSlice"
import optionsCategorySlice from "../features/optionsForm/optionsCategorySlice"
import optionsObjectListSlice from "../features/optionsForm/optionsObjectListSlice"
import saveOptionsSlice from "../features/optionsForm/saveOptions"
import isOptionSaveSlice from "../features/optionsForm/isOptionSaveSlice"
import createCarFormSlice from "../features/createCarForm/createCarFormSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    optionsCategory: optionsCategorySlice,
    optionsObjectList: optionsObjectListSlice,
    saveOptions: saveOptionsSlice,
    isSaveOption: isOptionSaveSlice,
    createCarForm: createCarFormSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
