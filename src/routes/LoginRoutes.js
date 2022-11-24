import { NavLink } from "react-router-dom"

const LoginRoutes = () => {
  let activeStyle = {
    textDecoration: "underline",
  }

  return (
    <>
      <NavLink
        className="navbar__links"
        to="/login"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Sign in
      </NavLink>

      <NavLink
        className="navbar__links"
        to="/registration"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Sign up
      </NavLink>
    </>
  )
}

export default LoginRoutes
