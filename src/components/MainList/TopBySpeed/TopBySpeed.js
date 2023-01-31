import { useRef } from "react"
import { Link } from "react-router-dom"
import { useTopCarsBySpeedQuery } from "../../../redux/mainCategory"
import TableAnimation from "./TableAnimation/TableAnimation"
import "./style.scss"

const TopBySpeed = () => {
  const { data, isLoading } = useTopCarsBySpeedQuery()
  const showInfoRef = useRef(null)

  if (isLoading) {
    return <TableAnimation />
  }

  const handleMouseOver = (e) => {
    e.target.nextElementSibling.style.display = "block"
  }

  const handleMoouseLeave = (e) => {
    e.target.nextElementSibling.style.display = "none"
  }

  return (
    <div className="datatable-container">
      <h2>Fastest Accelerating Cars</h2>
      <table className="datatable">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>0 100 km/h</th>
            <th>0 60 mph</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td
                  style={{
                    borderTopLeftRadius: "15px",
                    borderBottomLeftRadius: "15px",
                  }}
                >
                  # {index + 1}
                </td>
                <td>
                  <Link to={`/modification/${item.id}`}>
                    {item.cars_generation.name} ({item.start_prod})
                  </Link>
                </td>
                <td>{item.cars_performance.acceleration_0_100_km_h}/s</td>
                <td>{item.cars_performance.acceleration_0_60_mph}/s</td>
                <td
                  className="td-img"
                  style={{
                    borderTopRightRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <img
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMoouseLeave}
                    src={`http://localhost:5000/${item.image}`}
                    alt=""
                    width="50"
                    height="50"
                  />
                  <div
                    className="td-img-show"
                    ref={showInfoRef}
                    style={{
                      position: "absolute",
                      top: `0`,
                      left: "100px",
                      // left: `${coord.left}px`,
                      // right: `${coord.right}px`,
                      // bottom: `${coord.bottom}px`,
                    }}
                  >
                    <div>
                      <img
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMoouseLeave}
                        src={`http://localhost:5000/${item.image}`}
                        alt=""
                      />
                    </div>
                    <p>
                      {item.cars_generation.name} {item.name}
                    </p>

                    {item.cars_performance.acceleration_0_60_mph && (
                      <p>
                        {item.cars_performance.acceleration_0_60_mph}/s 0 - 60
                        mph
                      </p>
                    )}

                    {item.cars_performance.acceleration_0_100_km_h && (
                      <p>
                        {item.cars_performance.acceleration_0_100_km_h}/s 0 -
                        100 km/h
                      </p>
                    )}
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TopBySpeed
