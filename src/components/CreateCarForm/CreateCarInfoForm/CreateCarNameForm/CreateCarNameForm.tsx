import { useContext } from "react"
import Context from "../../formContext"

type Props = {}

const CreateCarNameForm = (props: Props) => {
  const context = useContext(Context)

  return (
    <div>
      <label htmlFor="car">Car Name</label>
      <input
        type="text"
        id="car"
        name="car"
        placeholder="Car Name"
        onChange={(e: any) => context?.carName(e.target.value)}
      />
    </div>
  )
}

export default CreateCarNameForm
