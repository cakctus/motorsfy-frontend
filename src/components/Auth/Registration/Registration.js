import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { registrationSlice } from "../../../features/auth/authSlice"
import Stack from "@mui/material/Stack"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

import "./style.scss"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Registration = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const user = useSelector((state) => state.auth)
  const [error, setError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      password === password2 &&
      email.length > 0 &&
      password.length > 8 &&
      password2.length > 8
    ) {
      dispatch(registrationSlice({ email: email, password: password }))
      setError(false)
    }

    if (password !== password2) {
      setError(true)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setShowModal(false)
  }

  const handleCloseEmail = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setEmailError(false)
  }

  const handleClosePassword = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setError(false)
  }

  useEffect(() => {
    if (user.isAuth) {
      setShowModal(true)
      setEmail("")
      setPassword("")
      setPassword2("")
    }

    if (user?.error?.message) {
      setEmailError(true)
    }
  }, [user])

  return (
    <>
      <main>
        <form
          onSubmit={handleSubmit}
          method="post"
          encType="application/x-www-form-urlencoded"
        >
          <h1 className="form-title">Sign up</h1>
          {user.isAuth && (
            <>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Snackbar
                  open={showModal}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Alert severity="success">
                    The user has been successfully registered, now you can
                    <Link to="/login">
                      <span className="signin-successfull">sign in</span>
                    </Link>
                  </Alert>
                </Snackbar>
              </Stack>
            </>
          )}
          <div className="input-container">
            <label htmlFor="email">
              <span>Email</span>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {emailError && (
                <>
                  <Stack spacing={2} sx={{ width: "100%" }}>
                    <Snackbar
                      open={emailError}
                      autoHideDuration={6000}
                      onClose={handleCloseEmail}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                    >
                      <Alert severity="error">{user.error.message}</Alert>
                    </Snackbar>
                  </Stack>
                </>
              )}
            </label>
          </div>
          <div className="input-container">
            <label htmlFor="password">
              <span>Password</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              minLength={8}
              aria-describedby="password-constraints"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div id="password-constraints">Eight or more characters.</div>
          </div>
          <div className="input-container">
            <label htmlFor="password2">
              <span>Confirm password</span>
              <input
                id="password2"
                name="password2"
                type="password"
                autoComplete="new-password"
                minLength={8}
                aria-describedby="password-constraints"
                required
                onChange={(e) => setPassword2(e.target.value)}
                value={password2}
              />
              {error && (
                <>
                  <Stack spacing={2} sx={{ width: "100%" }}>
                    <Snackbar
                      open={error}
                      autoHideDuration={6000}
                      onClose={handleClosePassword}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                    >
                      <Alert severity="error">
                        Confirm password is not same as password
                      </Alert>
                    </Snackbar>
                  </Stack>
                </>
              )}
            </label>
            <div id="password-constraints">Eight or more characters.</div>
          </div>
          <div className="form-footer-registration">
            <div className="footer-item">
              <Link to="/login">Already have an account? Signin</Link>
            </div>
            <div className="footer-item">
              <button id="signin">Sign up</button>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}

export default Registration
