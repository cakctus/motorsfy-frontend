import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { registration, login, logout } from "../../services/authServices"
import axios from "axios"

const initialState = {
  user: {},
  isAuth: false,
  isLoading: false,
  error: "",
}

export const registrationSlice = createAsyncThunk(
  "api/registration",
  async (payload, { fulfillWithValue }) => {
    try {
      const response = await registration(payload.email, payload.password)
      const data = await response.data

      if (!data.statusText === "OK") throw new Error("Server Error")

      // localStorage.setItem("token", data.accessToken)
      return data
    } catch (error) {
      fulfillWithValue(error.message)
    }
  }
)

export const loginSlice = createAsyncThunk(
  "api/login",
  async (payload, { fulfillWithValue, dispatch }) => {
    try {
      const response = await login(payload.email, payload.password)
      const data = await response.data

      if (!data.statusText === "OK") throw new Error("Server Error")

      // const user = {
      //   isAuth: data.isAuth,
      //   email: data.user.email,
      //   isActivated: data.user.isActivated,
      // }
      localStorage.setItem("token", JSON.stringify(data.accessToken))
      // localStorage.setItem("user", user)
      dispatch(setUser(data))
      return data
    } catch (error) {
      fulfillWithValue(error.message)
    }
  }
)

export const logoutSlice = createAsyncThunk(
  "api/logout",
  async (_, { fulfillWithValue, dispatch }) => {
    try {
      const response = await logout()
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      return response
    } catch (error) {
      fulfillWithValue(error.message)
    }
  }
)

export const checkAuthSlice = createAsyncThunk("api/checkauth", async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/refresh", {
      withCredentials: true,
    })
    const data = await response.data
    localStorage.setItem("token", data.accessToken)
  } catch (error) {}
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      localStorage.setItem("user", JSON.stringify(action.payload))
    },
    logoutUser(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(registrationSlice.pending, (state, action) => {
      state.isLoading = "Loading..."
    })
    builder.addCase(registrationSlice.fulfilled, (state, action) => {
      state.isLoading = "Done"
      state.user = action.payload
      state.isAuth = true
    })
    builder.addCase(registrationSlice.rejected, (state, action) => {
      state.error = action.payload
    })
    builder.addCase(loginSlice.pending, (state, action) => {
      state.isLoading = "Loading..."
    })
    builder.addCase(loginSlice.fulfilled, (state, action) => {
      state.isLoading = "Done"
      state.user = action.payload
      state.isAuth = true
    })
    builder.addCase(loginSlice.rejected, (state, action) => {
      state.error = action.payload
    })
    builder.addCase(logoutSlice.fulfilled, (state) => {
      state.user = {}
      state.isAuth = false
    })
  },
})

const { setUser, logoutUser } = authSlice.actions

export default authSlice.reducer
