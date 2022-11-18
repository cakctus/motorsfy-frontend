import { useState, useContext } from "react"
import Context from "../../formContext"

type Props = {}

const CreateCarColorImage = (props: Props) => {
  const context = useContext(Context)
  const [carColorImage, setCarColorImage] = useState<any>()

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setCarColorImage(reader.result)
      context?.carColorImage(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
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
