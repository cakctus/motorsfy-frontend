import { useState, useEffect } from "react"

export const useClearState = (booleanCheck, setValue) => {
  const handleValue = () => {
    setValue(() => {
      if (booleanCheck) {
        return ""
      }
    })
  }

  useEffect(() => {
    handleValue()
  }, [booleanCheck])

  return [handleValue]
}
