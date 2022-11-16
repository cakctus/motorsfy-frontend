import { useContext } from "react"
import Context from "../../formContext"

type Props = {}

const CategoryForm = (props: Props) => {
  const context = useContext(Context)

  return (
    <>
      <div>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={(e: any) => context?.setCategoryOptions(e.target.value)}
        />
      </div>
    </>
  )
}

export default CategoryForm
