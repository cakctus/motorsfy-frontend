import { useContext, useRef, useState, useEffect } from "react"
import Context from "../../formContext"
import styles from "./style.scss"
import { useDispatch, useSelector } from "react-redux"
import { setCategoryOptions } from "../../../../features/optionsForm/optionsCategorySlice"
import { saveOptionsFunc } from "../../../../features/optionsForm/saveOptions"
import { saveClickOption } from "../../../../features/optionsForm/isOptionSaveSlice"
import { clearOptionsArray } from "../../../../features/optionsForm/optionsObjectListSlice"

const CategoryForm = () => {
  const context = useContext(Context)
  const dispatch = useDispatch()
  const c = useSelector((state) => state.optionsCategory)
  const o = useSelector((state) => state.optionsObjectList)
  const options = useSelector((state) => state.saveOptions)
  const categoryInput = useRef(null)
  const [height, setHeight] = useState()
  const [h, setH] = useState(false)

  const handleSaveCategory = () => {
    dispatch(saveOptionsFunc({ category: c.category, optionList: o }))
    dispatch(saveClickOption())
    dispatch(clearOptionsArray())
  }

  useEffect(() => {
    const category = categoryInput

    setHeight(category.current.clientHeight)
  }, [height])

  return (
    <>
      <div>
        <label className="category-title" htmlFor="category">
          Category
        </label>
        <div style={{ background: "#3B3B3B" }}>
          <input
            type="text"
            id="category"
            name="category"
            onChange={(e) => dispatch(setCategoryOptions(e.target.value))}
            ref={categoryInput}
          />
        </div>
      </div>
      <button
        style={{ height: height > 1 ? height : null }}
        className="save-category"
        onClick={handleSaveCategory}
      >
        save category
      </button>
    </>
  )
}

export default CategoryForm
