import React, { useState, useContext, useEffect } from "react"
import Context from "../formContext"
import ImageTrimsForm from "./ImageTrimsForm/ImageTrimsForm"
import ImageTrimsInteriorForm from "./ImageTrimsForm/ImageTrimsInteriorForm"

type Props = {
  carImageTrims: any
  carImageTrimsInterior: any
}

const InteriorFormDublicate = ({
  carImageTrims,
  carImageTrimsInterior,
}: Props) => {
  const appContext = useContext(Context)
  const [val, setVal] = useState<any>([])
  const [imageTrims, setImageTrims] = useState<any>()
  const [imageTrimsInterior, setImageTrimsInterior] = useState<any>()

  const handleVal = () => {
    const value = [...val, []]
    setVal(value)
  }

  useEffect(() => {
    carImageTrims(imageTrims, imageTrimsInterior)
  }, [imageTrims, imageTrimsInterior])

  return (
    <>
      <button onClick={() => handleVal()}>add trim</button>
      {val.map((item: any, index: any) => {
        return (
          <>
            <ImageTrimsForm
              carImageTrims={carImageTrims}
              setImageTrims={setImageTrims}
            />
            <ImageTrimsInteriorForm
              carImageTrimsInterior={carImageTrimsInterior}
              setImageTrimsInterior={setImageTrimsInterior}
            />
            <button onClick={() => appContext?.trimInteriorFunc()}>done</button>
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
