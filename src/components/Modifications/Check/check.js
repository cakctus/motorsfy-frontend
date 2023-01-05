export const check = (str) => {
  const mystring = str
  const newString = mystring.replace(/_/g, " ")

  return newString.charAt(0).toUpperCase() + newString.slice(1)
}
