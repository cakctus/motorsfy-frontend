import { useEffect } from "react"
import BaseRouter from "./routes/routes"
import { checkAuthSlice } from "./features/auth/authSlice"
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuthSlice())
    }
  }, [])

  return (
    <>
      <BaseRouter />
    </>
  )
}

export default App
