import { useState, useRef, useEffect } from "react"
import { useGetGenerationsQuery } from "../../../redux/carsApi"
import SearchResultModal from "../SearchResultModal/SearchResultModal"
import Modifications from "../../Modifications/Modifications"
import { useSelector } from "react-redux"
import PaginationComponent from "../../Pagination/Pagination"

const SearchResultGeneration = () => {
  const { modelId } = useSelector((item) => item.idGeneration)
  const [page, setPage] = useState(1)
  const { data = [], isLoading } = useGetGenerationsQuery({ modelId, page })
  const [isModal, setIsModal] = useState(false)
  const [generationId, setGenerationId] = useState(null)
  const [h, setH] = useState(0)
  const height = useRef(null)

  console.log(data)

  const handleModal = (id) => {
    setIsModal(true)
    setGenerationId(id)
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

  const handlePagination = (event, value) => {
    window.scrollTo(0, 0)
    setPage(value)
  }

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <div>
      {data.map((item) => {
        return (
          <article key={item.id}>
            <div>
              {/* <Link to={`generation/${item.id}`}> */}
              <img
                src={`http://localhost:5000/${item.image}`}
                alt=""
                width="450"
                onClick={() => handleModal(item.id)}
              />
              {/* </Link> */}
              {isModal && handleModal}
            </div>
            <h1>{item.name}</h1>
          </article>
        )
      })}
      <PaginationComponent
        count={data?.length}
        page={page}
        handleChange={handlePagination}
      />
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
  )
}

export default SearchResultGeneration
