import { useState, useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import LoginRoutes from "./LoginRoutes"
import Footer from "../components/Footer/Footer"
import "./style.scss"

const StyledNavbar = () => {
  const [auth, setAuth] = useState(false)
  const authenticated = useSelector((item) => item.auth)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [auth, JSON.stringify(localStorage.getItem("token"))])

  return (
    <>
      <header className="header" id="header">
        <div className="header-item-bg">
          <div className="container">
            <nav className="nav-info">
              <div className="nav-item">
                <NavLink className="navbar__links" to="/">
                  Home
                </NavLink>
                <NavLink className="navbar__links" to="/about">
                  About
                </NavLink>
              </div>

              <div className="nav-item">
                {auth ? (
                  <>
                    <NavLink className="navbar__links" to="/profile">
                      Profile
                    </NavLink>
                    <NavLink className="navbar__links" to="/logout">
                      Logout
                    </NavLink>
                  </>
                ) : (
                  <LoginRoutes />
                )}
              </div>
            </nav>
          </div>
        </div>

        <div className="header-item-link">
          <div className="container">
            <nav className="nav-links">
              <div className="nav-item">
                <NavLink to="/">
                  <span className="motorsfy-logo">
                    <span className="motorsfy-logo-decorator">mo</span>torsfy
                  </span>
                </NavLink>
              </div>

              <div className="nav-item">
                <NavLink className="navbar__links" to="/brands">
                  Cars
                </NavLink>
              </div>

              {/* 
         <NavLink
          className="navbar__links"
          to="/configurator"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Configurator
        </NavLink>
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
        </NavLink> */}
            </nav>
          </div>
        </div>
      </header>

      <div className="content" id="content">
        <Outlet />
      </div>

      <Footer />
    </>
  )
}

export default StyledNavbar
