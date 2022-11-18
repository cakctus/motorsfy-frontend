import { createContext, useContext } from "react"

export interface ContextState {
  carName: (car: string) => void
  carModel: (model: string) => void
  carColorImage: (carPhotoImageFile: any) => void
  carWheel: (wheel: any, photosCar: any) => void
  carImageUpHolstery: (upholstery: any) => void
  carImageUpHolsteryInterior: (upholstery: any) => void

  setInterior: any
  interiorCar: any
  setTrimInterior: any
  trimInteriorFunc: any
  interior: any
  setCategoryOptions: any
  optionsListArray: any
  cars: any
  saveOptionObject: () => void
}

const Context = createContext<ContextState | null>(null)

export default Context
