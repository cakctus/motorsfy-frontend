import "./style.scss"

const Preview = ({ ress }) => {
  const o = ress
  const exclude = new Set([
    "id",
    "dimensions_id",
    "drivetrain_brakes_suspension_id",
    "generation_id",
    "performance_id",
    "space_volume_weights_id",
    "rating",
    "comment",
    "cars_dimensions",
    "cars_drivetrainbrakessuspension",
    "cars_generations",
    "cars_performance",
    "cars_spacevolumeweights",
    "cars_modification_electric_engines",
    "cars_modification_electric_engine",
  ])

  const {
    body_type,
    cars_generation,
    doors,
    start_prod,
    end_prod,
    seats,
    name,
    powertrain_architecture,
    image,
  } = Object.fromEntries(Object.entries(o).filter((e) => !exclude.has(e[0])))

  return (
    <div className="container">
      <div className="preview-container">
        <h1>
          {cars_generation.name} {name}
        </h1>
        <h2>
          {start_prod} - {end_prod}
        </h2>
        <div>
          <img src={`http://localhost:5000/${image}`} width="400" alt="" />
        </div>
        <div className="basic">
          {body_type || seats || doors || powertrain_architecture === true ? (
            <h2 className="item-title">Basics</h2>
          ) : null}
          <dl className="fancy-description-list">
            {body_type?.length > 0 && (
              <>
                <dt className="item-title-color-mod">Body type</dt>
                <dd> {body_type}</dd>
              </>
            )}
            {seats?.length > 0 && (
              <>
                <dt className="item-title-color-mod">Seats</dt>
                <dd>{seats}</dd>
              </>
            )}
            {doors?.length > 0 && (
              <>
                <dt className="item-title-color-mod">Doors</dt>
                <dd> {doors}</dd>
              </>
            )}
            {powertrain_architecture?.length > 0 && (
              <>
                <dt className="item-title-color-mod">
                  Powertrain architecture:
                </dt>
                <dd>{powertrain_architecture}</dd>
              </>
            )}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Preview
