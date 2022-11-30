import { useContext } from "react"
import Context from "../../formContext"
import styles from "./style.module.scss"

type Props = {}

const CategoryForm = (props: Props) => {
  const context = useContext(Context)

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
            onChange={(e: any) => context?.setCategoryOptions(e.target.value)}
          />
        </div>
        <button onClick={() => context?.saveOptionObject()}>
          save category
        </button>
      </div>
    </>
  )
}

export default CategoryForm
