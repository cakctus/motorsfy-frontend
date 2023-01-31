import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { registrationSlice, loginSlice } from "../../../features/auth/authSlice"
import Stack from "@mui/material/Stack"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

import "./style.scss"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const handleSignIn = (e) => {
    e.preventDefault()
    dispatch(loginSlice({ email: email, password: password }))
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setError(false)
  }

  useEffect(() => {
    if (user.isAuth) {
      setEmail("")
      setPassword("")
      navigate("/")
    }

    if (user?.error?.message) {
      setError(true)
    }
  }, [user])

  return (
    <>
      {user?.error?.message && (
        <>
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar
              open={error}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Alert severity="info">{user.error.message}</Alert>
            </Snackbar>
          </Stack>
        </>
      )}
      <form method="post">
        <h1 className="form-title">Sign in</h1>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder=" "
            autoComplete="username"
            required=""
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="input-container">
          <label htmlFor="current-password">Password</label>
          <input
            id="current-password"
            name="current-password"
            type="password"
            autoComplete="current-password"
            aria-describedby="password-constraints"
            required=""
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div id="password-constraints">Eight or more characters.</div>
        </div>
        <div className="form-footer-login">
          <div className="footer-item">
            <Link to="/registration">Create account</Link>
          </div>
          <div className="footer-item">
            <button id="signin" onClick={(e) => handleSignIn(e)}>
              Sign in
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login
