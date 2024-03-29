import axios from "axios"

export const API_URL = "http://localhost:5000/api/"

const auth = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

auth.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config
})

auth.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    console.log("ss")
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get(`${API_URL}/refresh`, {
          withCredentials: true,
        })
        console.log("ss")
        localStorage.setItem("token", response.data.refreshToken)
        return auth.request(originalRequest)
      } catch (error) {
        console.log("ssss")
        console.log(error)
      }
    }
    throw error
  }
)

export default auth
