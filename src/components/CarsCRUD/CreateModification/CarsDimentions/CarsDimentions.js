import { useState } from "react"

const CarsDimintions = ({ modification, setModification }) => {
  const [handleSee, setHandleSee] = useState(false)

  const handleDimentions = (e, key) => {
    const value = e.target.value

    setModification({
      ...modification,
      carsDimentions: {
        ...modification.carsDimentions,
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
          value={modification.carsDimentions.key}
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
        Dimentions
      </h3>
      <div className={handleSee ? "create-car-visible" : "create-car-hidden"}>
        {Object.keys(modification?.carsDimentions).map((key, index) =>
          divCreator(key, index)
        )}
      </div>
    </>
  )
}

export default CarsDimintions
