import { useState, useEffect } from "react"
import axios from "axios"

const CarsByUser = () => {
  const [cars, setCars] = useState([])

  const fetch = async () => {
    const response = await axios.get("http://localhost:5000/api/cars-list/4")
    const data = await response.data.cars
    // const obj = JSON.parse(data)
    setCars(data)
  }

  console.log(cars)

  useEffect(() => {
    fetch()
  }, [])
  return (
    <>
      <h3>your cars</h3>
      {cars.map((car, index) => {
        return <p key={index}>{JSON.parse(car.car)[index].model}</p>
      })}
    </>
  )
}

export default CarsByUser
