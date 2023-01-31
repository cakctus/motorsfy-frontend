import { memo } from "react"

const BrandsList = ({ data, handle }) => {
  return (
    <div>
      <label htmlFor="brandId">Select Brand</label>
      <select name="brandId" id="brandId" onChange={handle}>
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
