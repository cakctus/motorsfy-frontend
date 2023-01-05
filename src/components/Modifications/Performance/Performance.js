import { check } from "../Check/check"

const Performance = ({ ress }) => {
  const obj = ress["cars_performance"] ? ress["cars_performance"] : {}

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
      {ress["cars_performance"] && (
        <>
          <h3>Performance</h3>
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

export default Performance
