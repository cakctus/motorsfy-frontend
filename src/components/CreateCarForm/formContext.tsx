import { createContext } from "react"

export interface ContextState {
  carName: (car: string) => void
  carModel: (model: string) => void
  carColorImage: (carPhotoImageFile: any) => void
  carWheel: (wheel: any, photosCar: any) => void
  carImageUpHolstery: (upholstery: any) => void
  carImageUpHolsteryInterior: (upholstery: any) => void
  carImageTrims: (trimsImage: any, trimsInterior: any) => void
  setInterior: any
  interiorCar: any
  setTrimInterior: any
  trimInteriorFunc: any
  interior: any
  setCategoryOptions: any
  optionsListArray: any
  cars: any
  saveOptionObject: () => void
  carsList: any
  setLinkState: any
  linkState: any
  saveAndAddAnotherColor: () => void
}

const Context = createContext<ContextState | null>(null)

export default Context
