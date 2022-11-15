import React, { useState } from "react"
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
  const [val, setVal] = useState<any>([])

  const handleVal = () => {
    const value = [...val, []]
    setVal(value)
  }
  return (
    <>
      <button onClick={() => handleVal()}>add trim</button>
      {val.map((item: any, index: any) => {
        return (
          <>
            <ImageTrimsForm carImageTrims={carImageTrims} />
            <ImageTrimsInteriorForm
              carImageTrimsInterior={carImageTrimsInterior}
            />
          </>
        )
      })}
    </>
  )
}

export default InteriorFormDublicate
