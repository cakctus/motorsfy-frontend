const NewCarsListItems = ({ item, handleModal }) => {
  return (
    <div
      className="generation-item-detail"
      onClick={() => handleModal(item.id)}
    >
      <img src={`http://localhost:5000//${item.image}`} alt="" />
      <h1>{item.name}</h1>
    </div>
  )
}

export default NewCarsListItems
