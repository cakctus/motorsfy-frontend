import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logoutSlice } from "../../../features/auth/authSlice"

const Logout = () => {
  const dispatch = useDispatch()
  return (
    <>
      <h2>Logout</h2>
      <Link to="/" onClick={() => dispatch(logoutSlice())}>
        Logout
      </Link>
    </>
  )
}

export default Logout
