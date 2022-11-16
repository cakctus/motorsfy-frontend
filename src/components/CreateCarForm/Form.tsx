import { useState, useReducer, useEffect } from "react"
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
import Context from "./formContext"
import { ContextState } from "./formContext"
type Props = {}

type State = {
  car: string
}

const initialState = {
  car: "BMW",
  model: "5 series 540i",
  colorImage: "",
  wheel: [],
  photosCars: [],
  interior: [],
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

    case "IMAGE_TRIMS_INTERIOR":
      return {
        ...state,
        imageTrimsInterior: action.payload,
      }
  }
}

const Form = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [photos, setPhotos] = useState<any>([])
  const [upHolsteryPhotos, setUpHolsteryPhotos] = useState<any>({})
  const [interior, setInterior] = useState<any>([])
  const [trimInterior, setTrimInterior] = useState<any>([])
  // const [uploadedImage, setUploadedImage] = useState<any[]>([])
  const [dynamicAddWheel, setDynamicAddWheel] = useState<any>([])

  const carName = (car: string) => {
    dispatch({ type: "CAR", payload: car })
  }

  const carModel = (model: string) => {
    dispatch({ type: "MODEL", payload: model })
  }

  const carPhotoImage = (carPhotoImageFile: string) => {
    dispatch({ type: "CAR_PHOTO_IMAGE", payload: carPhotoImageFile })
  }

  const carWheel = (wheel: any, photosCar: any) => {
    const obj = {
      imageWheel: wheel,
      photoss: photosCar,
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
    setUpHolsteryPhotos((prev: any) => ({
      ...prev,
      imageUpHolstery: upholstery,
    }))
    dispatch({ type: "IMAGE_UPHOLSTERY", payload: upholstery })
  }

  const carImageUpHolsteryInterior = (upholstery: any) => {
    setUpHolsteryPhotos((prev: any) => ({
      ...prev,
      imageUpHolsteryInterior: upholstery,
    }))
    dispatch({ type: "IMAGE_UPHOLSTERY_INTERIOR", payload: upholstery })
  }

  const carImageTrims = (trimsImage: any, trimsInterior: any) => {
    const obj = {
      imageTrims: trimsImage,
      imageTrimsInterior: trimsInterior,
    }
    // setInterior(obj)
    dispatch({ type: "IMAGE_TRIMS", payload: obj })
  }

  const carImageTrimsInterior = (imageTrimsInterior: any) => {
    dispatch({ type: "IMAGE_TRIMS_INTERIOR", payload: imageTrimsInterior })
  }

  const trimInteriorFunc = () => {
    const obj = { ...state.imageTrims }
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

  useEffect(() => {
    state.wheel = photos
    state.interior = trimInterior
  }, [photos, trimInterior])

  const AppContext: ContextState = {
    setInterior,
    interiorCar,
    setTrimInterior,
    trimInteriorFunc,
    interior,
  }

  console.log(state)
  // console.log(photos)
  // console.log(trimInterior)
  // console.log(interior)

  return (
    <>
      <Context.Provider value={AppContext}>
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
      </Context.Provider>
    </>
  )
}

export default Form
