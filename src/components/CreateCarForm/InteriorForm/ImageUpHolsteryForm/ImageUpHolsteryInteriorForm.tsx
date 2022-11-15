import { useState } from "react"

type Props = {
  carImageUpHolsteryInterior: (upholstery: any) => void
}

const ImageUpHolsteryInteriorForm = ({ carImageUpHolsteryInterior }: Props) => {
  const [upHolsteryInterior, setUpHolsteryInterior] = useState<any>()

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setUpHolsteryInterior(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    carImageUpHolsteryInterior(e.target.files[0])
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
        <img src={upHolsteryInterior} alt="" />
      </div>
    </>
  )
}

export default ImageUpHolsteryInteriorForm
