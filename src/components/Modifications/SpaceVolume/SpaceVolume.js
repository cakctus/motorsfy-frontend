import React from "react"
import { check } from "../Check/check"

const SpaceVolume = ({ ress }) => {
  const obj = ress["cars_spacevolumeweights"]
    ? ress["cars_spacevolumeweights"]
    : {}

  const generator = (ress, str, index) => {
    const result = ress[str]
    if (result) {
      return (
        <p key={index}>
          <span>{check(str)}:</span>
          {result}
        </p>
      )
    }
  }
  return (
    <>
      {ress["cars_spacevolumeweights"] && (
        <>
          <h3>Space & Volume</h3>
          <div>
            {Object.keys(obj)
              .filter((key) => key !== "id")
              .map((key, index) => generator(obj, key, index))}
          </div>
        </>
      )}
    </>
  )
}

export default SpaceVolume
