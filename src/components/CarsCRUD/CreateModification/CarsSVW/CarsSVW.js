import { useState } from "react"

const CarsSVW = ({ modification, setModification }) => {
  const [handleSee, setHandleSee] = useState(false)

  const handleDimentions = (e, key) => {
    const value = e.target.value

    setModification({
      ...modification,
      carSpaceVolumeWeights: {
        ...modification.carSpaceVolumeWeights,
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
          value={modification.carSpaceVolumeWeights.key}
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
        Space Volume Weights
      </h3>
      <div className={handleSee ? "create-car-visible" : "create-car-hidden"}>
        {Object.keys(modification?.carSpaceVolumeWeights).map((key, index) =>
          divCreator(key, index)
        )}
      </div>
    </>
  )
}

export default CarsSVW
