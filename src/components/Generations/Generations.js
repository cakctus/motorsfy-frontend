import { useState, useRef, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGetGenerationsMainQuery } from "../../redux/carsApi"
import { Link } from "react-router-dom"
import GenerationModel from "./GenerationModel/GenerationModel"
import Modifications from "../Modifications/Modifications"

const Generations = () => {
  const { modelId } = useParams()
  const { data = [], isLoading } = useGetGenerationsMainQuery(modelId)
  const [isModal, setIsModal] = useState(false)
  const [generationId, setGenerationId] = useState(null)
  const [h, setH] = useState(0)
  const height = useRef(null)
  const [trigger, setTrigger] = useState(false)

  const i = document.getElementById("generations")
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
      // console.log(height.current.clientHeight)
    }
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

export default Generations
