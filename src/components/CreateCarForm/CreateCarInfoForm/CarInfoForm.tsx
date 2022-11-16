import CreateCarColorImage from "./CreateCarColorImageForm/CreateCarColorImage"
import CreateCarModelForm from "./CreateCarModelForm/CreateCarModelForm"
import CreateCarNameForm from "./CreateCarNameForm/CreateCarNameForm"

type Props = {
  carName: (car: any) => void
  carModel: (model: any) => void
  carPhotoImage: (carPhotoImageFile: any) => void
}

const CarInfoForm = ({ carName, carModel, carPhotoImage }: Props) => {
  return (
    <>
      <CreateCarNameForm carName={carName} />
      <CreateCarModelForm carModel={carModel} />
      <CreateCarColorImage carPhotoImage={carPhotoImage} />
    </>
  )
}

export default CarInfoForm
