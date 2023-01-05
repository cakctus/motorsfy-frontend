export const generator = (ress, str) => {
  const result = ress[str]
  if (result) {
    return (
      <p>
        <span>{check}:</span>
        {result}
      </p>
    )
  }
}
