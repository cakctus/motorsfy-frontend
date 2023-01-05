import { useState, useContext } from "react"
import Context from "../formContext"
import "../../../style.scss"

const Build = () => {
  const context = useContext(Context)
  const [urls, setUrls] = useState()
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

  const clickHandler = (e) => {
    if (e.deltaY > 0) {
      setUrlsId(urlsId - 1)
    }

    if (e.deltaY < 0) {
      setUrlsId(urlsId + 1)
    }

    setUrlsId((prev) => {
      if (
        prev >=
        context?.carsList[carsListId]?.wheel[carsWheelsId]?.photos?.length
      ) {
        return 1
      }
      return prev + 1
    })

    setUrlsId((prev) => {
      if (prev <= 0) {
        return (
          context?.carsList[carsListId]?.wheel[carsWheelsId]?.photos.length - 1
        )
      }
      return prev - 1
    })
  }

  const handleCarId = (index) => {
    setCarsListId(index)
    setCarsWheelsId(0)
  }

  const handleUpHostery = (index) => {
    setToggleInteriorPhoto(true)
    setUpHolsteryId(index)
    // setTrimsId(0)
  }

  const handleTrimId = (index) => {
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

  const handleOptionsId = (id, category) => {
    setOptionsTypeToggle({
      index: id,
      category: category,
    })
  }

  return (
    <>
      <div className="container">
        <div
          className="categories-list"
          onClick={(e) => setTogleType(e.target.textContent)}
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
            {context?.carsList.map((item, index) => {
              return (
                <div
                  className="imageColorItem"
                  key={index}
                  onClick={() => handleCarId(index)}
                >
                  <img src={item.color} alt="" />
                </div>
              )
            })}
          </div>

          {/* wheels */}
          <div className="imageWheelsContainer">
            {context?.carsList[carsListId]?.wheel?.map((item, index) => {
              return (
                <div
                  className="imageWheelItem"
                  key={index}
                  onClick={() => setCarsWheelsId(index)}
                >
                  <img src={item.imageWheel} alt="" />
                </div>
              )
            })}
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
                  context?.carsList[carsListId]?.interior[upHolsteryId]
                    ?.imageUpHolsteryInterior
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
                  context?.carsList[carsListId]?.interior[upHolsteryId]
                    ?.trims !== undefined
                    ? context?.carsList[carsListId]?.interior[upHolsteryId]
                        ?.trims[trimsId]?.imageTrimsInterior
                    : ""
                }
                alt=""
                style={divStyle}
              />
            </div>
          )}

          {/* interior upholstery */}
          <div className="interior-upHolstery">
            {context?.carsList[carsListId]?.interior.map((item, index) => {
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
            })}
          </div>

          {/* interior trims */}
          <div className="interior-trims">
            {context?.carsList[carsListId]?.interior[upHolsteryId]?.trims !==
            undefined
              ? context?.carsList[carsListId]?.interior[
                  upHolsteryId
                ]?.trims.map((item, index) => {
                  return (
                    <div
                      className="interiorTrimsImages"
                      onClick={() => handleTrimId(index)}
                      key={index}
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

        <div
          className="options-container"
          style={{
            display: togleType === "Options" ? "block" : "none",
          }}
        >
          <div className="options-category-list">
            <div
              className="options-category"
              onClick={(e) => handleOptionsId(0, e.target.textContent)}
            >
              All
            </div>
            {context?.carsList[carsListId]?.options?.map((item, index) => {
              return (
                <div
                  className="options-category"
                  key={index}
                  onClick={(e) => handleOptionsId(index, e.target.textContent)}
                >
                  {item.category}
                </div>
              )
            })}
          </div>

          <div className="options-items">
            {optionsTypeToggle.category === "All"
              ? context?.carsList[carsListId]?.options?.map((item) => {
                  return item.optionList.map((item, index) => {
                    return (
                      <div className="options-item" key={index}>
                        <img src={item.image} className="options-img" alt="" />
                        <p className="options-title">{item.title}</p>
                        <p className="options-price">{item.price}</p>
                        <p className="options-description">
                          {item.description}
                        </p>
                      </div>
                    )
                  })
                })
              : context?.carsList[carsListId]?.options
                  .filter(
                    (item) => item.category === optionsTypeToggle.category
                  )[0]
                  .optionList?.map((item, index) => {
                    return (
                      <div className="options-item" key={index}>
                        <img src={item.image} className="options-img" alt="" />
                        <p className="options-title">{item.title}</p>
                        <p className="options-price">{item.price}</p>
                        <p className="options-description">
                          {item.description}
                        </p>
                      </div>
                    )
                  })}
            {/* {urls[carsListId].options
              .filter(
                (item: any) => item.category === optionsTypeToggle.category
              )[0]
              .optionList.map((item: any, index: any) => {
                return (
                  <div className="options-item" key={index}>
                    <img src={item.image} className="options-img" alt="" />
                    <p className="options-title">{item.title}</p>
                    <p className="options-price">{item.price}</p>
                    <p className="options-description">{item.description}</p>
                  </div>
                )
              })} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Build
