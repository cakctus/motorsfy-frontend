import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "./components/CreateCarForm/Form"
import Form2 from "./components/Form2"
import OptionListForm from "./components/CreateCarForm/OptionsForm/OptionListForm/OptionListForm"
import Build from "./components/Build"
import Login from "./components/Auth/Login/Login"
import Registration from "./components/Auth/Registration/Registration"
import { useAppDispatch } from "./hooks/hooks"
import { checkAuthSlice } from "./features/auth/authSlice"
import BaseRouter from "./routes/routes"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // dispatch(checkAuthSlice())
    }
  }, [])
  return (
    <>
      <BaseRouter />
    </>
  )
}

export default App
