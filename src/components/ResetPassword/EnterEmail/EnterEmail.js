import { useState } from "react"
import axios from "axios"

const EnterEmail = () => {
  const [email, setEmail] = useState()

  const sendEmail = async () => {
    return axios.post(`http://localhost:5000/api/forgot-password`, {
      email,
    })
  }

  return (
    <>
      <div>
        <label htmlFor="email">Enter Password</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={sendEmail}>send email</button>
    </>
  )
}

export default EnterEmail
