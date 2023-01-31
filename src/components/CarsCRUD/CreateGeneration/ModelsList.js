import React from "react"

const ModelsList = ({ data, handleGeneration }) => {
  return (
    <div>
      <label htmlFor="models">Select Model</label>
      <select name="modelId" id="models" onChange={handleGeneration}>
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
