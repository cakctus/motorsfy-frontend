import { useState } from "react"

type Props = {
  carImageUpHolstery: (upholstery: any) => void
}

const ImageUpHolsteryForm = ({ carImageUpHolstery }: Props) => {
  const [upHolstery, setUpholstery] = useState<any>()

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setUpholstery(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    carImageUpHolstery(e.target.files[0])
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
