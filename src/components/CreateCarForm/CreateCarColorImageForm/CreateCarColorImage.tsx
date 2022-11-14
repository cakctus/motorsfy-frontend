import { useState } from "react"

type Props = {
  carPhotoImage: (file: any) => void
}

const CreateCarColorImage = ({ carPhotoImage }: Props) => {
  const [carColorImage, setCarColorImage] = useState<any>()

  const previewFile = (e: any) => {
    console.log(e.target.files[0])
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setCarColorImage(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    carPhotoImage(e.target.files[0])
  }

  return (
    <>
      <div>
        <label htmlFor="color">Choose Car Color</label>
        <input type="file" onChange={(e) => previewFile(e)} />
        <img src={carColorImage} alt="" />
      </div>
    </>
  )
}

export default CreateCarColorImage
