import { useState, useEffect } from "react"
import Context, { ContextState } from "./formContext"
import MainForm from "./MainForm"

type Props = {}

const Form = (props: Props) => {
  // car
  const [cars, setCars] = useState<any>({
    id: 1,
    color: "",
    wheel: [],
    interior: [],
    options: [],
  })
  const [carsList, setCarsList] = useState<any>([cars])
  // exterior
  const [wheel, setWheel] = useState<any>([])
  // interior
  const [upHolsteryPhotos, setUpHolsteryPhotos] = useState<any>({})
  const [imageTrimsObject, setImageTrimsObject] = useState<any>([])
  const [interior, setInterior] = useState<any>([])
  const [trimInterior, setTrimInterior] = useState<any>([
    {
      imageUpholstery: "",
      imageUpholsteryInterior: "",
      trims: [
        {
          imageTrims: "",
          imageTrimsInterior: "",
        },
      ],
    },
  ])
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
  }

  const carModel = (model: string) => {
    setCars((prev: any) => ({
      ...prev,
      model: model,
    }))
  }

  const carColorImage = (carPhotoImageFile: string) => {
    setCars((prev: any) => ({
      ...prev,
      color: carPhotoImageFile,
    }))
  }

  const carWheel = (wheel: any, photosCar: any) => {
    const obj = {
      imageWheel: wheel,
      photos: photosCar,
    }
    setWheel((prev: any) => [...prev, obj])
  }

  const carImageUpHolstery = (upholstery: any) => {
    setUpHolsteryPhotos((prev: any) => ({
      ...prev,
      imageUpHolstery: upholstery,
    }))
  }

  const carImageUpHolsteryInterior = (upholstery: any) => {
    setUpHolsteryPhotos((prev: any) => ({
      ...prev,
      imageUpHolsteryInterior: upholstery,
    }))
  }

  const carImageTrims = (trimsImage: any, trimsInterior: any) => {
    const obj = {
      imageTrims: trimsImage,
      imageTrimsInterior: trimsInterior,
    }
    setImageTrimsObject(obj)
  }

  const trimInteriorFunc = () => {
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
    setCars((prev: any) => ({
      ...prev,
      wheel: wheel ? wheel : [],
      interior: trimInterior,
      options: optionsObject ? optionsObject : [],
    }))
  }, [wheel, trimInterior, categoryOptions, optionList, optionsObject])

  useEffect(() => {
    setCarsList([cars])
  }, [cars])

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
    saveOptionObject,
    cars,
    carsList,
    carImageTrims,
    setLinkState,
    linkState,
  }

  return (
    <>
      <Context.Provider value={AppContext}>
        <MainForm />
      </Context.Provider>
    </>
  )
}

export default Form
