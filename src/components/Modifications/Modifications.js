import React, { memo } from "react"
// import { useParams } from "react-router-dom"
import { useGetModificationsQuery } from "../../redux/carsApi"
import { Link } from "react-router-dom"
import "./style.scss"

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
    <div className="modifications-modal-item">
      <h1>
        {data.length ? (
          <>
            {data[0]?.cars_generation?.name} Generations List
            {data[0]?.start_prod} - {data[0]?.end_prod}
            <div>
              <img
                src={`http://localhost:5000/${data[0]?.cars_generation?.image}`}
                alt={`${data[0]?.cars_generation?.name}`}
                width="300"
              />
            </div>
          </>
        ) : (
          "Sorry no data yet."
        )}
      </h1>

      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <article className="modifications-item" key={item.id}>
              <Link to={`/modification/${item.id}`}>
                <h1>{item.name}</h1>
                <h2>
                  {item?.start_prod} - {item?.end_prod}
                </h2>
              </Link>
            </article>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default memo(Modifications)
