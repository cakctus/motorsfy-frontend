import { useState, useContext } from "react"
import Context from "../../formContext"
import CreateCarPhotosForm from "../CreateCarPhotosForm/CreateCarPhotosForm"
import { useClearState } from "../../../../hooks/useClearState"

const CreateCarWheelForm = ({ dynamicAddWheel, setDynamicAddWheel }) => {
  const context = useContext(Context)
  const [wheel, setWheel] = useState()
  const [photos, setPhotos] = useState()
  const [handleValue] = useClearState(context?.clearState, setWheel)
  const [isSave, setIsSave] = useState(false)

  const previewFile = (e) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setWheel(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const carPhotos = (photos) => {
    setPhotos(photos)
  }

  const saveAndAddCar = () => {
    context?.carWheel(wheel, photos)
    const res = [...dynamicAddWheel, []]
    setDynamicAddWheel(res)
    setIsSave(true)
  }

  return (
    <>
      <div>
        <label>Choose Car Wheel</label>
        <div style={{ background: "#3B3B3B" }}>
          <input
            type="file"
            id="wheel"
            name="wheel"
            onChange={(e) => previewFile(e)}
          />
          <img src={wheel} alt="" />
        </div>
      </div>

      <CreateCarPhotosForm carPhotos={carPhotos} />
      {isSave || <button onClick={saveAndAddCar}>save wheel</button>}
    </>
  )
}

export default CreateCarWheelForm
