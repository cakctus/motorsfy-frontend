import React from "react"

const ModelsList = ({
  data,
  modification,
  setModification,
  setSkipGeneration,
}) => {
  const handleModification = (e) => {
    setSkipGeneration(false)
    const name = e.target.name
    const value = e.target.value
    const files = e.target.files
    const type = e.target.type

    setModification({
      ...modification,
      [name]: type === "file" ? files[0] : value,
    })
  }

  return (
    <div>
      <label htmlFor="models">Select Model</label>
      <select name="modelId" id="models" onChange={handleModification}>
        <option>--Please select model--</option>
        {data?.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default ModelsList
