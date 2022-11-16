import { createContext, useContext } from "react"

export interface ContextState {
  setInterior: any
  interiorCar: any
  setTrimInterior: any
  trimInteriorFunc: any
  interior: any
}

const Context = createContext<ContextState | null>(null)

export default Context
