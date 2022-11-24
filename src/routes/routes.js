import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Build from "../components/Build"
import OptionListForm from "../components/CreateCarForm/OptionsForm/OptionListForm/OptionListForm"
import Form from "../components/CreateCarForm/Form"
import Form2 from "../components/Form2"
import Registration from "../components/Auth/Registration/Registration"
import Login from "../components/Auth/Login/Login"
import Logout from "../components/Auth/Logout/Logout"
import StyledNavbar from "./StyledNavbar"

const BaseRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StyledNavbar />}>
          <Route path="/" element={<Build />} />
          <Route path="/create-category" element={<OptionListForm />} />
          <Route path="/form" element={<Form />}>
            <Route path="/form2" element={<Form2 />} />
          </Route>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </>
  )
}

export default BaseRouter
