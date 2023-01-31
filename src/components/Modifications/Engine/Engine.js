import { check } from "../Check/check"
import checkAnyValues from "../CheckValues/CheckValues"

const Engine = ({ ress }) => {
  const obj = ress["cars_internalcombustionengine"]
    ? ress["cars_internalcombustionengine"]
    : {}

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
      {ress["cars_internalcombustionengine"] && (
        <>
          {checkAnyValues(obj) || (
            <>
              <h2 className="item-title">Engine</h2>
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

export default Engine
