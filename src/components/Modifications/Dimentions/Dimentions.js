import { check } from "../Check/check"
import checkAnyValues from "../CheckValues/CheckValues"

const Dimentions = ({ ress }) => {
  const obj = ress["cars_dimensions"] ? ress["cars_dimensions"] : {}

  const generator = (ress, str, index) => {
    const result = ress[str]
    if (result) {
      return (
        <dl className="fancy-description-list" key={index}>
          <dt className="item-title-color-mod">{check(str)}</dt>
          <dd>{result}</dd>
        </dl>
      )
    }
  }

  return (
    <>
      {ress["cars_dimensions"] && (
        <>
          {checkAnyValues(obj) || (
            <>
              <h2>Dimentions</h2>
            </>
          )}
          {Object.keys(obj)
            .filter((key) => key !== "id")
            .map((key, index) => generator(obj, key, index))}
        </>
      )}
    </>
  )
}

export default Dimentions
