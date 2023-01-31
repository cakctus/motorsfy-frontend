import { memo } from "react"

const BrandsList = ({ data, modification, setModification }) => {
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
      <label htmlFor="brandId">Select Brand</label>
      <select name="brandId" id="brandId" onChange={handleModification}>
        <option>--Please select brand--</option>
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

export default memo(BrandsList)
