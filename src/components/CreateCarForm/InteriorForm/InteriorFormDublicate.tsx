import React, { useState, useContext, useEffect } from "react"
import Context from "../formContext"
import ImageTrimsForm from "./ImageTrimsForm/ImageTrimsForm"
import ImageTrimsInteriorForm from "./ImageTrimsForm/ImageTrimsInteriorForm"

type Props = {}

const InteriorFormDublicate = (props: Props) => {
  const appContext = useContext(Context)
  const [val, setVal] = useState<any>([[]])
  const [imageTrims, setImageTrims] = useState<any>()
  const [imageTrimsInterior, setImageTrimsInterior] = useState<any>()

  const handleVal = () => {
    const value = [...val, []]
    setVal(value)
  }

  useEffect(() => {
    appContext?.carImageTrims(imageTrims, imageTrimsInterior)
  }, [imageTrims, imageTrimsInterior])

  const saveAndAdd = () => {
    handleVal()
    appContext?.trimInteriorFunc()
  }

  return (
    <>
      {val.map((item: any, index: any) => {
        return (
          <>
            <ImageTrimsForm
              // carImageTrims={appContext?.carImageTrims}
              setImageTrims={setImageTrims}
            />
            <ImageTrimsInteriorForm
              // carImageTrimsInterior={carImageTrimsInterior}
              setImageTrimsInterior={setImageTrimsInterior}
              saveAndAdd={saveAndAdd}
            />
          </>
        )
      })}
      <br />
      <br />
      <button onClick={appContext?.interiorCar}>save</button>
    </>
  )
}

export default InteriorFormDublicate
