import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import authSlice from "../features/auth/authSlice"
import optionsCategorySlice from "../features/optionsForm/optionsCategorySlice"
import optionsObjectListSlice from "../features/optionsForm/optionsObjectListSlice"
import saveOptionsSlice from "../features/optionsForm/saveOptions"
import isOptionSaveSlice from "../features/optionsForm/isOptionSaveSlice"
import createCarFormSlice from "../features/createCarForm/createCarFormSlice"
import selectedCarSlice from "../features/selectedCar/selectedCarSlice"
import addedTrimsSlice from "../features/addedTrims/addedTrimsSlice"
import checkTrimsSlice from "../features/addedTrims/checkTrimsSlice"
import searchFormSlice from "../features/searchForm/searchFormSlice"
import getCarsSlice from "../features/getCars/getCarsSlice"
import idGenerationsSlice from "../features/allModelsIdGeneration/idGenerationsSlice"
import { mainCategory } from "../redux/mainCategory"
import getBodyCarsSlice from "../features/getBodyCars/getBodySlice"

import { carsApi } from "../redux/carsApi"
import { searchApi } from "../redux/searchApi"

const rootReducer = combineReducers({
  auth: authSlice,
  optionsCategory: optionsCategorySlice,
  optionsObjectList: optionsObjectListSlice,
  saveOptions: saveOptionsSlice,
  isSaveOption: isOptionSaveSlice,
  createCarForm: createCarFormSlice,
  selectedCar: selectedCarSlice,
  addedTrims: addedTrimsSlice,
  checkTrims: checkTrimsSlice,
  search: searchFormSlice,
  getCars: getCarsSlice,
  idGeneration: idGenerationsSlice,
  getBody: getBodyCarsSlice,
  [carsApi.reducerPath]: carsApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  [mainCategory.reducerPath]: mainCategory.reducer,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["saveOptions", "search", "idGeneration"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: {
        // Ignore state paths, e.g. state for 'items':
        ignoredPaths: ["search"],
      },
    })
      .concat(carsApi.middleware)
      .concat(searchApi.middleware)
      .concat(mainCategory.middleware),
})

export const persistor = persistStore(store)

export default store
