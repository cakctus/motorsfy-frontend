// import { generator } from "../generator"
import { check } from "../Check/check"

const Dimentions = ({ ress }) => {
  const obj = ress["cars_dimensions"] ? ress["cars_dimensions"] : {}

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
      {ress["cars_dimensions"] && (
        <>
          <h3>Dimentions</h3>
          {Object.keys(obj)
            .filter((key) => key !== "id")
            .map((key, index) => generator(obj, key, index))}
        </>
      )}
    </>
  )
}

export default Dimentions
