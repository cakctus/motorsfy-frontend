import { useState } from "react"
import {
  useGetAllBrandsQuery,
  useGetAllModelsQuery,
} from "../../../redux/carsCRUDApi"
import BrandList from "./BrandList"
import ModelsList from "./ModelsList"

const CreateGeneration = () => {
  const [skip, setSkip] = useState(true)
  const [generation, setGeneration] = useState({
    name: "",
    brandId: "",
    modelId: "",
  })
  const [responseMsg, setResponseMsg] = useState("")
  const { currentData } = useGetAllBrandsQuery()
  const { data } = useGetAllModelsQuery(generation.brandId)

  if (
    JSON.parse(localStorage.getItem("token")).email !== "cakctusinc@gmail.com"
  ) {
    window.location.assign("/")
  }

  const handleGeneration = (e) => {
    setSkip(false)
    const name = e.target.name
    const value = e.target.value
    const files = e.target.files
    const type = e.target.type

    setGeneration({
      ...generation,
      [name]: type === "file" ? files[0] : value,
    })
  }

  const createGeneration = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append("name", generation?.name)
    data.append("image", generation?.image)
    data.append("modelId", generation?.modelId)
    const result = await fetch("http://localhost:5000/api/create-generation/", {
      method: "POST",
      body: data,
    })
    const resultJson = await result.json()
    if (resultJson?.created) {
      setResponseMsg(resultJson?.msg)
    }
    setGeneration({
      name: "",
      modelId: "",
      brandId: "",
      image: "",
    })
  }

  return (
    <div className="container">
      <div className="create-container">
        <div>{responseMsg && responseMsg}</div>
        <h3>Create Generation</h3>
        <BrandList data={currentData} handle={handleGeneration} />
        <ModelsList data={data} handleGeneration={handleGeneration} />
        <div>
          <label htmlFor="name">Model</label>
          <input
            type="text"
            id="name"
            name="name"
            value={generation.name}
            placeholder="Model"
            onChange={handleGeneration}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleGeneration}
          />
        </div>
        <div>
          <button onClick={createGeneration}>Create</button>
        </div>
      </div>
    </div>
  )
}

export default CreateGeneration
