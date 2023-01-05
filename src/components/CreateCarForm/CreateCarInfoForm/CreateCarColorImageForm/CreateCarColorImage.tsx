import { useState, useContext, useEffect } from "react"
import Context from "../../formContext"
import Save from "../../Save/Save"
import { useClearState } from "../../../../hooks/useClearState"

type Props = {}

const CreateCarColorImage = (props: Props) => {
  const context = useContext(Context)
  const [carColorImage, setCarColorImage] = useState<any>()
  const [handleValue] = useClearState(context?.clearState, setCarColorImage)

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

  useEffect(() => {
    handleValue()
  }, [context?.clearState])

  return (
    <>
      <div>
        <label htmlFor="color">Choose Car Color</label>
        <div style={{ background: "#3B3B3B" }}>
          <input
            type="file"
            id="color"
            name="color"
            onChange={(e) => previewFile(e)}
          />
          <img src={carColorImage} alt="" />
        </div>
      </div>

      <Save />
    </>
  )
}

export default CreateCarColorImage
