import { useState, useEffect } from "react"
import CreateCarPhotosForm from "../CreateCarPhotosForm/CreateCarPhotosForm"

type Props = {
  carWheel: (wheel: any, photos: any) => void
}

const CreateCarWheelForm = ({ carWheel }: Props) => {
  const [wheel, setWheel] = useState<any>()
  const [photos, setPhotos] = useState<any>()

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setWheel(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    // carWheel(e.target.files[0], photos)
  }

  const carPhotos = (photos: any) => {
    setPhotos(photos)
  }

  const handlerClick = () => {
    carWheel(wheel, photos)
  }

  // useEffect(() => {
  //   carWheel(wheel, photos)
  // }, [wheel, photos])

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
