import React, { useState, useEffect } from "react"
import OptionListItemForm from "./OptionListItemForm"
import { useSelector, useDispatch } from "react-redux"
import { clearOptionSave } from "../../../../features/optionsForm/isOptionSaveSlice"

const OptionListForm = () => {
  const [val, setVal] = useState([[]])
  const { save } = useSelector((state) => state.isSaveOption)
  const dispatch = useDispatch()

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
      {val?.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <OptionListItemForm val={val} setVal={setVal} />
          </React.Fragment>
        )
      })}
    </>
  )
}

export default OptionListForm
