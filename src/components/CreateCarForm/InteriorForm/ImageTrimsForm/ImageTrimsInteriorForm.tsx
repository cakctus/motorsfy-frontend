import { useState } from "react"
import ImageTrimsForm from "./ImageTrimsForm"

type Props = {
  carImageTrimsInterior: (imageTrimsInterior: any) => void
}

const ImageTrimsInteriorForm = ({ carImageTrimsInterior }: Props) => {
  const [imageTrimsInterior, setImageTrimsInterior] = useState<any>()

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
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
        <label htmlFor="upholstery">Choose trim image</label>
        <input
          type="file"
          id="upholstery"
          name="upholstery"
          onChange={(e) => previewFile(e)}
        />
        <img src={imageTrimsInterior} alt="" />
      </div>
    </>
  )
}

export default ImageTrimsInteriorForm
