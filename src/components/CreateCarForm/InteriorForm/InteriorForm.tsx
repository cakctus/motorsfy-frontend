import { useState } from "react"
import ImageUpHolsteryForm from "./ImageUpHolsteryForm/ImageUpHolsteryForm"
import ImageUpHolsteryInteriorForm from "./ImageUpHolsteryForm/ImageUpHolsteryInteriorForm"
import InteriorFormDublicate from "./InteriorFormDublicate"

type Props = {}

const InteriorForm = (props: Props) => {
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
            <InteriorFormDublicate />

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
