import { useState, useContext } from "react"
import Context from "../../formContext"

type Props = {
  carImageUpHolstery: (upholstery: any) => void
}

const ImageUpHolsteryForm = ({ carImageUpHolstery }: Props) => {
  const appContext = useContext(Context)
  console.log(appContext)
  const [upHolstery, setUpholstery] = useState<any>()

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setUpholstery(reader.result)
      carImageUpHolstery(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    // carImageUpHolstery(e.target.files[0])
  }

  return (
    <>
      <div>
        <label htmlFor="upholstery">Choose upholstery image</label>
        <input
          type="file"
          id="upholstery"
          name="upholstery"
          onChange={(e) => previewFile(e)}
        />
        <img src={upHolstery} alt="" />
      </div>
    </>
  )
}

export default ImageUpHolsteryForm
