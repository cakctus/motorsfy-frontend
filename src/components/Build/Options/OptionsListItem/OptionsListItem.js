import { useState } from "react"
import { useDispatch } from "react-redux"
import {
  changeOptionItemId,
  deleteOptionItem,
} from "../../../../features/selectedCar/selectedCarSlice"

const OptionsListItem = ({ item }) => {
  const { image, title, price, description } = item
  const [isSelected, setIsSelected] = useState(false)
  const dispatch = useDispatch()

  const addCategoryItem = () => {
    setIsSelected(true)
    dispatch(changeOptionItemId(item))
  }

  const removeCategoryItem = () => {
    setIsSelected(false)
    dispatch(deleteOptionItem(title))
  }

  return (
    <div className="options-item">
      <img src={image} className="options-img" alt="" />
      <p className="options-title">{title}</p>
      <p className="options-price">{price}</p>
      <p className="options-description">{description}</p>
      {isSelected ? (
        <p onClick={removeCategoryItem}>remove</p>
      ) : (
        <p onClick={addCategoryItem}>add</p>
      )}
    </div>
  )
}

export default OptionsListItem
