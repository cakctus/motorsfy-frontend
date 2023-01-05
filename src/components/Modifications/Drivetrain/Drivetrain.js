import { check } from "../Check/check"

const Dimentions = ({ ress }) => {
  const obj = ress["cars_drivetrainbrakessuspension"]
    ? ress["cars_drivetrainbrakessuspension"]
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
      {ress["cars_drivetrainbrakessuspension"] && (
        <>
          <h3>Drivetrain Brakes Suspension</h3>
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

export default Dimentions
