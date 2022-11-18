import CreateCarColorImage from "./CreateCarColorImageForm/CreateCarColorImage"
import CreateCarModelForm from "./CreateCarModelForm/CreateCarModelForm"
import CreateCarNameForm from "./CreateCarNameForm/CreateCarNameForm"

type Props = {}

const CarInfoForm = (props: Props) => {
  return (
    <>
      <CreateCarNameForm />
      <CreateCarModelForm />
      <CreateCarColorImage />
    </>
  )
}

export default CarInfoForm
