import { useState, useContext } from "react"
import Context from "../../formContext"
import OptionListItemForm from "./OptionListItemForm"

type Props = {}

const OptionListForm = (props: Props) => {
  const [val, setVal] = useState<any>([[]])

  const handleVal = () => {
    const prevVal = [...val, []]
    setVal(prevVal)
  }

  return (
    <>
      {val.map((item: any, index: number) => {
        return (
          <>
            <OptionListItemForm key={index} />
            <div>
              <br />
              <button onClick={() => handleVal()}>add</button>
            </div>
            <hr />
          </>
        )
      })}
    </>
  )
}

export default OptionListForm
