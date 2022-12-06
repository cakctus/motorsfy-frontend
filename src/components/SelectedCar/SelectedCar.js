import { useState, useEffect } from "react"
import { cars } from "../../data/cars"
import { useSelector } from "react-redux"

const SelectedCar = () => {
  const car = useSelector((state) => state.selectedCar)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [getItems, setGetItems] = useState([])

  useEffect(() => {
    setSelectedOptions(() =>
      cars[car.carColor].options.map((item) => {
        return item.optionList.map((subitem) => {
          return subitem
        })
      })
    )

    setGetItems(() => {
      return selectedOptions.reduce(function (flat, toFlatten) {
        return flat.concat(toFlatten)
      }, [])
    })
  }, [car.optionItemId])

  return (
    <>
      <h2>Selected Car</h2>
      <div className="imgContainer" id="imgContainer">
        <img
          className="imageId"
          src={cars[car.carColor].wheel[car.carWheel].photos[4]}
          alt=""
        />
      </div>
      <h2>Selected Color</h2>
      <div className="imgContainer" id="imgContainer">
        <img className="imageId" src={cars[car.carColor].color} alt="" />
      </div>
      <h2>Selected Wheel</h2>
      <div className="imgContainer" id="imgContainer">
        <img
          className="imageId"
          src={cars[car.carColor].wheel[car.carWheel].imageWheel}
          alt=""
        />
      </div>
      <h2>Selected upholstery</h2>
      <div className="imgContainer" id="imgContainer">
        <img
          className="imageId"
          src={cars[car.carColor].interior[car.interiorId].imageUpholstery}
          alt=""
        />
      </div>
      <h2>Selected trim</h2>
      <div className="imgContainer" id="imgContainer">
        <img
          className="imageId"
          src={
            cars[car.carColor].interior[car.interiorId].trims[car.imageTrims]
              .imageTrims
          }
          alt=""
        />
      </div>
      <h2>Options</h2>
      <div className="imgContainer" id="imgContainer">
        {car.optionItemId.map((item, index) => {
          return (
            <div className="options-item" key={index}>
              <img src={item.image} className="options-img" alt="" />
              <p className="options-title">{item.title}</p>
              <p className="options-price">{item.price}</p>
              <p className="options-description">{item.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SelectedCar
