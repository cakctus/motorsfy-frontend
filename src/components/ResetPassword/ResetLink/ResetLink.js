import { useState } from "react"
import { useParams } from "react-router"
import axios from "axios"

const ResetLink = () => {
  const [newPassword, setNewPassword] = useState()

  let { link } = useParams()

  const sendPasswordLink = async () => {
    return axios.post(`http://localhost:5000/api/change-password/:${link}`, {
      newPassword,
    })
  }

  console.log(link)
  return (
    <>
      <div>
        <label htmlFor="password1">Enter Password</label>
        <input
          type="password"
          id="password1"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password2">Repeat Password</label>
        <input type="password" id="password2" />
      </div>
      <button onClick={sendPasswordLink}>send password</button>
    </>
  )
}

export default ResetLink
