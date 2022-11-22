import { useContext } from "react"
import Context from "./formContext"
import CarInfoForm from "./CreateCarInfoForm/CarInfoForm"
import ExteriorForm from "./ExteriorForm/ExteriorForm"
import InteriorForm from "./InteriorForm/InteriorForm"
import OptionsForm from "./OptionsForm/OptionsForm"
import Preview from "./Preview"
import { Outlet } from "react-router-dom"

import "./form.scss"

type Props = {}

const MainForm = (props: Props) => {
  const context = useContext(Context)
  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        {["Info", "Exterior", "Interior", "Options", "Preview"].map(
          (item: string, index: number) => {
            return (
              <p
                key={index}
                onClick={(e: any) => {
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
        style={{ display: context?.linkState === "Options" ? "block" : "none" }}
      >
        <OptionsForm />
      </div>
      <div
        className="options-form"
        style={{ display: context?.linkState === "Preview" ? "block" : "none" }}
      >
        {context?.cars.wheel.length > 0 && context?.cars.interior.length > 0 ? (
          <Preview />
        ) : (
          " no data"
        )}
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default MainForm
