import { useState, useContext } from "react"
import Context from "../../formContext"
import ImageTrimsForm from "./ImageTrimsForm"

type Props = {
  carImageTrimsInterior: (imageTrimsInterior: any) => void
  setImageTrimsInterior: any
}

const ImageTrimsInteriorForm = ({
  carImageTrimsInterior,
  setImageTrimsInterior,
}: Props) => {
  const appContext = useContext(Context)
  const [image, setImage] = useState<any>()

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setImage(reader.result)
      setImageTrimsInterior(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    carImageTrimsInterior(e.target.files[0])
  }

  return (
    <>
      <div>
        <label htmlFor="upholstery">Choose trim interior</label>
        <input
          type="file"
          id="upholstery"
          name="upholstery"
          onChange={(e) => previewFile(e)}
        />
        <img src={image} alt="" />
      </div>
    </>
  )
}

export default ImageTrimsInteriorForm
