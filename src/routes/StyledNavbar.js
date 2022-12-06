import { useState, useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"
import LoginRoutes from "./LoginRoutes"

const StyledNavbar = () => {
  const [auth, setAuth] = useState(false)
  let activeStyle = {
    textDecoration: "underline",
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true)
    }
  }, [auth])

  return (
    <>
      <header className="header">
        <NavLink
          className="navbar__links"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        {auth ? (
          <NavLink
            className="navbar__links"
            to="/logout"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Logout
          </NavLink>
        ) : (
          <LoginRoutes
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          />
        )}

        <NavLink
          className="navbar__links"
          to="/form"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Form
        </NavLink>
        <NavLink
          className="navbar__links"
          to="/mycars"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          My Cars
        </NavLink>
        <NavLink
          className="navbar__links"
          to="/selected-car"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Selected Car
        </NavLink>
      </header>

      <Outlet />
    </>
  )
}

export default StyledNavbar
