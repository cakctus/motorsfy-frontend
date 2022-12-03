import { useContext, useRef } from "react"
import Context from "./formContext"
import CarInfoForm from "./CreateCarInfoForm/CarInfoForm"
import ExteriorForm from "./ExteriorForm/ExteriorForm"
import InteriorForm from "./InteriorForm/InteriorForm"
import OptionsForm from "./OptionsForm/OptionsForm"
import Preview from "./Preview"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createCar } from "../../features/createCarForm/createCarFormSlice"

import "./form.scss"

const MainForm = () => {
  const context = useContext(Context)
  const dispatch = useDispatch()

  // console.log(JSON.parse(localStorage.getItem("user")).userId)

  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        {["Info", "Exterior", "Interior", "Options", "Preview"].map(
          (item, index) => {
            return (
              <p
                key={index}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  context?.setLinkState(e.target.innerText)
                }}
              >
                {item}
              </p>
            )
          }
        )}
      </div>
      <form onSubmit={(e) => e.preventDefault()} onReset={context?.resetForm}>
        <div>
          <button
            onClick={() =>
              dispatch(
                createCar({
                  json: context?.carsList,
                  id: JSON.parse(localStorage.getItem("user")).userId,
                })
              )
            }
          >
            create
          </button>
        </div>
        <div
          className="carinfo-form"
          style={{ display: context?.linkState === "Info" ? "block" : "none" }}
        >
          <CarInfoForm />
        </div>
        <div
          className="exterior-form"
          style={{
            display: context?.linkState === "Exterior" ? "block" : "none",
          }}
        >
          <ExteriorForm />
        </div>
        <div
          className="interior-form"
          style={{
            display: context?.linkState === "Interior" ? "block" : "none",
          }}
        >
          <InteriorForm />
        </div>
        <div
          className="options-form"
          style={{
            display: context?.linkState === "Options" ? "block" : "none",
          }}
        >
          <OptionsForm />
        </div>
        <div
          className="options-form"
          style={{
            display: context?.linkState === "Preview" ? "block" : "none",
          }}
        >
          {/* {context?.cars?.wheel?.length > 0 &&
        context?.cars?.interior?.length > 0 ? ( */}
          <Preview />
          {/* ) : (
          " no data"
        )} */}
        </div>
        <input type="reset" value="add another car" />
      </form>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default MainForm
