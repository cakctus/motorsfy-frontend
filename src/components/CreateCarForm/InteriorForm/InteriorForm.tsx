import { useState } from "react"
import ImageTrimsForm from "./ImageTrimsForm/ImageTrimsForm"
import ImageTrimsInteriorForm from "./ImageTrimsForm/ImageTrimsInteriorForm"
import ImageUpHolsteryForm from "./ImageUpHolsteryForm/ImageUpHolsteryForm"
import ImageUpHolsteryInteriorForm from "./ImageUpHolsteryForm/ImageUpHolsteryInteriorForm"
import InteriorFormDublicate from "./InteriorFormDublicate"

type Props = {
  carImageUpHolstery: (upholstery: any) => void
  carImageUpHolsteryInterior: (upholstery: any) => void
  carImageTrims: (trims: any) => void
  carImageTrimsInterior: (imageTrimsInterior: any) => void
}

const InteriorForm = ({
  carImageUpHolstery,
  carImageUpHolsteryInterior,
  carImageTrims,
  carImageTrimsInterior,
}: Props) => {
  const [dynamicAddUpHolstery, setDynamicAddUpHolstery] = useState<any>([])
  const [dynamicAddTrims, setDynamicAddTrims] = useState<any>([])

  const handleDynamicUpHolstery = () => {
    const res = [...dynamicAddUpHolstery, []]
    setDynamicAddUpHolstery(res)
  }

  const handleDynamicTrims = () => {
    const res = [...dynamicAddTrims, []]
    setDynamicAddTrims(res)
  }

  return (
    <>
      <button onClick={() => handleDynamicUpHolstery()}>add upholstery</button>
      {dynamicAddUpHolstery.map((item: any, i: number) => {
        return (
          <>
            <ImageUpHolsteryForm carImageUpHolstery={carImageUpHolstery} />
            <ImageUpHolsteryInteriorForm
              carImageUpHolsteryInterior={carImageUpHolsteryInterior}
            />
            <InteriorFormDublicate
              carImageTrims={carImageTrims}
              carImageTrimsInterior={carImageTrimsInterior}
            />
            <hr />
          </>
        )
      })}
    </>
  )
}

export default InteriorForm
