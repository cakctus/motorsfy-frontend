import { useState, useEffect, useContext } from "react"
import Context from "./formContext"
import "../../style.scss"
import { cars } from "../../data/cars"
import context from "react-bootstrap/esm/AccordionContext"

type Props = {}

const Build = (props: Props) => {
  const context = useContext(Context)
  const [urls, setUrls] = useState<any>()
  const [urlsId, setUrlsId] = useState(0)
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
      if (
        prev >= context?.carsList[carsListId].wheel[carsWheelsId].photos.length
      ) {
        return 1
      }
      return prev + 1
    })

    setUrlsId((prev) => {
      if (prev <= 0) {
        return (
          context?.carsList[carsListId].wheel[carsWheelsId].photos.length - 1
        )
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

  const divStyle = {
    opacity: carsListId === carsListId ? "1" : "0",
    transition: "opacity 2s ease",
  }

  // console.log(urls[carsListId].interior[0].items[0])

  const togleContainer = {
    display: togleType === "Exterior" ? "block" : "none",
  }

  const handleOptionsId = (id: any, category: any) => {
    setOptionsTypeToggle({
      index: id,
      category: category,
    })
  }

  console.log(context?.carsList)
  return (
    <>
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

        <div
          className="exterior-container"
          style={{
            display: togleType === "Exterior" ? "block" : "none",
          }}
        >
          <div
            className="imgContainer"
            id="imgContainer"
            onWheel={clickHandler}
            style={divStyle}
          >
            <img
              className="imageId"
              src={
                context?.carsList[carsListId]?.wheel[carsWheelsId]?.photos[
                  urlsId
                ]?.img
              }
              alt=""
              style={divStyle}
            />
          </div>

          {/* car images */}
          <div className="imageColorContainer">
            {context?.carsList.map((item: any, index: any) => {
              return (
                <>
                  <div
                    className="imageColorItem"
                    key={item.id}
                    onClick={() => handleCarId(index)}
                  >
                    <img src={item.color} alt="" />
                  </div>
                </>
              )
            })}
          </div>

          {/* wheels */}
          <div className="imageWheelsContainer">
            {context?.carsList[carsListId]?.wheel?.map(
              (item: any, index: any) => {
                return (
                  <div
                    className="imageWheelItem"
                    key={index}
                    onClick={() => setCarsWheelsId(index)}
                  >
                    <img src={item.imageWheel} alt="" />
                  </div>
                )
              }
            )}
          </div>
        </div>

        <div
          className="interior-container"
          style={{
            display: togleType === "Interior" ? "block" : "none",
          }}
        >
          {toggleInteriorPhoto ? (
            <div
              className="imgContainer"
              id="imgContainer"
              onWheel={clickHandler}
              style={divStyle}
            >
              <img
                className="imageId"
                src={
                  context?.carsList[carsListId].interior[upHolsteryId]
                    .imageUpHolsteryInterior
                }
                alt=""
                style={divStyle}
              />
            </div>
          ) : (
            <div className="imgContainer" id="imgContainer" style={divStyle}>
              <img
                className="imageId"
                src={
                  context?.carsList[carsListId].interior[upHolsteryId].trims !==
                  undefined
                    ? context?.carsList[carsListId].interior[upHolsteryId]
                        .trims[trimsId].imageTrimsInterior
                    : ""
                }
                alt=""
                style={divStyle}
              />
            </div>
          )}

          {/* interior upholstery */}
          <div className="interior-upHolstery">
            {context?.carsList[carsListId].interior.map(
              (item: any, index: any) => {
                return (
                  <div
                    className="interiorUpholsteryImages"
                    key={index}
                    onClick={() => handleUpHostery(index)}
                  >
                    <img
                      className="interiorUpholsteryImg"
                      src={item.imageUpHolstery}
                      alt=""
                    />
                  </div>
                )
              }
            )}
          </div>

          {/* interior trims */}
          <div className="interior-trims">
            {context?.carsList[carsListId].interior[upHolsteryId].trims !==
            undefined
              ? context?.carsList[carsListId]?.interior[
                  upHolsteryId
                ]?.trims.map((item: any, index: any) => {
                  return (
                    <div
                      className="interiorTrimsImages"
                      onClick={() => handleTrimId(index)}
                    >
                      <img
                        className="interiorTrimsImg"
                        src={item.imageTrims}
                        alt=""
                      />
                    </div>
                  )
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  )
}

export default Build
