import { useState, useContext } from "react"
import Context from "../../formContext"
import { useDispatch, useSelector } from "react-redux"
import { setOptionsArray } from "../../../../features/optionsForm/optionsObjectListSlice"

type Props = {}

const OptionListItemForm = (props: Props) => {
  const context = useContext(Context)
  const dispatch = useDispatch()
  const [form, setForm] = useState<any>({
    title: "",
    image: "",
    price: 0,
    description: "",
  })

  const handleForm = (e: any) => {
    const name = e.target.name
    const value = e.target.value

    setForm((prevForm: any) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const previewFile = (e: any) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setForm((prev: any) => ({
        ...prev,
        image: reader.result,
      }))
    })

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={(e: any) => handleForm(e)}
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={(e: any) => previewFile(e)}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={form.price}
          onChange={(e: any) => handleForm(e)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={form.description}
          onChange={(e: any) => handleForm(e)}
        />
      </div>
      <button onClick={() => dispatch(setOptionsArray(form))}>save</button>
    </>
  )
}

export default OptionListItemForm
