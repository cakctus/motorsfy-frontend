import { useState, useEffect } from "react"
import { useGetModelsQuery } from "../../redux/searchApi"
import { useSelector } from "react-redux"

function useModels() {
  const [id, setId] = useState(0)
  const search = useSelector((item) => item.search)
  const { data, isLoading, isError } = useGetModelsQuery(search.brandId)

  const s = data

  return {
    models: data || [],
    isLoading,
    isError,
    setId,
    id,
  }
}

export default useModels
