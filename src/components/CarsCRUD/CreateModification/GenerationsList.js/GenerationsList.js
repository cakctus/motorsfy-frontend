const GenerationsList = ({ data, modification, setModification }) => {
  const handleModification = (e) => {
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
      <label htmlFor="generations">Select Model</label>
      <select
        name="generationId"
        id="generations"
        onChange={handleModification}
      >
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

export default GenerationsList
