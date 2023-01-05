import { useState, useContext, useRef } from "react"
import Context from "../../formContext"
import { useClearState } from "../../../../hooks/useClearState"
import FileSvg from "../../../../hooks/FileSvg"

const ImageUpHolsteryForm = ({ item, index }) => {
  const context = useContext(Context)
  const [upHolstery, setUpholstery] = useState()
  const [handleValue] = useClearState(context?.clearState, setUpholstery)
  const file = useRef(null)

  const previewFile = (e) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setUpholstery(reader.result)
      context?.carImageUpHolstery(reader.result)
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
          <img src={upHolstery} alt="" width="100" />
        </div>
      ) : (
        <>
          <div>
            <label onClick={handleFile}>Choose upholstery images</label>
            <div style={{ background: "#3B3B3B" }}>
              <input
                type="file"
                id="upholstery"
                name="upholstery"
                onChange={(e) => previewFile(e)}
              />
              <img src={upHolstery} alt="" width="100" />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ImageUpHolsteryForm
