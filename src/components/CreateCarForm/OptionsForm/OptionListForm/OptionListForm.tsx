import { useState, useEffect } from "react"
import OptionListItemForm from "./OptionListItemForm"
import { useSelector, useDispatch } from "react-redux"
import { clearOptionSave } from "../../../../features/optionsForm/isOptionSaveSlice"

type Props = {}

const OptionListForm = (props: Props) => {
  const [val, setVal] = useState<any>([[]])
  const { save } = useSelector((state: any) => state.isSaveOption)
  const dispatch = useDispatch()

  const handleVal = () => {
    const prevVal = [...val, []]
    setVal(prevVal)
  }

  useEffect(() => {
    if (save) {
      dispatch(clearOptionSave())
    }
    setVal(() => {
      if (!save) {
        return [[]]
      }
    })
  }, [!save])

  return (
    <>
      {val?.map((item: any, index: number) => {
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
