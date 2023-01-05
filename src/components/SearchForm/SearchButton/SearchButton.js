import { useNavigate } from "react-router-dom"

const SearchButton = () => {
  const navigate = useNavigate()

  const handleButton = () => {
    navigate("/result")
  }

  return (
    <div>
      <button onClick={handleButton}>search</button>
    </div>
  )
}

export default SearchButton
