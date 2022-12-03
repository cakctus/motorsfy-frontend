import { useContext } from "react"
import Context from "../../formContext"
import styles from "./style.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { setCategoryOptions } from "../../../../features/optionsForm/optionsCategorySlice"
import { saveOptionsFunc } from "../../../../features/optionsForm/saveOptions"
import { saveClickOption } from "../../../../features/optionsForm/isOptionSaveSlice"
import { clearOptionsArray } from "../../../../features/optionsForm/optionsObjectListSlice"

type Props = {}

const CategoryForm = (props: Props) => {
  const context = useContext(Context)
  const dispatch = useDispatch()
  const c = useSelector((state: any) => state.optionsCategory)
  const o = useSelector((state: any) => state.optionsObjectList)
  const options = useSelector((state: any) => state.saveOptions)

  // console.log(c.category)
  // console.log(o)
  // console.log(options)
  const handleSaveCategory = () => {
    dispatch(saveOptionsFunc({ category: c.category, optionList: o }))
    dispatch(saveClickOption())
    dispatch(clearOptionsArray())
  }

  return (
    <>
      <div className={styles.categoryForm}>
        <div>
          <label htmlFor="model">Model:</label>
          <select name="model" id="model">
            <option value={context?.cars?.model}>{context?.cars?.model}</option>
          </select>
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={(e: any) => dispatch(setCategoryOptions(e.target.value))}
          />
        </div>
        <button onClick={handleSaveCategory}>save category</button>
      </div>
    </>
  )
}

export default CategoryForm
