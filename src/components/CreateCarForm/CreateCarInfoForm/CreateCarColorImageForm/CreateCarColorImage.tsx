import { useState, useContext, useEffect } from "react"
import Context from "../../formContext"
import { useClearState } from "../../../../hooks/useClearState"

type Props = {}

const CreateCarColorImage = (props: Props) => {
  const context = useContext(Context)
  const [carColorImage, setCarColorImage] = useState<any>()
  const [handleValue] = useClearState(context?.clearState, setCarColorImage)

  const previewFile = (e: any) => {
    const reader = new FileReader()

    const f = new FormData()
    f.append("image", e.target.files[0])
    context?.carColorImage(e.target.files[0])

    reader.addEventListener("load", () => {
      setCarColorImage(reader.result)
      // const f = new FormData()
      // f.append("image", e.target.files[0])
      // context?.carColorImage(f)
    })

    if (e.target.files[0]) {
      reader.readAsArrayBuffer(e.target.files[0])
    }
  }

  // useEffect(() => {
  //   setCarColorImage(() => {
  //     if (context?.clearState) {
  //       return ""
  //     }
  //   })
  // }, [context?.clearState])

  useEffect(() => {
    handleValue()
  }, [context?.clearState])

  return (
    <>
      <div>
        <label htmlFor="color">Choose Car Color</label>
        <input type="file" onChange={(e) => previewFile(e)} />
        <img src={carColorImage} alt="" />
      </div>

      <button onClick={() => context?.saveAndAddAnotherColor()}>
        save car
      </button>
    </>
  )
}

export default CreateCarColorImage
