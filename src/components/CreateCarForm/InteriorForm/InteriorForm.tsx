import { useState } from "react"
import ImageUpHolsteryForm from "./ImageUpHolsteryForm/ImageUpHolsteryForm"
import ImageUpHolsteryInteriorForm from "./ImageUpHolsteryForm/ImageUpHolsteryInteriorForm"
import InteriorFormDublicate from "./InteriorFormDublicate"

type Props = {
  carImageTrims: (trimsImage: any, trimsInterior: any) => void
}

const InteriorForm = ({ carImageTrims }: Props) => {
  const [dynamicAddUpHolstery, setDynamicAddUpHolstery] = useState<any>([[]])

  const handleDynamicUpHolstery = () => {
    const res = [...dynamicAddUpHolstery, []]
    setDynamicAddUpHolstery(res)
  }

  return (
    <>
      {dynamicAddUpHolstery.map((item: any, i: number) => {
        return (
          <>
            <ImageUpHolsteryForm />
            <ImageUpHolsteryInteriorForm />
            <InteriorFormDublicate carImageTrims={carImageTrims} />
            <div>
              <button onClick={() => handleDynamicUpHolstery()}>
                add upholstery
              </button>
            </div>
            <hr />
          </>
        )
      })}
    </>
  )
}

export default InteriorForm
