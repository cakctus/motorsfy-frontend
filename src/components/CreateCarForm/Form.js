import { useState, useEffect } from "react"
import Context from "./formContext"
import MainForm from "./MainForm"
import { useSelector } from "react-redux"

const Form = () => {
  // car
  const [cars, setCars] = useState({
    color: "",
    wheel: [],
    interior: [],
    options: [],
  })
  const [carsList, setCarsList] = useState([cars])
  // exterior
  const [wheel, setWheel] = useState([])
  // interior
  const [upHolsteryPhotos, setUpHolsteryPhotos] = useState({})
  const [imageTrimsObject, setImageTrimsObject] = useState([])
  const [interior, setInterior] = useState([])
  const [trimInterior, setTrimInterior] = useState([
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
  const optionsObject1 = useSelector((state) => state.saveOptions)
  const [categoryOptions, setCategoryOptions] = useState()
  const [optionList, setOptionList] = useState([])
  const [optionsObject, setObjectsObject] = useState([])

  const [linkState, setLinkState] = useState("Info")

  const [clearState, setClearState] = useState(false)

  const carName = (car) => {
    setCars((prev) => ({
      ...prev,
      car: car,
    }))
  }

  const carModel = (model) => {
    setCars((prev) => ({
      ...prev,
      model: model,
    }))
  }

  const carColorImage = (carPhotoImageFile) => {
    setCars((prev) => ({
      ...prev,
      color: carPhotoImageFile,
    }))
  }

  const carWheel = (wheel, photosCar) => {
    const obj = {
      imageWheel: wheel,
      photos: photosCar,
    }
    setWheel((prev) => [...prev, obj])
  }

  const carImageUpHolstery = (upholstery) => {
    setUpHolsteryPhotos((prev) => ({
      ...prev,
      imageUpHolstery: upholstery,
    }))
  }

  const carImageUpHolsteryInterior = (upholstery) => {
    setUpHolsteryPhotos((prev) => ({
      ...prev,
      imageUpHolsteryInterior: upholstery,
    }))
  }

  const carImageTrims = (trimsImage, trimsInterior) => {
    const obj = {
      imageTrims: trimsImage,
      imageTrimsInterior: trimsInterior,
    }
    setImageTrimsObject(obj)
  }

  const trimInteriorFunc = () => {
    const obj = { ...imageTrimsObject }
    setInterior((prev) => [...prev, obj])
  }

  const interiorCar = () => {
    const obj = {
      imageUpHolstery: upHolsteryPhotos.imageUpHolstery,
      imageUpHolsteryInterior: upHolsteryPhotos.imageUpHolsteryInterior,
      trims: [...interior],
    }
    setTrimInterior((prev) => [...prev, obj])
    setInterior([])
  }

  const optionsListArray = (obj) => {
    const o = { ...obj }
    setOptionList((prev) => [...prev, o])
  }

  const saveOptionObject = () => {
    const option = {
      category: categoryOptions,
      optionList: optionList,
    }
    setObjectsObject((prev) => [...prev, option])
  }

  useEffect(() => {
    setCars((prev) => ({
      ...prev,
      wheel: wheel ? wheel : [],
      interior: trimInterior,
      // options: optionsObject1 ? optionsObject1 : [],
    }))
  }, [wheel, trimInterior, categoryOptions, optionList, optionsObject1])

  useEffect(() => {
    setCarsList(
      carsList.map((car) => ({
        ...car,
        ["options"]: optionsObject1 ? optionsObject1 : [],
      }))
    )
  }, [wheel, trimInterior, optionsObject1])

  useEffect(() => {
    setClearState(() => {
      if (clearState) {
        return false
      }
      return false
    })
  }, [clearState])

  // useEffect(() => {
  //   setCarsList([cars])
  // }, [cars])

  const saveForm = (e) => {
    e.preventDefault()
  }

  const saveAndAddAnotherColor = () => {
    setCarsList(
      (prevState) => [...prevState, cars].filter((item) => item.color !== "") // todo => item.id === 1
    )
    setCars({})
    setWheel([])
    setTrimInterior([
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

    // setClearState(true)
    // saveForm()
  }

  const resetForm = (e) => {
    e.target.reset()
    // saveAndAddAnotherColor()
    setClearState(true)
  }

  const AppContext = {
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
    saveAndAddAnotherColor,
    saveForm,
    resetForm,
    clearState,
    setClearState,
  }

  // console.log(cars)
  // console.log(carsList)
  // console.log(categoryOptions)
  // console.log(optionList)
  // console.log(optionsObject)

  return (
    <>
      <Context.Provider value={AppContext}>
        <MainForm />
      </Context.Provider>
    </>
  )
}

export default Form
