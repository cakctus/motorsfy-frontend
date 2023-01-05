import { memo } from "react"
import { useGetCarsByBodyQuery } from "../../../../redux/mainCategory"
import { useDispatch } from "react-redux"
import { getBodyType } from "../../../../features/getBodyCars/getBodySlice"

const ListBody = ({ setIsButtonDisable, setBodyType }) => {
  const object = {
    data: [
      "Roadster",
      "Cabriolet",
      "Hatchback",
      "Coupe",
      "Sedan",
      "Liftback",
      "SUV",
      "Targa",
      "Station wagon (estate)",
      "Crossover",
      "SUV, Crossover",
      "Coupe, SUV",
      "Off-road vehicle",
      "Fastback",
      "Station wagon (estate), Crossover",
      "Grand Tourer",
      "Pick-up",
      "MPV",
      "Minivan",
      "Quadricycle",
      "SAV",
      "SAC",
      "CUV",
      "Off-road vehicle, SUV",
      "Coupe - Cabriolet",
      "Minivan, MPV",
      "Station wagon (estate), MPV",
      "Crossover, Liftback",
      "Sedan, Fastback",
      "Coupe, Liftback",
      "Cabriolet, SUV",
      "Cabriolet, Coupe",
      "SUV, MPV",
      "Off-road vehicle, Cabriolet, SUV",
      "Hatchback, Crossover",
      "Coupe, Fastback",
      "Pick-up, SUV",
      "Off-road vehicle, Pick-up",
      "Coupe, Hatchback",
      "Off-road vehicle, Coupe",
      "Off-road vehicle, Cabriolet",
      "Coupe - Cabriolet, Roadster",
      "Cabriolet, Roadster",
      "Hatchback, Fastback",
      "Off-road vehicle, Station wagon (estate)",
      "Cabriolet, Hatchback",
      "Sedan, Crossover",
      "Coupe, Crossover",
      "Minivan, Crossover",
      "Minivan, Station wagon (estate)",
      "Coupe, CUV",
    ],
  }
  const { data, isLoading, isSuccess } = object
  const dispatch = useDispatch()

  // if (isLoading) {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }

  const handleOptions = (event) => {
    // setBodyType(event.target.value)
    dispatch(getBodyType(event.target.value))
    // setBodyType(event.target.value)
    setIsButtonDisable(true)
  }

  return (
    <div>
      <label htmlFor="cars">Body type</label>
      <select name="cars" id="cars" onChange={(event) => handleOptions(event)}>
        <option value="null" defaultValue>
          Select a body
        </option>
        <optgroup label="Top makes">
          {data
            .filter((item) => item !== null)
            .map((body, index) => {
              return (
                <option value={body} name={body} key={index}>
                  {body}
                </option>
              )
            })}
        </optgroup>
      </select>
    </div>
  )
}

export default memo(ListBody)
