import { useState } from "react"

const ModificationPhoto = ({ modification, setModification }) => {
  const [handleSee, setHandleSee] = useState(false)
  const arrayKeys = ["image"]

  const handleModification = (e) => {
    const name = e.target.name
    const files = e.target.files

    setModification({
      ...modification,
      [name]: files[0],
    })
  }

  const handleSeeClick = () => {
    setHandleSee((prev) => !prev)
  }

  const divCreator = (key, index) => {
    return (
      <div key={index}>
        <label htmlFor={key}>{key}</label>
        <input type="file" id={key} name={key} onChange={handleModification} />
      </div>
    )
  }

  return (
    <>
      <h3 onClick={handleSeeClick} className="create-car-title">
        Car Photo
      </h3>
      <div className={handleSee ? "create-car-visible" : "create-car-hidden"}>
        {Object.keys(modification)
          .filter((item) => arrayKeys.includes(item))
          .map((key, index) => divCreator(key, index))}
      </div>
    </>
  )
}

export default ModificationPhoto
