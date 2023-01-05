import { useState, useEffect } from "react"
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
    isLoading,
    isSuccess,
    refetch,
  } = useGetBodySearchResultQuery(searchParams.toString())
  const [fetching, setFetching] = useState(false)
  const [page, setPage] = useState(10)
  const [cars, setCars] = useState(data?.data?.slice(0, 10))
  const [isTop, setIsTop] = useState(0)

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
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      setFetching(true)
      setPage((prev) => prev + 10)
    }
    setIsTop(window.pageYOffset)
  }

  console.log(fetching)
  console.log(cars)
  // console.log(data?.data?.slice(0, 10))

  return (
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
      </div>
      <div>
        <button
          disabled={isButtonDisablem ? false : true}
          onClick={handleSearch}
        >
          search
        </button>
        {isLoading && <h1>Loading ...</h1>}
      </div>
      {isSuccess && <SearchResultBodyType data={cars} />}
    </main>
  )
}

export default SearchCarByBody
