import React from "react"

const ModelsItem = ({ model }) => {
  return (
    <option value={model.id} name={model.id}>
      {model.name}
    </option>
  )
}

export default React.memo(ModelsItem)
