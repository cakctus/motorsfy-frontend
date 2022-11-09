import React, { useState, createRef } from "react"
import { createRoot } from "react-dom/client"
import { Container, ListGroup, Button } from "react-bootstrap"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import ReactCSSTransitionGroup from "react-transition-group"
import "./style.scss"
import "bootstrap/dist/css/bootstrap.min.css"

import { cars } from "./data/cars"

function App() {
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

  console.log(optionsTypeToggle.category)

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
              src={urls[carsListId].wheel[carsWheelsId].photos[urlsId]}
              alt=""
              style={divStyle}
            />
          </div>

          <div className="imageColorContainer">
            {urls.map((item: any, index: any) => {
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
            {urls[carsListId]?.wheel?.map((item: any, index: any) => {
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
                  urls[carsListId].interior[upHolsteryId]
                    .imageUpholsteryInterior
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
                  urls[carsListId].interior[upHolsteryId].trims !== undefined
                    ? urls[carsListId].interior[upHolsteryId].trims[trimsId]
                        .imageTrimsInterior
                    : ""
                }
                alt=""
                style={divStyle}
              />
            </div>
          )}

          <div className="interior-upHolstery">
            {urls[carsListId].interior.map((item: any, index: any) => {
              return (
                <div
                  className="interiorUpholsteryImages"
                  key={index}
                  onClick={() => handleUpHostery(index)}
                >
                  <img
                    className="interiorUpholsteryImg"
                    src={item.imageUpholstery}
                    alt=""
                  />
                </div>
              )
            })}
          </div>
          <div className="interior-trims">
            {urls[carsListId].interior[upHolsteryId].trims !== undefined
              ? urls[carsListId].interior[upHolsteryId].trims.map(
                  (item: any, index: any) => {
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
                  }
                )
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
              onClick={(e: any) => handleOptionsId(0, e.target.textContent)}
            >
              All
            </div>
            {urls[carsListId].options.map((item: any, index: any) => {
              return (
                <div
                  className="options-category"
                  key={index}
                  onClick={(e: any) =>
                    handleOptionsId(index, e.target.textContent)
                  }
                >
                  {item.category}
                </div>
              )
            })}
          </div>

          <div className="options-items">
            {optionsTypeToggle.category === "All"
              ? urls[carsListId].options.map((item: any) => {
                  return item.optionList.map((item: any, index: any) => {
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
              : urls[carsListId].options
                  .filter(
                    (item: any) => item.category === optionsTypeToggle.category
                  )[0]
                  .optionList.map((item: any, index: any) => {
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

// const Container = styled.div`
//   width: 1200px;
//   overflow: hidden;

//   margin: 1rem;

//   .imgContainer {
//     border: 1px solid black;
//     padding: 1rem;
//     transform: 2s;
//     img {
//       transform: 2s;
//       border: 1px solid black;
//       width: 550px;
//     }
//   }
// `

// {
//   urls[carsListId].interior[upHolsteryId].trims[trimsId]
//     .imageTrimsInterior
// }

export default App
