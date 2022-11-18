import { useContext } from "react"
import Context from "../../formContext"

type Props = {}

const CreateCarModelForm = (props: Props) => {
  const context = useContext(Context)

  return (
    <>
      <div>
        <label htmlFor="model">Car Model</label>
        <input
          type="text"
          id="model"
          name="model"
          placeholder="Car Model"
          onChange={(e) => context?.carModel(e.target.value)}
        />
      </div>
    </>
  )
}

export default CreateCarModelForm
