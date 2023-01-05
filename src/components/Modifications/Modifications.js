import React, { memo } from "react"
// import { useParams } from "react-router-dom"
import { useGetModificationsQuery } from "../../redux/carsApi"
import { Link } from "react-router-dom"

const Modifications = ({ generationId }) => {
  // const { generationId } = useParams()
  const { data = [], isLoading } = useGetModificationsQuery(generationId)

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
          <React.Fragment key={item.id}>
            <article key={item.id}>
              <div>
                <img
                  src={`http://localhost:5000/${item.image}`}
                  alt=""
                  width="300"
                />
              </div>
              <Link to={`/modification/${item.id}`}>
                <h1>{item.name}</h1>
              </Link>
            </article>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default memo(Modifications)
