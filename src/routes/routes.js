import { Routes, Route } from "react-router-dom"
import Build from "../components/Build/Build"
import SelectedCar from "../components/SelectedCar/SelectedCar"
import OptionListForm from "../components/CreateCarForm/OptionsForm/OptionListForm/OptionListForm"
import Form from "../components/CreateCarForm/Form"
import Form2 from "../components/Form2"
import Registration from "../components/Auth/Registration/Registration"
import Login from "../components/Auth/Login/Login"
import Logout from "../components/Auth/Logout/Logout"
import CarsByUser from "../components/CarsByUser/CarsByUser"
import ResetLink from "../components/ResetPassword/ResetLink/ResetLink"
import EnterEmail from "../components/ResetPassword/EnterEmail/EnterEmail"
import SearchForm from "../components/SearchForm/SearchForm"
import Main from "../pages/Main/Main"
import NewCars from "../components/MainList/NewCars/NewCars"
import SearchCarByBody from "../components/MainList/SearchByCat/SearchCarByBody"
import TopBySpeed from "../components/MainList/TopBySpeed/TopBySpeed"
import TopEv from "../components/MainList/TopEv/TopEv"
import SearchResult from "../components/SearchResult/SearchResult"
import SearchResultGeneration from "../components/SearchResult/searchResultGeneration/SearchResultGeneration"
import Brands from "../components/Brands/Brands"
import Models from "../components/Models/Models"
import StyledNavbar from "./StyledNavbar"
import Generations from "../components/Generations/Generations"
import Modifications from "../components/Modifications/Modifications"
import ModificationItem from "../components/Modifications/ModificationItem"

const BaseRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StyledNavbar />}>
          <Route path="/" element={<Main />} />
          <Route path="/result" element={<SearchResult />} />
          <Route path="/result/detail" element={<SearchResultGeneration />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:brandName/" element={<Models />} />
          <Route
            path="/brands/:brandName/model/:modelId"
            element={<Generations />}
          />
          <Route
            path="/brands/:brandName/model/:modelId/generation/:generationId"
            element={<Modifications />}
          />
          <Route
            path="/brands/:brandName/model/:modelId/modification/:modificationId"
            element={<ModificationItem />}
          />
          <Route
            path="/modification/:modificationId"
            element={<ModificationItem />}
          />
          <Route path="/new" element={<NewCars />} />
          <Route
            path="/new/modification/:modificationId"
            element={<ModificationItem />}
          />
          <Route path="/fast" element={<TopBySpeed />} />
          <Route path="/evrange" element={<TopEv />} />
          <Route path="/body" element={<SearchCarByBody />} />
          <Route path="/configurator" element={<Build />} />
          <Route path="/selected-car" element={<SelectedCar />} />
          <Route path="/create-category" element={<OptionListForm />} />
          <Route path="/form" element={<Form />}>
            <Route path="/form2" element={<Form2 />} />
          </Route>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgot-password" element={<EnterEmail />} />
          <Route path="/reset/:link" element={<ResetLink />} />
          <Route path="/mycars" element={<CarsByUser />} />
        </Route>
      </Routes>
    </>
  )
}

export default BaseRouter
