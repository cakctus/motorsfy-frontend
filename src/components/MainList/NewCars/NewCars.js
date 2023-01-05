import { useState, useEffect, useRef } from "react"
import { useGetNewCarsQuery } from "../../../redux/mainCategory"
import NewCarsListItems from "./NewCarsListItems"
import GenerationModel from "../../Generations/GenerationModel/GenerationModel"
import Modifications from "../../Modifications/Modifications"

const NewCars = () => {
  const { data = [], isLoading, isFetching } = useGetNewCarsQuery()
  const [isModal, setIsModal] = useState(false)
  const [generationId, setGenerationId] = useState(null)
  const [h, setH] = useState(0)
  const height = useRef(null)
  const [cars, setCars] = useState([])
  const [fetching, setFetching] = useState(false)
  const [page, setPage] = useState(10)
  const [isTop, setIsTop] = useState(0)

  useEffect(() => {
    setCars(data.data?.slice(0, page))
  }, [data.data])

  useEffect(() => {
    document.addEventListener("wheel", handleWheel)
    return () => document.removeEventListener("whell", handleWheel)
  }, [])

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

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (data.data.length === 0) {
    return (
      <div>
        <div>No posts</div>
      </div>
    )
  }

  const handleModal = (id) => {
    setIsModal(true)
    setGenerationId(id)
  }

  function handleWheel(e) {
    if (height.current?.contains(e.target)) {
      setH(height.current.clientHeight)
    }
  }

  console.log(data, "data")
  console.log(cars, "cars")

  return (
    <div>
      <div
        onClick={() => window.scrollTo(0, 0)}
        id="myBtn"
        style={{ display: isTop > 400 ? "block" : "none" }}
      >
        <button>Top</button>
      </div>
      {cars !== undefined &&
        cars.map((item, index) => {
          return (
            <NewCarsListItems
              item={item}
              key={item.id}
              handleModal={handleModal}
            />
          )
        })}

      {isModal && (
        <GenerationModel
          setVisible={setIsModal}
          isModal={isModal}
          h={h}
          setH={setH}
        >
          <div id="generations" ref={height}>
            <Modifications generationId={generationId} />
          </div>
        </GenerationModel>
      )}
    </div>
  )
}

export default NewCars
