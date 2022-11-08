import { useState, useEffect, useRef } from "react"
import "./style.scss"

import styled from "styled-components"

import { cars } from "./data/cars"

function App() {
  const [urls, setUrls] = useState(cars)
  const [urlsId, setUrlsId] = useState(4)
  const [carsListId, setCarsListId] = useState(0)
  const [carsWheelsId, setCarsWheelsId] = useState(0)
  // const [mousePosition, onMousePosition] =
  //   useState<React.Dispatch<React.SetStateAction<number>>>()
  const [clickPosition, setClickPosition] = useState(0)
  const [mousePosition, onMousePosition] = useState(0)
  const [prevMousePosition, setPrevMousePosition] = useState(0)
  const [maxPosition, setMaxPosition] = useState(100)
  const refContainer = useRef<HTMLImageElement | null>(null)

  // useEffect(() => {
  //   setPrevMousePosition(prevMousePosition + 5)

  //   setPrevMousePosition((prev) => {
  //     if (prev >= maxPosition) {
  //       setPrevMousePosition(0)
  //     }
  //     return prev
  //   })

  //   setClickPosition(clickPosition + 1)

  //   if (prevMousePosition >= 95) {
  //     setUrlsId(urlsId + 1)
  //   }

  //   // const moveRight = () => {
  //   setUrlsId((prev) => {
  //     if (prev >= cars[0].photos.length - 1) {
  //       return 1
  //     }
  //     return prev + 1
  //   })
  //   // }

  //   // const moveLeft = () => {
  //   setUrlsId((prev) => {
  //     if (prev <= 0) {
  //       return cars[0].photos.length - 1
  //     }
  //     return prev - 1
  //   })
  //   // }

  //   // setUrlsId((prev) => {
  //   //   if (prev >= cars.length - 1) {
  //   //     return 1
  //   //   }
  //   //   return prev + 1
  //   // })

  //   // setUrlsId((prev) => {
  //   //   if (prev <= 0) {
  //   //     return cars.length - 1
  //   //   }
  //   //   return prev - 1
  //   // })

  //   // setUrlsId((prev) => {
  //   //   if (prev >= urls.length) {
  //   //     setUrlsId(0)
  //   //   }
  //   //   if (prev <= 0) {
  //   //     setUrlsId(urls.length - 1)
  //   //   }
  //   //   return prev
  //   // })

  //   // if (urlsId >= urls.length) {
  //   //   setUrlsId(1)
  //   // }
  //   // if (urlsId <= 0) {
  //   //   setUrlsId(urls.length - 1)
  //   // }

  //   // if (prevMousePosition >= clickPosition) {
  //   //   setUrlsId(urlsId + 1)
  //   // }

  //   // console.log(clickPosition, prevMousePosition)
  // }, [mousePosition])

  const moveHandler = (e: any) => {
    onMousePosition(e.offsetX)
  }

  const clickHandler = (e: any) => {
    // setClickPosition(e.nativeEvent.offsetX)
    // refContainer.current?.addEventListener("mousemove", moveHandler)
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
    // const img = document.getElementById("imgContainer")
  }

  const upHandler = (e: any) => {
    if (e.type === "mouseup") {
      // img?.removeEventListener("mousemove", clickHandler)
    }
  }

  const moveRight = () => {
    setUrlsId((prev) => {
      if (prev >= urls[carsListId].wheel[carsWheelsId].photos.length) {
        return 1
      }
      return prev + 1
    })
  }

  const moveLeft = () => {
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

  return (
    <>
      <div className="container">
        <div
          className="imgContainer"
          ref={refContainer}
          id="imgContainer"
          onWheel={clickHandler}
          // onMouseUp={upHandler}
        >
          <img
            src={urls[carsListId].wheel[carsWheelsId].photos[urlsId]}
            alt=""
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

        {urls.map((item: any, index: any) => {
          if (item[index] === carsListId) {
            return (
              <div
                className="imgContainer"
                ref={refContainer}
                id="imgContainer"
              >
                <img
                  src={urls[carsListId].wheel[carsWheelsId].photos[urlsId]}
                  alt=""
                />
              </div>
            )
          }
        })}

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

        <div>
          <button onClick={moveRight}>right</button>
          <button onClick={moveLeft}>left</button>
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

export default App
