import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  carColor: 0,
  carWheel: 0,
  interiorId: 0,
  imageUpholstery: 0,
  imageTrims: 0,
  optionId: [
    {
      optionId: 0,
      optionItems: [0],
    },
  ],
  optionItemId: [],
}

const selectedCarSlice = createSlice({
  name: "selectedCar",
  initialState,
  reducers: {
    changeCarColor: (state, action) => ({
      ...state,
      carColor: action.payload,
    }),
    changeCarWheel: (state, action) => ({
      ...state,
      carWheel: action.payload,
    }),
    changeInteriorId: (state, action) => ({
      ...state,
      interiorId: action.payload,
    }),
    changeimageUpholstery: (state, action) => ({
      ...state,
      imageUpholstery: action.payload,
    }),
    changeimageTrim: (state, action) => ({
      ...state,
      imageTrims: action.payload,
    }),
    changeOptionId: (state, action) => {
      const array = [...state.optionId, action.payload]
      const unique = [...new Set(array)]
      return {
        ...state,
        optionId: unique,
      }
    },
    changeOptionItemId: (state, action) => {
      const array = [...state.optionItemId, action.payload]
      const unique = [...new Set(array)]
      return {
        ...state,
        optionItemId: unique,
      }
    },
    deleteOptionItem: (state, action) => {
      const prevState = state.optionItemId.filter(
        (item) => item.title !== action.payload
      )
      return {
        ...state,
        optionItemId: prevState,
      }
    },
  },
})

export const {
  changeCarColor,
  changeCarWheel,
  changeInteriorId,
  changeimageUpholstery,
  changeimageTrim,
  changeOptionId,
  changeOptionItemId,
  deleteOptionItem,
} = selectedCarSlice.actions
export default selectedCarSlice.reducer
