export default function checkAnyValues(obj) {
  const array = Object.entries(obj).filter((o) => o[0] !== "id")
  const parsedArray = Object.fromEntries(array)
  const checkedArray = Object.values(parsedArray).every(
    (val) => val === null || val === undefined || val === ""
  )
  return checkedArray
}
