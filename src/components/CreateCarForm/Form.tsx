import { useState, useReducer, useEffect } from "react"
import Context, { ContextState } from "./formContext"
import { Outlet } from "react-router-dom"

import CarInfoForm from "./CreateCarInfoForm/CarInfoForm"
import ExteriorForm from "./ExteriorForm/ExteriorForm"
import InteriorForm from "./InteriorForm/InteriorForm"
import OptionsForm from "./OptionsForm/OptionsForm"
import "../form.scss"

type Props = {}

// type State = {
//   car: string
// }

// const initialState = {
//   car: "BMW",
//   model: "5 series 540i",
//   colorImage: "",
//   wheel: [],
//   photosCars: [],
//   interior: [],
//   imageTrims: "",
//   imageTrimsInterior: "",
// }

// type Action =
//   | { type: "CAR"; payload: string }
//   | { type: "CARS_PHOTOS"; payload: any }
//   | { type: "CAR_PHOTO_IMAGE"; payload: any }
//   | { type: "MODEL"; payload: any }
//   | { type: "WHEEL"; payload: any }
//   | { type: "IMAGE_UPHOLSTERY"; payload: any }
//   | { type: "IMAGE_UPHOLSTERY_INTERIOR"; payload: any }
//   | { type: "IMAGE_TRIMS"; payload: any }
//   | { type: "IMAGE_TRIMS_INTERIOR"; payload: any }

// function reducer(state: any, action: Action) {
//   switch (action.type) {
//     case "CAR":
//       return {
//         ...state,
//         car: action.payload,
//       }
//     case "CARS_PHOTOS":
//       return {
//         ...state,
//         photosCars: action.payload,
//       }
//     case "CAR_PHOTO_IMAGE":
//       return {
//         ...state,
//         colorImage: action.payload,
//       }
//     case "MODEL":
//       return {
//         ...state,
//         model: action.payload,
//       }
//     case "WHEEL":
//       return {
//         ...state,
//         wheel: action.payload,
//       }
//     case "IMAGE_UPHOLSTERY":
//       return {
//         ...state,
//         imageUpHolstery: action.payload,
//       }
//     case "IMAGE_UPHOLSTERY_INTERIOR":
//       return {
//         ...state,
//         imageUpHolsteryInterior: action.payload,
//       }
//     case "IMAGE_TRIMS":
//       return {
//         ...state,
//         imageTrims: action.payload,
//       }

//     case "IMAGE_TRIMS_INTERIOR":
//       return {
//         ...state,
//         imageTrimsInterior: action.payload,
//       }
//   }
// }

