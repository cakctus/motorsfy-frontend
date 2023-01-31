import { useState } from "react"

const CarsMEE = ({
  modification,
  setModification,
  engineList,
  setEngineList,
  index,
}) => {
  const [handleSee, setHandleSee] = useState(false)
  const [engine, setEngine] = useState({
    power: "",
    torque: "",
    location: "",
    system_power: "",
    system_torque: "",
  })

  const handleDimentions = (e, key) => {
    const value = e.target.value
    const name = e.target.name

    setEngine({
      ...engine,
      [name]: value,
    })
  }

  const saveEngine = () => {
    setEngineList((prev) => [...prev, engine])
  }

  // console.log(engine)
  // console.log(engineList)

  const divCreator = (key, index) => {
    return (
      <>
        <div key={index}>
          <label htmlFor={key}>{key}</label>
          <input
            type="text"
            id={key}
            name={key}
            value={engine.key}
            placeholder={key}
            onChange={(e) => handleDimentions(e, key)}
          />
        </div>
      </>
    )
  }

  const handleSeeClick = () => {
    setHandleSee((prev) => !prev)
  }

  return (
    <>
      <h3 onClick={handleSeeClick} className="create-car-title">
        Electric Engines
      </h3>
      <div className={handleSee ? "create-car-visible" : "create-car-hidden"}>
        {Object.keys(engine).map((key, index) => divCreator(key, index))}
        <div>
          <button onClick={saveEngine}>Save</button>
        </div>
      </div>
    </>
  )
}

export default CarsMEE
