import React, { useState, createRef } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "./components/CreateCarForm/Form"
import Form2 from "./components/Form2"
import OptionListForm from "./components/CreateCarForm/OptionsForm/OptionListForm/OptionListForm"
import Build from "./components/Build"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Build />} />
        <Route path="/create-category" element={<OptionListForm />} />
        <Route path="/form" element={<Form />}>
          <Route path="/form2" element={<Form2 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
