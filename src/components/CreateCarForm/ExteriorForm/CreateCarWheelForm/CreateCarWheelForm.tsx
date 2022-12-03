import { useState, useContext } from "react"
import Context from "../../formContext"
import CreateCarPhotosForm from "../CreateCarPhotosForm/CreateCarPhotosForm"
import { useClearState } from "../../../../hooks/useClearState"

type Props = {}

const CreateCarWheelForm = (props: Props) => {
  const context = useContext(Context)
  const [wheel, setWheel] = useState<any>()
  const [photos, setPhotos] = useState<any>()
  const [handleValue] = useClearState(context?.clearState, setWheel)

  const previewFile = (e: any) => {
    const reader = new FileReader()
    setWheel(e.target.files[0])
    reader.addEventListener("load", () => {
      // setWheel(e.target.files[0])
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const carPhotos = (photos: any) => {
    setPhotos(photos)
  }

  const handlerClick = () => {
    context?.carWheel(wheel, photos)
  }

  return (
    <>
      <div>
        <label htmlFor="wheel">Choose Car Wheel</label>
        <input
          type="file"
          id="wheel"
          name="wheel"
          onChange={(e) => previewFile(e)}
        />
        <img src={wheel} alt="" />
        <CreateCarPhotosForm carPhotos={carPhotos} />
        <button onClick={handlerClick}>done</button>
      </div>
    </>
  )
}

export default CreateCarWheelForm
