import { useState } from "react"

const CarsDBS = ({ modification, setModification }) => {
  const [handleSee, setHandleSee] = useState(false)

  const handleDimentions = (e, key) => {
    const value = e.target.value

    setModification({
      ...modification,
      cars_drivetrainbrakessuspension: {
        ...modification.cars_drivetrainbrakessuspension,
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
          value={modification.cars_drivetrainbrakessuspension.key}
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
      <h3 className="create-car-title" onClick={handleSeeClick}>
        Drivetrain Brakes Suspension
      </h3>
      <div className={handleSee ? "create-car-visible" : "create-car-hidden"}>
        {Object.keys(modification?.cars_drivetrainbrakessuspension).map(
          (key, index) => divCreator(key, index)
        )}
      </div>
    </>
  )
}

export default CarsDBS
