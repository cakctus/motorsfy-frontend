import { useTopEvByRangeQuery } from "../../../redux/mainCategory"
import { Link } from "react-router-dom"
import TableAnimation from "./TableAnimation/TableAnimation"

const TopEv = () => {
  const { data, isLoading, isError } = useTopEvByRangeQuery()

  console.log(data, "ev")

  if (isLoading) {
    return <TableAnimation />
  }

  return (
    <div className="datatable-container">
      <table className="datatable">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Range</th>
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
                <td>{item.cars_electriccarshybrids.all_electric_range}/km</td>
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

export default TopEv
