import axios from "axios"

export const CREATE_URL = "http://localhost:5000/api"

const api = axios.create({
  withCredentials: true,
  baseURL: CREATE_URL,
})

export default api
