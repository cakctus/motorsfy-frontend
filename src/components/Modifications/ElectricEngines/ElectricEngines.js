import React, { useState, useEffect } from "react"
import { check } from "../Check/engine"

const ElectricEngines = ({ ress }) => {
  const [res, setRes] = useState(
    ress["cars_modification_electric_engine"]
      ? ress["cars_modification_electric_engine"].map(
          (obj) => obj.cars_electricengine
        )
      : []
  )
  const obj = ress["cars_modification_electric_engine"]
    ? ress["cars_modification_electric_engine"]
    : {}

  const generator = (ress, str, index) => {
    const entries = Object.entries(ress)

    const { location, power, system_power, system_troque, torque } =
      Object.fromEntries(entries)

    if (location) {
      return (
        <p key={index}>
          <span>Location:</span>
          {location}
        </p>
      )
    }

    if (power) {
      return (
        <p key={index}>
          <span>Power:</span>
          {power}
        </p>
      )
    }
    if (system_power) {
      return (
        <p key={index}>
          <span>System power:</span>
          {system_power}
        </p>
      )
    }

    if (torque) {
      return (
        <p key={index}>
          <span>Torque:</span>
          {torque}
        </p>
      )
    }

    if (system_troque) {
      return (
        <p key={index}>
          <span>System power:</span>
          {system_power}
        </p>
      )
    }
  }

  return (
    <>
      {ress["cars_modification_electric_engine"].length && (
        <>
          <h3>Electric Engines</h3>
          {res.map((obj, index) => {
            return (
              <React.Fragment key={index}>
                {generator(obj, index)}
              </React.Fragment>
            )
          })}
        </>
      )}
    </>
  )
}

export default ElectricEngines
