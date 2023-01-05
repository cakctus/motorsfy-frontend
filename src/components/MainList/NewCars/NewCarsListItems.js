import React from "react"

const NewCarsListItems = ({ item, handleModal }) => {
  return (
    <div onClick={() => handleModal(item.id)}>
      <img src={`http://localhost:5000//${item.image}`} width="400" alt="" />
    </div>
  )
}

export default NewCarsListItems
