import { useState, useEffect } from "react"
import { useGetBrandsQuery } from "../../redux/searchApi"
import SearchBrandsContainer from "./SearchBrandsContainer/SearchBrandsContainer"
import SearchButton from "./SearchButton/SearchButton"

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
          <SearchButton />
        </div>
      </main>
    </>
  )
}

export default SearchForm
