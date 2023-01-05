import { check } from "../Check/check"

const Engine = ({ ress }) => {
  const obj = ress["cars_internalcombustionengine"]
    ? ress["cars_internalcombustionengine"]
    : {}

  const generator = (ress, str) => {
    const result = ress[str]
    if (result) {
      return (
        <p>
          <span>{check(str)}:</span>
          {result}
        </p>
      )
    }
  }

  return (
    <>
      {ress["cars_internalcombustionengine"] && (
        <>
          <h3>Engine</h3>
          <div>
            {Object.keys(obj)
              .filter((key) => key !== "id")
              .map((key) => generator(obj, key))}
          </div>
        </>
      )}
    </>
  )
}

export default Engine
