import { useTopEvByRangeQuery } from "../../../redux/mainCategory"
import { Link } from "react-router-dom"
import TableAnimation from "./TableAnimation/TableAnimation"

const TopEv = () => {
  const { data, isLoading, isError } = useTopEvByRangeQuery()

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
      <h2>Longest Range Electric Cars</h2>
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
                  <Link to={`/modification/${item.id}`}>
                    {item.cars_generation.name} ({item.start_prod})
                  </Link>
                </td>
                <td>{item.cars_electriccarshybrids.all_electric_range}/km</td>
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
                    className="td-img"
                  />
                  <div
                    className="td-img-show"
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

export default TopEv
