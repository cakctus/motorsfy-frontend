import { useState, useContext, useRef } from "react"
import Context from "../../formContext"
import { useDispatch, useSelector } from "react-redux"
import { setOptionsArray } from "../../../../features/optionsForm/optionsObjectListSlice"
import FileSvg from "../../../../hooks/FileSvg"

const OptionListItemForm = ({ val, setVal }) => {
  const context = useContext(Context)
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    title: "",
    image: "",
    fileName: "",
    price: 0,
    description: "",
  })
  const file = useRef(null)
  const [isAdd, setIsAdd] = useState(false)

  const handleForm = (e) => {
    const name = e.target.name
    const value = e.target.value

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const previewFile = (e) => {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
      setForm((prev) => ({
        ...prev,
        image: reader.result,
        fileName: e.target.files[0].name,
      }))
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleFile = () => {
    const f = file.current
    f.click()
  }

  const save = () => {
    dispatch(setOptionsArray(form))
    const prevVal = [...val, []]
    setVal(prevVal)
    setIsAdd(true)
  }

  return (
    <>
      <div>
        <label htmlFor="title">Title</label>
        <div style={{ background: "#3B3B3B" }}>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={(e) => handleForm(e)}
          />
        </div>
      </div>

      <div>
        <label onClick={handleFile}>Choose Image</label>
        <div style={{ background: "#3B3B3B" }}>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => previewFile(e)}
          />
          {form.fileName}
          <img src={form.image} alt="" />
        </div>
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <div style={{ background: "#3B3B3B" }}>
          <input
            type="number"
            id="price"
            name="price"
            value={form.price}
            onChange={(e) => handleForm(e)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <div style={{ background: "#3B3B3B" }}>
          <input
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={(e) => handleForm(e)}
          />
        </div>
      </div>
      {isAdd || <button onClick={save}>add category</button>}
    </>
  )
}

export default OptionListItemForm
