import { useState, useContext, useEffect } from "react"
import CreateCarWheelForm from "./CreateCarWheelForm/CreateCarWheelForm"
import Context from "../formContext"

type Props = {}

const ExteriorForm = (props: Props) => {
  const context = useContext(Context)
  const [dynamicAddWheel, setDynamicAddWheel] = useState<any>([[]])

  const handleAddDynamic = () => {
    const res = [...dynamicAddWheel, []]
    setDynamicAddWheel(res)
  }

  useEffect(() => {
    setDynamicAddWheel(() => {
      if (!context?.clearState) {
        return [[]]
      }
    })
  }, [!context?.clearState])

  return (
    <>
      {dynamicAddWheel?.map((data: any, i: number) => {
        return (
          <>
            <CreateCarWheelForm />
            <button onClick={() => handleAddDynamic()}>add wheel</button>
          </>
        )
      })}
    </>
  )
}

export default ExteriorForm
