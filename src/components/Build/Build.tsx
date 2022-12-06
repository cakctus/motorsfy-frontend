import { useState } from "react"
import Exterior from "./Exterior/Exterior"
import Interior from "./Interior/Interior"
import Options from "./Options/Options"
import Context from "./buildContext"
import "../../style.scss"
import { cars } from "../../data/cars"

type Props = {}

const Build = (props: Props) => {
  const [urls, setUrls] = useState(cars)
  const [urlsId, setUrlsId] = useState(4)
  const [carsListId, setCarsListId] = useState(0)
  const [carsWheelsId, setCarsWheelsId] = useState(0)

  const [upHolsteryId, setUpHolsteryId] = useState(0)
  const [trimsId, setTrimsId] = useState(0)
  const [toggleInteriorPhoto, setToggleInteriorPhoto] = useState(true)

  const [togleType, setTogleType] = useState("Exterior")

  const [optionsTypeToggle, setOptionsTypeToggle] = useState({
    index: 0,
    category: "All",
  })

  const clickHandler = (e: any) => {
    if (e.deltaY > 0) {
      setUrlsId(urlsId - 1)
    }

    if (e.deltaY < 0) {
      setUrlsId(urlsId + 1)
    }

    setUrlsId((prev) => {
      if (prev >= urls[carsListId].wheel[carsWheelsId].photos.length) {
        return 1
      }
      return prev + 1
    })

    setUrlsId((prev) => {
      if (prev <= 0) {
        return urls[carsListId].wheel[carsWheelsId].photos.length - 1
      }
      return prev - 1
    })
  }

  const handleCarId = (index: any) => {
    setCarsListId(index)
    setCarsWheelsId(0)
  }

  const handleUpHostery = (index: any) => {
    setToggleInteriorPhoto(true)
    setUpHolsteryId(index)
    // setTrimsId(0)
  }

  const handleTrimId = (index: any) => {
    setToggleInteriorPhoto(false)
    // setUpHolsteryId(0)
    setTrimsId(index)
  }

  const handleOptionsId = (id: any, category: any) => {
    setOptionsTypeToggle({
      index: id,
      category: category,
    })
  }

  const AppContext = {
    urls,
    togleType,
    carsListId,
    carsWheelsId,
    urlsId,
    clickHandler,
    handleCarId,
    handleUpHostery,
    handleTrimId,
    handleOptionsId,
    upHolsteryId,
    trimsId,
    setCarsWheelsId,
    optionsTypeToggle,
  }

  return (
    <>
      <Context.Provider value={AppContext}>
        <div className="container">
          <div
            className="categories-list"
            onClick={(e: any) => setTogleType(e.target.textContent)}
          >
            <div className="categories-exterior">
              <p>Exterior</p>
            </div>
            <div className="categories-interior">
              <p>Interior</p>
            </div>
            <div className="categories-options">
              <p>Options</p>
            </div>
          </div>
          <Exterior />
          <Interior />
          <Options />
        </div>
      </Context.Provider>
    </>
  )
}

export default Build
