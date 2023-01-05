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
    <div>
      <h1>
        {cars_generation.name} {name}
      </h1>
      <h2>
        {start_prod} - {end_prod}
      </h2>

      <div>
        <img src={`http://localhost:5000/${image}`} width="400" alt="" />
      </div>

      <p>
        <span>Body type:</span>
        {body_type}
      </p>
      <p>
        <span>Seats:</span> {seats} <span>Doors:</span> {doors}
      </p>
      <p>
        <span>Powertrain architecture:</span>
        {powertrain_architecture}
      </p>
    </div>
  )
}

export default Preview
