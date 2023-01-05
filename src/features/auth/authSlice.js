import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { registration, login, logout } from "../../services/authServices"
import axios from "axios"

const initialState = {
  user: {},
  isAuth: false,
  isAuthLogin: "",
  isLoading: false,
  error: "",
}

export const registrationSlice = createAsyncThunk(
  "api/registration",
  async (payload, { fulfillWithValue, dispatch }) => {
    try {
      const response = await registration(payload.email, payload.password)
      const data = await response.data
      if (!data.statusText === "OK") throw new Error("Server Error")
      dispatch(setError(""))
      dispatch(isAuth(true))
      return data
    } catch (error) {
      dispatch(setError(error.response.data))
      dispatch(isAuth(false))
      fulfillWithValue(error.response.data)
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
      console.log(data, "loginSlice")
      dispatch(setUser(data))
      dispatch(setError(""))
      dispatch(isAuthLogin(true))
      return data
    } catch (error) {
      dispatch(setError(error.response.data))
      dispatch(isAuth(false))
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
    console.log(data)
    localStorage.setItem("token", JSON.stringify(data.obj))
  } catch (error) {
    console.log(error)
    localStorage.removeItem("token")
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      localStorage.setItem("token", JSON.stringify(action.payload))
    },
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    isAuth: (state, action) => ({
      ...state,
      isAuth: action.payload,
    }),
    isAuthLogin: (state, action) => ({
      ...state,
      isAuthLogin: action.payload,
    }),
    logoutUser(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(registrationSlice.pending, (state, action) => {
      state.isLoading = "Loading..."
    })
    builder.addCase(registrationSlice.fulfilled, (state, action) => {
      state.isLoading = "Done"
      state.user = action.payload
      // state.isAuth = true
      // state.error = ""
    })
    builder.addCase(registrationSlice.rejected, (state, action) => {
      console.log(action.payload)
      state.error = action.payload
    })
    builder.addCase(loginSlice.pending, (state, action) => {
      state.isLoading = "Loading..."
    })
    builder.addCase(loginSlice.fulfilled, (state, action) => {
      state.isLoading = "Done"
      state.user = action.payload
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

const { setUser, setError, isAuth, isAuthLogin } = authSlice.actions

export default authSlice.reducer
