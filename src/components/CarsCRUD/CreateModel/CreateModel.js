import { useState } from "react"
import { useGetAllBrandsQuery } from "../../../redux/carsCRUDApi"
import BrandsList from "./BrandsList"

const CreateModel = () => {
  const { data } = useGetAllBrandsQuery()
  const [model, setModel] = useState({
    name: "",
    image: "",
    brandId: "",
  })
  const [responseMsg, setResponseMsg] = useState("")

  if (
    JSON.parse(localStorage.getItem("token")).email !== "cakctusinc@gmail.com"
  ) {
    window.location.assign("/")
  }

  const handleUser = (e) => {
    const name = e.target.name
    const value = e.target.value
    const files = e.target.files
    const type = e.target.type
    console.log(value)

    setModel({
      ...model,
      [name]: type === "file" ? files[0] : value,
    })
  }

  const createModel = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append("name", model?.name)
    data.append("image", model?.image)
    data.append("brandId", model?.brandId)
    const result = await fetch("http://localhost:5000/api/create-model/", {
      method: "POST",
      body: data,
    })
    const resultJson = await result.json()
    if (resultJson?.created) {
      setResponseMsg(resultJson?.msg)
    }
    setModel({
      name: "",
      brandId: "",
      image: "",
    })
  }

  return (
    <div className="container">
      <div className="create-container">
        <div>{responseMsg && responseMsg}</div>
        <h3>Create Model</h3>
        <BrandsList data={data} handle={handleUser} />
        <div>
          <label htmlFor="name">Model</label>
          <input
            type="text"
            id="name"
            name="name"
            value={model.name}
            placeholder="Model"
            onChange={handleUser}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="file" id="image" name="image" onChange={handleUser} />
        </div>
        <div>
          <button onClick={createModel}>Create</button>
        </div>
      </div>
    </div>
  )
}

export default CreateModel
