import "./style.scss"

const TableAnimation = () => {
  const data = [...Array(20)].map((x) => 0)
  return (
    <div className="datatable-container">
      <h2>Longest Range Electric Cars</h2>
      <table className="datatable">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Range</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((_, index) => {
            return (
              <tr key={index}>
                <td
                  className="span1"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderBottomLeftRadius: "15px",
                  }}
                >
                  <span id="span-loader"></span>
                </td>
                <td>
                  <span className="span2"></span>
                </td>
                <td className="span3">
                  <span id="span-loader"></span>
                </td>
                <td className="span4">
                  <span id="span-loader"></span>
                </td>
                <td
                  className="span5"
                  style={{
                    borderTopRightRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <span id="span-loader"></span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableAnimation
