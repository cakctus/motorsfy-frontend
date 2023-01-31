import { useState, useEffect } from "react"
import { useGetBrandsQuery } from "../../redux/searchApi"
import SearchBrandsContainer from "./SearchBrandsContainer/SearchBrandsContainer"
import SearchButton from "./SearchButton/SearchButton"

import "./style.scss"

const SearchForm = () => {
  const { data, isLoading, isSuccess } = useGetBrandsQuery()
  const [isSearch, setIsSearch] = useState(false)

  return (
    <>
      <main className="search-form">
        <div className="search-container">
          <SearchBrandsContainer
            brands={data}
            isSuccess={isSuccess}
            isLoading={isLoading}
            setIsSearch={setIsSearch}
            isSearch={isSearch}
          />
          {/* <SearchModelsContainer models={models} isSearch={isSearch} /> */}
        </div>
      </main>
    </>
  )
}

export default SearchForm
