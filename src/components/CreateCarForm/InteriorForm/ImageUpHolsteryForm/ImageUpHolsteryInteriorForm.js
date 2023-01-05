import { useState, useContext, useRef } from "react"
import Context from "../../formContext"
import { useClearState } from "../../../../hooks/useClearState"
import FileSvg from "../../../../hooks/FileSvg"

const ImageUpHolsteryInteriorForm = ({ item, index }) => {
  const context = useContext(Context)
  const [upHolsteryInterior, setUpHolsteryInterior] = useState()
  const [handleValue] = useClearState(
    context?.clearState,
    setUpHolsteryInterior
  )
  const file = useRef(null)

  const previewFile = (e) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setUpHolsteryInterior(reader.result)
      context?.carImageUpHolsteryInterior(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleFile = () => {
    const i = file.current
    i?.click()
  }

  return (
    <>
      {item[index] === true ? (
        <div>
          {/* <input
            type="file"
            id="upholstery"
            name="upholstery"
            onChange={(e) => previewFile(e)}
          /> */}
          <img src={upHolsteryInterior} alt="" width="400" />
        </div>
      ) : (
        <div>
          <label htmlFor="upholstery">Choose upholstery interior image</label>
          <div style={{ background: "#3B3B3B" }}>
            <input
              type="file"
              id="upholstery"
              name="upholstery"
              onChange={(e) => previewFile(e)}
            />
            <img src={upHolsteryInterior} alt="" width="400" />
          </div>
        </div>
      )}
    </>
  )
}

export default ImageUpHolsteryInteriorForm
