import { useContext } from "react"
import Context from "../buildContext"
import { useDispatch } from "react-redux"
import {
  changeOptionId,
  changeOptionItemId,
} from "../../../features/selectedCar/selectedCarSlice"

const Options = () => {
  const { togleType, handleOptionsId, urls, carsListId, optionsTypeToggle } =
    useContext(Context)
  const dispatch = useDispatch()

  const optionCategoryId = (index, title) => {
    handleOptionsId(index, title)
    dispatch(changeOptionId(index))
  }

  const optionCategoryItem = (index) => {
    dispatch(changeOptionItemId(index))
  }

  return (
    <div
      className="options-container"
      style={{
        display: togleType === "Options" ? "block" : "none",
      }}
    >
      <div className="options-category-list">
        <div
          className="options-category"
          onClick={(e) => optionCategoryId(0, e.target.textContent)}
        >
          All
        </div>

        {urls[carsListId].options.map((item, index) => {
          return (
            <div
              className="options-category"
              key={index}
              onClick={(e) => optionCategoryId(index, e.target.textContent)}
            >
              {item.category}
            </div>
          )
        })}
      </div>

      <div className="options-items">
        {optionsTypeToggle.category === "All"
          ? urls[carsListId].options.map((item) => {
              return item.optionList.map((item, index) => {
                return (
                  <div
                    className="options-item"
                    key={index}
                    onClick={() => optionCategoryItem(item)}
                  >
                    <img src={item.image} className="options-img" alt="" />
                    <p className="options-title">{item.title}</p>
                    <p className="options-price">{item.price}</p>
                    <p className="options-description">{item.description}</p>
                  </div>
                )
              })
            })
          : urls[carsListId].options
              .filter((item) => item.category === optionsTypeToggle.category)[0]
              .optionList.map((item, index) => {
                return (
                  <div
                    className="options-item"
                    key={index}
                    onClick={() => optionCategoryItem(item)}
                  >
                    <img src={item.image} className="options-img" alt="" />
                    <p className="options-title">{item.title}</p>
                    <p className="options-price">{item.price}</p>
                    <p className="options-description">{item.description}</p>
                  </div>
                )
              })}
        {/* {urls[carsListId].options
              .filter(
                (item: any) => item.category === optionsTypeToggle.category
              )[0]
              .optionList.map((item: any, index: any) => {
                return (
                  <div className="options-item" key={index}>
                    <img src={item.image} className="options-img" alt="" />
                    <p className="options-title">{item.title}</p>
                    <p className="options-price">{item.price}</p>
                    <p className="options-description">{item.description}</p>
                  </div>
                )
              })} */}
      </div>
    </div>
  )
}

export default Options
