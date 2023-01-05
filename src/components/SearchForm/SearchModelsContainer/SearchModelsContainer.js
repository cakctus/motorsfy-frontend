import { useEffect, useState, useRef } from "react"
import ModelsItems from "./ModelsItems/ModelsItems"
import { useDispatch } from "react-redux"
import {
  addModelId,
  addYear,
} from "../../../features/searchForm/searchFormSlice"
import { useGetGenerationsQuery } from "../../../redux/searchApi"
import { useSelector } from "react-redux"
import "./style.scss"

const SearchModelsContainer = ({ isSearch, models }) => {
  const dispatch = useDispatch()
  const [isModelChoose, setIsmodelChoose] = useState([])
  const [skip, setSkip] = useState(true)
  // const search = useSelector((item) => item.search)
  // const {
  //   data = [],
  //   isLoading,
  //   isError,
  // } = useGetGenerationsQuery(
  //   { brandId: search.brandId, modelId: search.modelId, year: search.year },
  //   { skip }
  // )
  const selectRef = useRef(null)

  const handleModel = (event) => {
    // console.log(event.target.value, "handle model")
    dispatch(addModelId(event.target.value))
    setIsmodelChoose(true)
    setSkip(false)
  }

  // let arr = []
  // data.map((item) => arr.push(item.cars_modification))
  // let years = Array.from(new Set(arr.flat().map((item) => item?.start_prod)))

  // const handleYear = (event) => {
  //   console.log(event.target.value, "handle year")
  //   dispatch(addYear(event.target.value))
  //   setSkip(false)
  // }

  useEffect(() => {
    dispatch(addModelId(selectRef?.current?.value))
  }, [selectRef?.current?.value])

  // console.log(years)
  // console.log(data)
  // console.log(arr)
  // console.log(years)
  // console.log(models)

  return (
    <div className="search-brands">
      <label htmlFor="models">Models</label>
      <select
        name="models"
        id="models"
        disabled={isSearch !== true && models === undefined}
        onChange={(event) => handleModel(event)}
        ref={selectRef}
      >
        <optgroup label="All models">
          <option value="all" name="all">
            All
          </option>
        </optgroup>
        <optgroup label="Select model">
          {models &&
            models?.map((model) => {
              // arr.push(model?.cars_modification)
              return <ModelsItems key={model.id} model={model} />
            })}
        </optgroup>
      </select>
      {/* <label htmlFor="models">Year</label>
      <select
        name="year"
        id="year"
        disabled={isModelChoose !== true}
        onChange={(event) => handleYear(event)}
      >
        <optgroup label="All years">
          <option defaultValue value="all" name="all">
            All
          </option>
        </optgroup>
        <optgroup label="Select Year">
          {models &&
            years?.map((year, index) => {
              return (
                <option value={year} name={year} key={index}>
                  {year}
                </option>
              )
            })}
        </optgroup>
      </select> */}
    </div>
  )
}

export default SearchModelsContainer
