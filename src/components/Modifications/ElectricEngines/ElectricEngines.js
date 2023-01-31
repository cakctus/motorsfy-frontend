import React, { useState } from "react"

const ElectricEngines = ({ ress }) => {
  const [res, setRes] = useState(
    ress["cars_modification_electric_engine"]
      ? ress["cars_modification_electric_engine"].map(
          (obj) => obj.cars_electricengine
        )
      : []
  )
  // const obj = ress["cars_modification_electric_engine"]
  //   ? ress["cars_modification_electric_engine"]
  //   : {}

  const generator = (ress, str, index) => {
    const entries = Object.entries(ress)

    const { location, power, system_power, system_troque, torque } =
      Object.fromEntries(entries)

    if (location) {
      return (
        <dl className="fancy-description-list" key={index}>
          <dt className="item-title-color-mod">Location</dt>
          <dd>{location}</dd>
        </dl>
      )
    }

    if (power) {
      return (
        <dl className="fancy-description-list" key={index}>
          <dt className="item-title-color-mod">Power</dt>
          <dd>{power}</dd>
        </dl>
      )
    }

    if (system_power) {
      return (
        <dl className="fancy-description-list" key={index}>
          <dt className="item-title-color-mod">System power</dt>
          <dd>{system_power}</dd>
        </dl>
      )
    }

    if (torque) {
      return (
        <dl className="fancy-description-list" key={index}>
          <dt className="item-title-color-mod">Torque</dt>
          <dd> {torque}</dd>
        </dl>
      )
    }

    if (system_troque) {
      return (
        <dl className="fancy-description-list" key={index}>
          <dt className="item-title-color-mod">System power</dt>
          <dd>{system_troque}</dd>
        </dl>
      )
    }
  }

  return (
    <>
      {ress["cars_modification_electric_engine"].length ? (
        <>
          <h2 className="item-title">Electric Engines</h2>
          {res.map((obj, index) => {
            return (
              <React.Fragment key={index}>
                {generator(obj, index)}
              </React.Fragment>
            )
          })}
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default ElectricEngines
