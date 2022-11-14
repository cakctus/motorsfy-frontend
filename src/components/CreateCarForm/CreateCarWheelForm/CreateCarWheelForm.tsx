import { useState } from "react"

type Props = {
  carWheel: (wheel: any) => void
}

const CreateCarWheelForm = ({ carWheel }: Props) => {
  const [wheel, setWheel] = useState<any>()

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setWheel(reader.result)
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    carWheel(e.target.files[0])
  }

  return (
    <>
      <div>
        <label htmlFor="wheel">Choose Car Wheel</label>
        <input
          type="file"
          id="wheel"
          name="wheel"
          onChange={(e) => previewFile(e)}
        />
        <img src={wheel} alt="" />
      </div>
    </>
  )
}

export default CreateCarWheelForm
