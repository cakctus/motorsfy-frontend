import { useState, useContext } from "react"
import Context from "../../formContext"

type Props = {}

const ImageUpHolsteryInteriorForm = (props: Props) => {
  const context = useContext(Context)
  const [upHolsteryInterior, setUpHolsteryInterior] = useState<any>()

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setUpHolsteryInterior(reader.result)
      context?.carImageUpHolsteryInterior(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    // carImageUpHolsteryInterior(e.target.files[0])
  }

  return (
    <>
      <div>
        <label htmlFor="upholstery">Choose upholstery interior image</label>
        <input
          type="file"
          id="upholstery"
          name="upholstery"
          onChange={(e) => previewFile(e)}
        />
        <img src={upHolsteryInterior} alt="" width="400" />
      </div>
    </>
  )
}

export default ImageUpHolsteryInteriorForm
