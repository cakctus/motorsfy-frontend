import CreateCarColorImage from "./CreateCarColorImageForm/CreateCarColorImage"
import CreateCarModelForm from "./CreateCarModelForm/CreateCarModelForm"
import CreateCarNameForm from "./CreateCarNameForm/CreateCarNameForm"

const CarInfoForm = () => {
  return (
    <>
      <CreateCarNameForm />
      <CreateCarModelForm />
      <CreateCarColorImage />
    </>
  )
}

export default CarInfoForm
