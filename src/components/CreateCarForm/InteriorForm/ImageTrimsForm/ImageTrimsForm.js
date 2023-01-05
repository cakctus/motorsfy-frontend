import { useState, useContext, useRef } from "react"
import Context from "../../formContext"
import { useClearState } from "../../../../hooks/useClearState"

const ImageTrimsForm = ({ setImageTrims }) => {
  const appContext = useContext(Context)
  const [image, setImage] = useState()
  const input = useRef(null)
  const [handleValue] = useClearState(appContext?.clearState, setImage)

  const previewFile = (e) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setImage(reader.result)
      setImageTrims(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleInput = () => {
    const i = input.current
    i.click()
  }

  return (
    <>
      <div>
        <p onClick={handleInput}>Choose trim interior image</p>
        <input
          type="file"
          id="upholstery"
          name="upholstery"
          onChange={(e) => previewFile(e)}
          ref={input}
          className="hidden"
        />
        <img src={image} alt="" width="100" />
        <br />
      </div>
    </>
  )
}

export default ImageTrimsForm
