import React, { useState, useContext, useEffect } from "react"
import CreateCarWheelForm from "./CreateCarWheelForm/CreateCarWheelForm"
import Context from "../formContext"
import "./style.scss"

const ExteriorForm = () => {
  const context = useContext(Context)
  const [dynamicAddWheel, setDynamicAddWheel] = useState([[]])

  useEffect(() => {
    setDynamicAddWheel(() => {
      if (!context?.clearState) {
        return [[]]
      }
    })
  }, [!context?.clearState])

  return (
    <>
      {dynamicAddWheel?.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <CreateCarWheelForm
              dynamicAddWheel={dynamicAddWheel}
              setDynamicAddWheel={setDynamicAddWheel}
            />
          </React.Fragment>
        )
      })}
    </>
  )
}

export default ExteriorForm
