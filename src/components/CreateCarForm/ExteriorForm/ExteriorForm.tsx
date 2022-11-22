import { useState } from "react"
import CreateCarWheelForm from "./CreateCarWheelForm/CreateCarWheelForm"

type Props = {}

const ExteriorForm = (props: Props) => {
  const [dynamicAddWheel, setDynamicAddWheel] = useState<any>([[]])

  const handleAddDynamic = () => {
    const res = [...dynamicAddWheel, []]
    setDynamicAddWheel(res)
  }

  return (
    <div>
      {dynamicAddWheel.map((data: any, i: number) => {
        return (
          <>
            <CreateCarWheelForm />
            <button onClick={() => handleAddDynamic()}>add wheel</button>
          </>
        )
      })}
    </div>
  )
}

export default ExteriorForm