const Form = (props: Props) => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  // car
  const [cars, setCars] = useState<any>([])
  // exterior
  const [wheel, setWheel] = useState<any>([])
  // interior
  const [upHolsteryPhotos, setUpHolsteryPhotos] = useState<any>({})
  const [imageTrimsObject, setImageTrimsObject] = useState<any>([])
  const [interior, setInterior] = useState<any>([])
  const [trimInterior, setTrimInterior] = useState<any>([])
  // option
  const [categoryOptions, setCategoryOptions] = useState<any>()
  const [optionList, setOptionList] = useState<any>([])
  const [optionsObject, setObjectsObject] = useState<any>([])

  const [linkState, setLinkState] = useState<string>("Info")

  const carName = (car: string) => {
    setCars((prev: any) => ({
      ...prev,
      car: car,
    }))
    // dispatch({ type: "CAR", payload: car })
  }

  const carModel = (model: string) => {
    setCars((prev: any) => ({
      ...prev,
      model: model,
    }))
    // dispatch({ type: "MODEL", payload: model })
  }

  const carColorImage = (carPhotoImageFile: string) => {
    setCars((prev: any) => ({
      ...prev,
      color: carPhotoImageFile,
    }))
    // dispatch({ type: "CAR_PHOTO_IMAGE", payload: carPhotoImageFile })
  }

  const carWheel = (wheel: any, photosCar: any) => {
    const obj = {
      imageWheel: wheel,
      photos: photosCar,
    }
    setWheel((prev: any) => [...prev, obj])
    // dispatch({ type: "WHEEL", payload: wheel })
  }

  // const carPhotos = (photos: any) => {
  //   dispatch({ type: "CARS_PHOTOS", payload: photos })
  // }

  const carImageUpHolstery = (upholstery: any) => {
    setUpHolsteryPhotos((prev: any) => ({
      ...prev,
      imageUpHolstery: upholstery,
    }))
    // dispatch({ type: "IMAGE_UPHOLSTERY", payload: upholstery })
  }

  const carImageUpHolsteryInterior = (upholstery: any) => {
    setUpHolsteryPhotos((prev: any) => ({
      ...prev,
      imageUpHolsteryInterior: upholstery,
    }))
    // dispatch({ type: "IMAGE_UPHOLSTERY_INTERIOR", payload: upholstery })
  }

  const carImageTrims = (trimsImage: any, trimsInterior: any) => {
    const obj = {
      imageTrims: trimsImage,
      imageTrimsInterior: trimsInterior,
    }
    setImageTrimsObject(obj)
    // dispatch({ type: "IMAGE_TRIMS", payload: obj })
  }

  // const carImageTrimsInterior = (imageTrimsInterior: any) => {
  //   dispatch({ type: "IMAGE_TRIMS_INTERIOR", payload: imageTrimsInterior })
  // }

  const trimInteriorFunc = () => {
    // const obj = { ...state.imageTrims }
    const obj = { ...imageTrimsObject }
    setInterior((prev: any) => [...prev, obj])
  }

  const interiorCar = () => {
    const obj = {
      imageUpHolstery: upHolsteryPhotos.imageUpHolstery,
      imageUpHolsteryInterior: upHolsteryPhotos.imageUpHolsteryInterior,
      trims: [...interior],
    }
    setTrimInterior((prev: any) => [...prev, obj])
    setInterior([])
  }

  const optionsListArray = (obj: any) => {
    const o = { ...obj }
    setOptionList((prev: any) => [...prev, o])
  }

  const saveOptionObject = () => {
    const option = {
      category: categoryOptions,
      optionList: optionList,
    }
    setObjectsObject((prev: any) => [...prev, option])
  }
  useEffect(() => {
    // state.wheel = wheel
    // state.interior = trimInterior
    // state.options = [
    //   {
    //     category: categoryOptions,
    //     optionList: optionList,
    //   },
    // ]
    setCars((prev: any) => ({
      ...prev,
      wheel: wheel,
      interior: trimInterior,
      // options: [
      //   {
      //     category: categoryOptions,
      //     optionList: optionList,
      //   },
      // ],
      options: optionsObject,
    }))
  }, [wheel, trimInterior, categoryOptions, optionList, optionsObject])

  const AppContext: ContextState = {
    carName,
    carModel,
    carColorImage,
    carWheel,
    carImageUpHolstery,
    carImageUpHolsteryInterior,
    setInterior,
    interiorCar,
    setTrimInterior,
    trimInteriorFunc,
    interior,
    setCategoryOptions,
    optionsListArray,
    cars,
    saveOptionObject,
  }

  // console.log(linkState)
  console.log(cars)

  return (
    <>
      <Context.Provider value={AppContext}>
        <div style={{ display: "flex", gap: "1rem" }}>
          {["Info", "Exterior", "Interior", "Options"].map(
            (item: string, index: number) => {
              return (
                <p
                  key={index}
                  onClick={(e: any) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setLinkState(e.target.innerText)
                  }}
                >
                  {item}
                </p>
              )
            }
          )}
        </div>
        <div
          className="carinfo-form"
          style={{ display: linkState === "Info" ? "block" : "none" }}
        >
          <CarInfoForm />
        </div>
        <div
          className="exterior-form"
          style={{ display: linkState === "Exterior" ? "block" : "none" }}
        >
          <ExteriorForm />
        </div>
        <div
          className="interior-form"
          style={{ display: linkState === "Interior" ? "block" : "none" }}
        >
          <InteriorForm carImageTrims={carImageTrims} />
        </div>
        <div
          className="options-form"
          style={{ display: linkState === "Options" ? "block" : "none" }}
        >
          <OptionsForm />
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </Context.Provider>
    </>
  )
}

export default Form
