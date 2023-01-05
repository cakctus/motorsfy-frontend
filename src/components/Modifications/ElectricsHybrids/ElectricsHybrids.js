import { check } from "../Check/check"

const ElectricsHybrids = ({ ress }) => {
  const obj = ress["cars_electriccarshybrids"]
    ? ress["cars_electriccarshybrids"]
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
      {ress["cars_electriccarshybrids"] && (
        <>
          <h3>Electrics & Hybrids</h3>
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

export default ElectricsHybrids
