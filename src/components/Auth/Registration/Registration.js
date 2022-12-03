import { useState } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { registrationSlice, loginSlice } from "../../../features/auth/authSlice"

import "./style.css"

const Registration = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user = useAppSelector((state) => state.auth)

  console.log(user)

  const dispatch = useAppDispatch()

  return (
    <>
      <main>
        <form method="post">
          <h1>Sign up</h1>
          {/* <section>
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required=""
              pattern="[\p{L}\.\- ]+"
            />
          </section> */}
          <section>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required=""
            />
          </section>
          <section>
            <label htmlFor="password">Password</label>
            <button
              id="toggle-password"
              type="button"
              aria-label="Show password as plain text. Warning: this will display your password on the screen."
            >
              Show password
            </button>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              minLength={8}
              aria-describedby="password-constraints"
              required=""
            />
            <div id="password-constraints">Eight or more characters.</div>
          </section>
          <button id="sign-up">Sign up</button>
        </form>
      </main>

      <h1 className="mt-2">Sign up</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          placeholder="Password"
        />
      </div>
      <button
        onClick={() =>
          dispatch(registrationSlice({ email: email, password: password }))
        }
      >
        registration
      </button>
    </>
  )
}

export default Registration
