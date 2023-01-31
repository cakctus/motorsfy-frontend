import { useState } from "react"

const CarsGeneration = ({
  modification,
  setSkipModel,
  setSkipGeneration,
  setModification,
}) => {
  const [handleSee, setHandleSee] = useState(false)
  const arrayKeys = [
    "name",
    "startProd",
    "endProd",
    "powertrainArchitecture",
    "bodyType",
    "seats",
    "doors",
  ]

  const handleModification = (e) => {
    setSkipModel(false)
    setSkipGeneration(false)
    const name = e.target.name
    const value = e.target.value
    const files = e.target.files
    const type = e.target.type

    setModification({
      ...modification,
      [name]: type === "file" ? files[0] : value,
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
          value={modification.key}
          placeholder={key}
          onChange={handleModification}
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
        Modification
      </h3>
      <div className={handleSee ? "create-car-visible" : "create-car-hidden"}>
        {Object.keys(modification)
          .filter((item) => arrayKeys.includes(item))
          .map((key, index) => divCreator(key, index))}
      </div>
    </>
  )
}

export default CarsGeneration
