import React, { useState } from "react"

const ElectricEnginess = ({ ress }) => {
  const [res, setRes] = useState(
    ress["cars_modification_electric_engines"]
      ? ress["cars_modification_electric_engines"].map((obj) => obj)
      : []
  )

  const generator = (ress, index) => {
    const entries = Object.entries(ress)

    const { location, power, system_power, system_troque, torque } =
      Object.fromEntries(entries)

    if (location || power || system_power || system_troque || torque) {
      return (
        <>
          <h3>Engine # {index + 1}</h3>
          <dl className="fancy-description-list">
            <dt className="item-title-color-mod">Location</dt>
            <dd className="item-title-color-mod">
              {location ? location : "-"}
            </dd>
          </dl>
          <dl className="fancy-description-list">
            <dt className="item-title-color-mod">Power</dt>
            <dd className="item-title-color-mod">{power ? power : "-"}</dd>
          </dl>
          <dl className="fancy-description-list">
            <dt className="item-title-color-mod">Torque</dt>
            <dd className="item-title-color-mod">{torque ? torque : "-"}</dd>
          </dl>
          <dl className="fancy-description-list">
            <dt className="item-title-color-mod">System power</dt>
            <dd className="item-title-color-mod">
              {system_power ? system_power : "-"}
            </dd>
          </dl>
          <dl className="fancy-description-list">
            <dt className="item-title-color-mod">System torque</dt>
            <dd className="item-title-color-mod">
              {system_troque ? system_troque : "-"}
            </dd>
          </dl>
        </>
      )
    }
  }

  return (
    <>
      {ress["cars_modification_electric_engines"].length ? (
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

export default ElectricEnginess
