import { NavLink } from "react-router-dom"

const LoginRoutes = () => {
  return (
    <>
      <NavLink className="navbar__links" to="/login">
        Sign in
      </NavLink>

      <NavLink className="navbar__links" to="/registration">
        Sign up
      </NavLink>
    </>
  )
}

export default LoginRoutes
