import { useEffect } from "react"
import BaseRouter from "./routes/routes"

function App() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // dispatch(checkAuthSlice())
    }
  }, [])

  return (
    <>
      <BaseRouter />
    </>
  )
}

export default App
