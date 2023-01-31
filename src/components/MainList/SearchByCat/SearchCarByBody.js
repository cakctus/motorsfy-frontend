import { useState, useEffect, useRef } from "react"
import { useGetBodySearchResultQuery } from "../../../redux/mainCategory"
import ListBrands from "./ListBrands/ListBrands"
import ListBody from "./ListBodyTypes/ListBody"
import SearchResultBodyType from "../../GlobalSearchResult/SearchResultBodyType/SearchResultBodyType"
import { useSelector } from "react-redux"
import "./style.scss"

const SearchCarByBody = () => {
  const [isButtonDisablem, setIsButtonDisable] = useState(false)
  const params = useSelector((item) => item.getBody)
  const searchParams = new URLSearchParams(params)
  const {
    data = [],
    isSuccess,
    refetch,
  } = useGetBodySearchResultQuery(searchParams.toString())
  const [fetching, setFetching] = useState(false)
  const [page, setPage] = useState(10)
  const [cars, setCars] = useState(data?.data?.slice(0, 10))
  const [isTop, setIsTop] = useState(0)
  const generationRef = useRef(null)

  const handleSearch = () => {
    refetch()
    setCars(data?.data?.slice(0, 10))
  }

  useEffect(() => {
    if (fetching) {
      setFetching(false)
      setCars(data?.data?.slice(0, page))
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return () => {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    const header = document.querySelector("header")
    const searchContainer = document.querySelector(".search-container")
    const total = header.offsetHeight + searchContainer.offsetHeight

    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      generationRef?.current.scrollHeight + total
    ) {
      setFetching(true)
      setPage((prev) => prev + 10)
    }
    setIsTop(window.pageYOffset)
  }

  return (
    <>
      <div className="search-container">
        <main className="search-form">
          <div
            onClick={() => window.scrollTo(0, 0)}
            id="myBtn"
            style={{ display: isTop > 400 ? "block" : "none" }}
          >
            <button>Top</button>
          </div>
          <div className="search-container">
            <ListBrands setIsButtonDisable={setIsButtonDisable} />
            <ListBody setIsButtonDisable={setIsButtonDisable} />
            <div>
              <button
                disabled={isButtonDisablem ? false : true}
                onClick={handleSearch}
              >
                search
              </button>
            </div>
          </div>
        </main>
      </div>
      <div className="container">
        {isSuccess && (
          <SearchResultBodyType data={cars} generationRef={generationRef} />
        )}
      </div>
    </>
  )
}

export default SearchCarByBody
