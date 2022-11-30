import { useContext, useRef } from "react"
import Context from "./formContext"
import CarInfoForm from "./CreateCarInfoForm/CarInfoForm"
import ExteriorForm from "./ExteriorForm/ExteriorForm"
import InteriorForm from "./InteriorForm/InteriorForm"
import OptionsForm from "./OptionsForm/OptionsForm"
import Preview from "./Preview"
import { Outlet } from "react-router-dom"

import "./form.scss"

const MainForm = () => {
  const context = useContext(Context)
  const inputEl = useRef(null)

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
      <form onSubmit={(e) => context?.saveForm(e)} onReset={context?.resetForm}>
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
        <input type="reset" />
      </form>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default MainForm
