import { useState, useContext } from "react"
import Context from "../../formContext"

type Props = {
  carImageTrims: (trims: any) => void
  setImageTrims: any
}

const ImageTrimsForm = ({ carImageTrims, setImageTrims }: Props) => {
  const appContext = useContext(Context)
  const [image, setImage] = useState<any>()

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setImage(reader.result)
      setImageTrims(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    carImageTrims(e.target.files[0])
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
        <img src={image} alt="" />
        <br />
      </div>
    </>
  )
}

export default ImageTrimsForm
