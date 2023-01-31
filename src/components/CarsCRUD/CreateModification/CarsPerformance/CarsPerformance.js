import { useState } from "react"

const CarsPerformance = ({ modification, setModification }) => {
  const [handleSee, setHandleSee] = useState(false)

  const handleDimentions = (e, key) => {
    const value = e.target.value

    setModification({
      ...modification,
      carsPerformance: {
        ...modification.carsPerformance,
        [key]: value,
      },
    })
  }

  const divCreator = (key, index) => {
    return (
      <div key={index}>
        <label htmlFor={key}>{key}</label>
        <input
          type="text"
          id={key}
          name={key}
          value={modification.carsPerformance.key}
          placeholder={key}
          onChange={(e) => handleDimentions(e, key)}
        />
      </div>
    )
  }

  const handleSeeClick = () => {
    setHandleSee((prev) => !prev)
  }

  return (
    <>
      <h3 onClick={handleSeeClick} className="create-car-title">
        Performance
      </h3>
      <div className={handleSee ? "create-car-visible" : "create-car-hidden"}>
        {Object.keys(modification?.carsPerformance).map((key, index) =>
          divCreator(key, index)
        )}
      </div>
    </>
  )
}

export default CarsPerformance
