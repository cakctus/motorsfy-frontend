import { useState, useReducer, useRef, useEffect } from "react"
import { Outlet } from "react-router-dom"
import CreateCarNameForm from "./CreateCarNameForm/CreateCarNameForm"
import CreateCarColorImage from "./CreateCarColorImageForm/CreateCarColorImage"
import CreateCarModelForm from "./CreateCarModelForm/CreateCarModelForm"
import CreateCarWheelForm from "./CreateCarWheelForm/CreateCarWheelForm"
import CreateCarPhotosForm from "./CreateCarPhotosForm/CreateCarPhotosForm"
import "../form.scss"
import ImageUpHolsteryForm from "./InteriorForm/ImageUpHolsteryForm/ImageUpHolsteryForm"
import ImageUpHolsteryInteriorForm from "./InteriorForm/ImageUpHolsteryForm/ImageUpHolsteryInteriorForm"
import ImageTrimsForm from "./InteriorForm/ImageTrimsForm/ImageTrimsForm"
import ImageTrimsInteriorForm from "./InteriorForm/ImageTrimsForm/ImageTrimsInteriorForm"
import InteriorForm from "./InteriorForm/InteriorForm"

import ExteriorForm from "./ExteriorForm/ExteriorForm"
type Props = {}

type State = {
  car: string
}

const initialState = {
  car: "BMW",
  colorImage: "",
  model: "",
  wheel: [],
  photosCars: [],
  imageUpHolstery: "",
  imageUpHolsteryInterior: "",
  imageTrims: "",
  imageTrimsInterior: "",
}

type Action =
  | { type: "CAR"; payload: string }
  | { type: "CARS_PHOTOS"; payload: any }
  | { type: "CAR_PHOTO_IMAGE"; payload: any }
  | { type: "MODEL"; payload: any }
  | { type: "WHEEL"; payload: any }
  | { type: "IMAGE_UPHOLSTERY"; payload: any }
  | { type: "IMAGE_UPHOLSTERY_INTERIOR"; payload: any }
  | { type: "IMAGE_TRIMS"; payload: any }
  | { type: "IMAGE_TRIMS_INTERIOR"; payload: any }

function reducer(state: any, action: Action) {
  switch (action.type) {
    case "CAR":
      return {
        ...state,
        car: action.payload,
      }
    case "CARS_PHOTOS":
      const arr = []
      for (let i = 0; i < action.payload.length; i++) {
        arr.push(String(action.payload[i]))
      }
      return {
        ...state,
        photosCars: action.payload,
      }
    case "CAR_PHOTO_IMAGE":
      return {
        ...state,
        colorImage: action.payload,
      }
    case "MODEL":
      return {
        ...state,
        model: action.payload,
      }
    case "WHEEL":
      return {
        ...state,
        wheel: action.payload,
      }
    case "IMAGE_UPHOLSTERY":
      return {
        ...state,
        imageUpHolstery: action.payload,
      }
    case "IMAGE_UPHOLSTERY_INTERIOR":
      return {
        ...state,
        imageUpHolsteryInterior: action.payload,
      }
    case "IMAGE_TRIMS":
      return {
        ...state,
        imageTrims: action.payload,
      }
  }
}

const Form = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [photos, setPhotos] = useState<any>([])
  const [interior, setInterior] = useState<any>([])
  // const [uploadedImage, setUploadedImage] = useState<any[]>([])
  const [dynamicAddWheel, setDynamicAddWheel] = useState<any>([])

  const carName = (car: string) => {
    dispatch({ type: "CAR", payload: car })
  }

  const carPhotoImage = (carPhotoImageFile: string) => {
    dispatch({ type: "CAR_PHOTO_IMAGE", payload: carPhotoImageFile })
  }

  const carModel = (model: string) => {
    dispatch({ type: "MODEL", payload: model })
  }
  const carWheel = (wheel: any, photosCar: any) => {
    const obj = {
      wheel: wheel,
      photosCar: photosCar,
    }
    setPhotos((prev: any) => [...prev, obj])
    dispatch({ type: "WHEEL", payload: photos })
  }

  // useEffect(() => {
  // dispatch({ type: "CARS_PHOTOS", payload: uploadedImage })
  // }, [uploadedImage])

  const carPhotos = (photos: any) => {
    // console.log(photos, "photos")
    // setPhotos(photos)
    // setPhotos((prev: any) => [...prev], photos)
    dispatch({
      type: "CARS_PHOTOS",
      payload: photos,
    })
  }

  const carImageUpHolstery = (upholstery: any) => {
    dispatch({ type: "IMAGE_UPHOLSTERY", payload: upholstery })
  }

  const carImageUpHolsteryInterior = (upholstery: any) => {
    dispatch({ type: "IMAGE_UPHOLSTERY_INTERIOR", payload: upholstery })
  }

  const carImageTrims = (trims: any) => {
    dispatch({ type: "IMAGE_TRIMS", payload: trims })
  }

  const carImageTrimsInterior = (imageTrimsInterior: any) => {
    dispatch({ type: "IMAGE_TRIMS_INTERIOR", payload: imageTrimsInterior })
  }

  return (
    <>
      Form
      <CreateCarNameForm carName={carName} />
      <CreateCarModelForm carModel={carModel} />
      <CreateCarColorImage carPhotoImage={carPhotoImage} />
      <ExteriorForm carWheel={carWheel} />
      <InteriorForm
        carImageUpHolstery={carImageUpHolstery}
        carImageUpHolsteryInterior={carImageUpHolsteryInterior}
        carImageTrims={carImageTrims}
        carImageTrimsInterior={carImageTrimsInterior}
      />
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default Form
