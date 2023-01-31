import React, { useState, useEffect } from "react"
import CarsMEE from "./CarsMEE"

const CarsMEEList = ({
  engineList,
  setEngineList,
  modification,
  setModification,
}) => {
  const [list, setList] = useState([[]])

  const handleList = () => {
    setList((prev) => [...prev, []])
  }

  useEffect(() => {
    setModification({
      ...modification,
      carsModificationElectricEngine: engineList,
    })
  }, [engineList.length])

  return (
    <>
      <div>
        {list.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <CarsMEE
                modification={modification}
                setModification={setModification}
                engineList={engineList}
                setEngineList={setEngineList}
                index={index}
              />
            </React.Fragment>
          )
        })}
      </div>
      <div>
        <button onClick={handleList}>Add Electric Engine</button>
      </div>
    </>
  )
}

export default CarsMEEList
