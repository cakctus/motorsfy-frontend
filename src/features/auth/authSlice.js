import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  registration,
  login,
  logout,
  refresh,
} from "../../services/authServices"

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
      await logout()
      localStorage.removeItem("token")
      dispatch(logoutUser(false))
    } catch (error) {
      fulfillWithValue(error.message)
    }
  }
)

export const checkAuthSlice = createAsyncThunk("api/checkauth", async () => {
  try {
    const response = await refresh()
    const data = await response.data
    localStorage.setItem("token", JSON.stringify(data.obj))
  } catch (error) {
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
      isAuth: action.payload,
    }),
    logoutUser: (state, action) => ({
      ...state,
      isAuth: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(registrationSlice.pending, (state, action) => {
      state.isLoading = "Loading..."
    })
    builder.addCase(registrationSlice.fulfilled, (state, action) => {
      state.isLoading = "Done"
      state.user = action.payload
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

const { setUser, setError, isAuth, isAuthLogin, logoutUser } = authSlice.actions

export default authSlice.reducer
