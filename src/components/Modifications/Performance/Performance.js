import { check } from "../Check/check"
import checkAnyValues from "../CheckValues/CheckValues"

const Performance = ({ ress }) => {
  const obj = ress["cars_performance"] ? ress["cars_performance"] : {}

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
      {ress["cars_performance"] && (
        <>
          {checkAnyValues(obj) || (
            <>
              <h2 className="item-title">Performance</h2>
            </>
          )}
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
