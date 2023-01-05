import { Link } from "react-router-dom"
import { useTopCarsBySpeedQuery } from "../../../redux/mainCategory"
import TableAnimation from "./TableAnimation/TableAnimation"
import "./style.css"

const TopBySpeed = () => {
  const { data, isLoading } = useTopCarsBySpeedQuery()

  console.log(data)

  if (isLoading) {
    return <TableAnimation />
  }
  // return <TableAnimation />

  return (
    <div className="datatable-container">
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
                  <Link to={`/result/modification/${item.id}`}>
                    {item.cars_generation.name} ({item.start_prod})
                  </Link>
                </td>
                <td>{item.cars_performance.acceleration_0_100_km_h}/s</td>
                <td>{item.cars_performance.acceleration_0_60_mph}/s</td>
                <td
                  style={{
                    borderTopRightRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <img
                    src={`http://localhost:5000/${item.image}`}
                    alt=""
                    width="50"
                    height="50"
                  />
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
