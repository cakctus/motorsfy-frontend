import { useState } from "react"

const CreateBrand = () => {
  const [brand, setBrand] = useState({
    name: "",
  })

  const [responseMsg, setResponseMsg] = useState("")

  if (
    JSON.parse(localStorage.getItem("token")).email !== "cakctusinc@gmail.com"
  ) {
    window.location.assign("/")
  }

  const handleBrand = (e) => {
    const name = e.target.name
    const value = e.target.value
    const files = e.target.files
    const type = e.target.type

    setBrand({
      ...brand,
      [name]: type === "file" ? files[0] : value,
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append("name", brand?.name)
    data.append("photo", brand.photo)
    const result = await fetch("http://localhost:5000/api/create-brand", {
      method: "POST",
      body: data,
    })
    const resultJson = await result.json()
    if (resultJson?.created) {
      setResponseMsg(resultJson?.msg)
    }
    setBrand({
      name: "",
    })
  }

  return (
    <div className="container">
      <div className="create-container">
        <div>{responseMsg && responseMsg}</div>
        <h3>Create Brand</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={brand.name}
            onChange={handleBrand}
          />
        </div>
        <div>
          <label htmlFor="photo">Image</label>
          <input type="file" id="photo" name="photo" onChange={handleBrand} />
        </div>
        <div>
          <button onClick={submitForm}>Create</button>
        </div>
      </div>
    </div>
  )
}

export default CreateBrand
