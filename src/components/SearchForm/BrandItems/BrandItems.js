import React from "react"

const BrandItems = ({ brand }) => {
  return (
    <option value={brand.id} name={brand.id}>
      {brand.name}
    </option>
  )
}

export default React.memo(BrandItems)
