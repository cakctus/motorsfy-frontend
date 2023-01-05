import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useGetGenerationsQuery } from "../../redux/searchApi"
import Modifications from "../Modifications/Modifications"
import SearchResultModal from "./SearchResultModal/SearchResultModal"
import { useDispatch } from "react-redux"
import { addModelIdSlice } from "../../features/allModelsIdGeneration/idGenerationsSlice"
import PaginationComponent from "../Pagination/Pagination"

const SearchResult = () => {
  const search = useSelector((item) => item.search)
  const searchParams = new URLSearchParams(search)
  const [page, setPage] = useState(1)
  const { data = [], isLoading } = useGetGenerationsQuery({
    params: searchParams.toString(),
    page: page,
  })
  const [isModal, setIsModal] = useState(false)
  const [generationId, setGenerationId] = useState(null)
  const [h, setH] = useState(0)
  const height = useRef(null)
  const dispatch = useDispatch()

  console.log(data)

  const handleModalAll = (id) => {
    dispatch(addModelIdSlice(id))
  }

  const handleModal = (id) => {
    setIsModal(true)
    setGenerationId(id)
  }

  const handlePagination = (event, value) => {
    window.scrollTo(0, 0)
    setPage(value)
  }

  useEffect(() => {
    document.addEventListener("wheel", handleWheel)
    return () => document.removeEventListener("whell", handleWheel)
  }, [])

  const handleWheel = (e) => {
    if (height.current?.contains(e.target)) {
      setH(height.current.clientHeight)
    }
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }

  if (search.modelId === "all" && data.data.length) {
    return (
      <div>
        {data.data.map((item, index) => {
          console.log(item)
          return (
            <article key={index}>
              <h1>{item.name}</h1>
              <Link to="/result/detail">
                <div>
                  <img
                    src={`http://localhost:5000/${item.image}`}
                    alt=""
                    width="300"
                    onClick={() => handleModalAll(item.id)}
                  />
                </div>
              </Link>
            </article>
          )
        })}
        {data?.data?.length && (
          <PaginationComponent
            count={data?.meta?.lastPage}
            page={page}
            handleChange={handlePagination}
          />
        )}
      </div>
    )
  }

  return (
    <>
      <div>
        {search.modelId !== "all" &&
          data?.data?.length &&
          data.data
            // .filter((item) => item.cars_modification.length !== 0)
            .map((item, index) => {
              console.log(item)
              return (
                <article key={index}>
                  <h1>{item.name}</h1>
                  <div>
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      alt=""
                      width="300"
                      onClick={() => handleModal(item.id)}
                    />
                  </div>
                </article>
              )
            })}
        {isModal && (
          <SearchResultModal
            setVisible={setIsModal}
            isModal={isModal}
            h={h}
            setH={setH}
          >
            <div id="generations" ref={height}>
              <Modifications generationId={generationId} />
            </div>
          </SearchResultModal>
        )}
      </div>
      {data?.data?.length && (
        <PaginationComponent
          count={data?.meta?.lastPage}
          page={page}
          handleChange={handlePagination}
        />
      )}
    </>
  )
}

export default SearchResult
