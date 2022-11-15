import { useState } from "react"
import CreateCarWheelForm from "../CreateCarWheelForm/CreateCarWheelForm"

type Props = {
  carWheel: any
}

const ExteriorForm = ({ carWheel }: Props) => {
  const [dynamicAddWheel, setDynamicAddWheel] = useState<any>([])

  const handleAddDynamic = () => {
    const res = [...dynamicAddWheel, []]
    setDynamicAddWheel(res)
  }

  return (
    <div>
      <button onClick={() => handleAddDynamic()}>add wheel</button>
      {dynamicAddWheel.map((data: any, i: number) => {
        return (
          <>
            <CreateCarWheelForm carWheel={carWheel} key={i} />
            <button onClick={() => handleAddDynamic()}>add wheel</button>
            {/* <CreateCarPhotosForm key={i + 2} carPhotos={carPhotos} /> */}
          </>
        )
      })}
    </div>
  )
}

export default ExteriorForm
