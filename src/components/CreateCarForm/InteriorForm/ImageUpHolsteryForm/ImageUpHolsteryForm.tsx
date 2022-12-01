import { useState, useContext } from "react"
import Context from "../../formContext"
import { useClearState } from "../../../../hooks/useClearState"

type Props = {}

const ImageUpHolsteryForm = (props: Props) => {
  const context = useContext(Context)
  const [upHolstery, setUpholstery] = useState<any>()
  const [handleValue] = useClearState(context?.clearState, setUpholstery)

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setUpholstery(reader.result)
      context?.carImageUpHolstery(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
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
