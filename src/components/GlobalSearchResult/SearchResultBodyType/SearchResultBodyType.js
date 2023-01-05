import { useState, useRef, useEffect } from "react"
import GenerationModel from "../../Generations/GenerationModel/GenerationModel"
import Modifications from "../../Modifications/Modifications"

const SearchResultBodyType = ({ data = [] }) => {
  const [isModal, setIsModal] = useState(false)
  const [generationId, setGenerationId] = useState(null)
  const [h, setH] = useState(0)
  const height = useRef(null)

  useEffect(() => {
    document.addEventListener("wheel", handleWheel)
    return () => document.removeEventListener("whell", handleWheel)
  }, [])

  const handleModal = (id) => {
    setIsModal(true)
    setGenerationId(id)
  }

  function handleWheel(e) {
    if (height.current?.contains(e.target)) {
      setH(height.current.clientHeight)
    }
  }

  if (data.length === 0) {
    return <div>Sorry not data</div>
  }

  return (
    <div className="search-result">
      {data !== undefined &&
        data.map((item) => {
          return (
            <article key={item.id}>
              <div onClick={() => handleModal(item.id)}>
                {/* <Link to={`generation/${item.id}`}> */}
                <img
                  src={`http://localhost:5000/${item.image}`}
                  alt=""
                  width="450"
                />
              </div>
              <h1>{item.name}</h1>
            </article>
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

export default SearchResultBodyType
