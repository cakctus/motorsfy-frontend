import { useState } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { registrationSlice, loginSlice } from "../../../features/auth/authSlice"
import "./style.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user = useAppSelector((state) => state.auth)

  console.log(user)

  const dispatch = useAppDispatch()

  const handleSignIn = (e) => {
    e.preventDefault()
    dispatch(loginSlice({ email: email, password: password }))
  }

  return (
    <>
      <form method="post">
        <h1 className="form-title">Sign in</h1>
        <section>
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
        </section>
        <section>
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
          <button
            id="toggle-password"
            type="button"
            aria-label="Show password as plain text. Warning: this will display your password on the screen."
          >
            Show password
          </button>
          <div id="password-constraints">
            Eight or more characters, with at least one&nbsp;lowercase and one
            uppercase letter.
          </div>
        </section>
        <div className="form-footer">
          <div className="footer-item">Create account</div>
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
