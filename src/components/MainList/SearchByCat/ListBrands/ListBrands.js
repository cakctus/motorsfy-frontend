import { useState, useEffect, memo } from "react"
import BrandsItems from "./BrandsItems"
import { useGetBrandsBodyQuery } from "../../../../redux/mainCategory"
import { useDispatch } from "react-redux"
import { getBodyId } from "../../../../features/getBodyCars/getBodySlice"

const ListBrands = ({ setIsButtonDisable }) => {
  const [popularBrands, setPopularBrands] = useState([])
  const { data, isSuccess } = useGetBrandsBodyQuery()
  const dispatch = useDispatch()

  const popularBrandsList = [
    "audi",
    "bmw",
    "mercedes-benz",
    "volkswagen",
    "tesla",
    "toyota",
    "honda",
  ]

  useEffect(() => {
    setPopularBrands(
      isSuccess &&
        data.filter((item) =>
          popularBrandsList.includes(item.name.toLowerCase())
        )
    )
  }, [data, isSuccess])

  const handleOptions = (event) => {
    setIsButtonDisable(true)
    dispatch(getBodyId(event.target.value))
    // setBodyId(event.target.value)
  }

  return (
    <>
      <div className="search-brands">
        <label htmlFor="cars">Make</label>
        <select name="cars" id="cars" onChange={handleOptions}>
          <option value="null" defaultValue>
            Any
          </option>
          <optgroup label="Top makes">
            {popularBrands.length > 1 &&
              popularBrands?.map((brand) => {
                return (
                  data !== undefined && (
                    <BrandsItems key={brand.id} brand={brand} />
                  )
                )
              })}
          </optgroup>
          <optgroup label="All makes">
            {data !== undefined &&
              data.map((brand) => {
                return (
                  data !== undefined && (
                    <BrandsItems key={brand.id} brand={brand} />
                  )
                )
              })}
          </optgroup>
        </select>
      </div>
    </>
  )
}

export default memo(ListBrands)
