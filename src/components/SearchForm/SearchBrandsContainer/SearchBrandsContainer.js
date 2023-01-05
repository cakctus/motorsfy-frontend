import { useState, useEffect, memo } from "react"
import BrandItems from "../BrandItems/BrandItems"
import SearchModelsContainer from "../SearchModelsContainer/SearchModelsContainer"
import { useGetModelsQuery } from "../../../redux/searchApi"
import { useSelector, useDispatch } from "react-redux"
import { addBrandId } from "../../../features/searchForm/searchFormSlice"

const SearchBrandsContainer = ({
  brands,
  isSuccess,
  setIsSearch = () => {},
  isSearch = true,
}) => {
  const [popularBrands, setPopularBrands] = useState([])
  const [skip, setSkip] = useState(true)
  const search = useSelector((item) => item.search)
  const { data, isLoading, isError, isUninitialized } = useGetModelsQuery(
    search.brandId,
    {
      skip,
    }
  )
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
        brands.filter((item) =>
          popularBrandsList.includes(item.name.toLowerCase())
        )
    )
  }, [brands, isSuccess])

  const handleOptions = (event) => {
    dispatch(addBrandId(event.target.value))
    setIsSearch(true)
    setSkip(false)
  }

  return (
    <>
      <div className="search-brands">
        <label htmlFor="cars">Make</label>
        <select
          name="cars"
          id="cars"
          onChange={(event) => handleOptions(event)}
        >
          <option value="" defaultValue>
            Any
          </option>
          <optgroup label="Top makes">
            {popularBrands.length > 1 &&
              popularBrands?.map((brand) => {
                return (
                  brands !== undefined && (
                    <BrandItems key={brand.id} brand={brand} />
                  )
                )
              })}
          </optgroup>
          <optgroup label="All makes">
            {brands !== undefined &&
              brands.map((brand) => {
                return (
                  brands !== undefined && (
                    <BrandItems key={brand.id} brand={brand} />
                  )
                )
              })}
          </optgroup>
        </select>
      </div>
      <div>
        <SearchModelsContainer models={data} isSearch={isSearch} />
      </div>
    </>
  )
}

export default memo(SearchBrandsContainer)
