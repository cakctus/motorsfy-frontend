import { useState } from "react"

type Props = {
  carImageTrims: (trims: any) => void
}

const ImageTrimsForm = ({ carImageTrims }: Props) => {
  const [imageTrims, setImageTrims] = useState<any>()

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      imageTrims(reader.result)
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
        <img src={imageTrims} alt="" />
      </div>
    </>
  )
}

export default ImageTrimsForm
