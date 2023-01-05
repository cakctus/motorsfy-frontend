import { useState, useContext, useRef, useEffect } from "react"
import Context from "../../formContext"
import Modal from "./Modal"
import { useClearState } from "../../../../hooks/useClearState"
import { useDispatch } from "react-redux"
import { addTrimInterior } from "../../../../features/addedTrims/addedTrimsSlice"
import FileSvg from "../../../../hooks/FileSvg"

const ImageTrimsInteriorForm = ({
  setImageTrims,
  setImageTrimsInterior,
  saveAndAdd,
  setListOfInteriorTrim,
  listOfInteriorTrim,
  modal,
  setModal,
  item,
  index,
}) => {
  const appContext = useContext(Context)
  // exterior
  const [image1, setImage1] = useState()
  const input1 = useRef(null)
  // interior
  const [image, setImage] = useState()
  const [isAdd, setIsAdd] = useState(false)
  const [handleValue] = useClearState(appContext?.clearState, setImage)
  const input = useRef(null)

  const dispatch = useDispatch()

  const previewFile = (e) => {
    e.preventDefault()
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setImage1(reader.result)
      setImageTrims(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const previewFile2 = (e) => {
    e.preventDefault()
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setImage(reader.result)
      setImageTrimsInterior(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const save = () => {
    saveAndAdd()
    setIsAdd(true)
    dispatch(addTrimInterior({ interior: image1, exterior: image }))
    const obj = { interior: image1, exterior: image }
    setListOfInteriorTrim((prev) => [...prev, obj])
  }

  const handleInput = () => {
    const i = input.current
    i?.click()
  }

  const handleInput2 = () => {
    const i = input1.current
    i?.click()
  }

  return (
    <>
      {isAdd ? (
        <>
          {modal && (
            <Modal
              setVisible={setModal}
              listOfInteriorTrim={listOfInteriorTrim}
            ></Modal>
          )}
        </>
      ) : (
        <div className="trims-item">
          <div>
            <label htmlFor="trim-interior">Choose trim interior image</label>
            <div style={{ background: "#3B3B3B" }}>
              <input
                type="file"
                id="trim-interior"
                name="trim-interior"
                onChange={(e) => previewFile(e)}
              />
              <img src={image1} alt="" width="100" />
            </div>
          </div>

          <div>
            <label htmlFor="trim-interior2">Choose trim interior</label>
            <div style={{ background: "#3B3B3B" }}>
              <input
                type="file"
                id="trim-interior2"
                name="trim-interior2"
                onChange={(e) => previewFile2(e)}
              />
              <img src={image} alt="" width="400" />
            </div>
          </div>

          <button
            onClick={() => save()}
            className={image && image1 ? "not-disabled" : "disabled"}
          >
            save trim
          </button>
        </div>
      )}
    </>
  )
}

export default ImageTrimsInteriorForm
