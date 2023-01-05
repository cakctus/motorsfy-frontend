import { useContext, useCallback } from "react"
import Context from "../buildContext"
import {
  changeCarColor,
  changeCarWheel,
} from "../../../features/selectedCar/selectedCarSlice"
import { useDispatch } from "react-redux"

const Exterior = () => {
  const {
    togleType,
    clickHandler,
    urls,
    carsListId,
    carsWheelsId,
    urlsId,
    handleCarId,
    setCarsWheelsId,
  } = useContext(Context)
  const dispatch = useDispatch()

  const handleCar = (index) => {
    handleCarId(index)
    dispatch(changeCarColor(index))
  }

  const handleWheel = (index) => {
    setCarsWheelsId(index)
    dispatch(changeCarWheel(index))
  }

  return (
    <div
      className="exterior-container"
      style={{
        display: togleType === "Exterior" ? "block" : "none",
      }}
    >
      <div className="imgContainer" id="imgContainer" onWheel={clickHandler}>
        <img
          className="imageId"
          src={urls[carsListId].wheel[carsWheelsId].photos[urlsId]}
          alt=""
        />
      </div>

      {/* car images */}
      <div className="imageColorContainer">
        {urls.map((item, index) => {
          return (
            <div
              className="imageColorItem"
              key={item.id}
              onClick={() => handleCar(index)}
            >
              <img src={item.color} alt="" />
            </div>
          )
        })}
      </div>

      {/* wheels */}
      <div className="imageWheelsContainer">
        {urls[carsListId].wheel.map((item, index) => {
          return (
            <div
              className="imageWheelItem"
              key={index}
              onClick={() => handleWheel(index)}
            >
              <img src={item.imageWheel} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Exterior
