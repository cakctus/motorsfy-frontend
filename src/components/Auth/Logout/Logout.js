import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logoutSlice } from "../../../features/auth/authSlice"

const Logout = () => {
  const dispatch = useDispatch()

  const handleSignOut = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form method="post" onSubmit={handleSignOut}>
        <h1 className="form-title">Logout</h1>

        <div className="form-footer">
          <div className="footer-item">
            <Link to="/" onClick={() => dispatch(logoutSlice())}>
              <button id="signin">Logout</button>
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}

export default Logout
