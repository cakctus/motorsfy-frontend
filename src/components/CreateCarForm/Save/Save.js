import { useContext } from "react"
import Context from "../formContext"
const Save = () => {
  const context = useContext(Context)

  const save = () => {}
  return (
    <>
      {/* <button onClick={() => context?.saveAndAddAnotherColor()}>
        save car
      </button> */}
      <input
        type="reset"
        value="add another color"
        onClick={() => context?.saveAndAddAnotherColor()}
      />
    </>
  )
}

export default Save
