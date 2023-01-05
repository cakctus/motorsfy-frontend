import React, { useState, useContext, useRef } from "react"
import Context from "./formContext"
import CarInfoForm from "./CreateCarInfoForm/CarInfoForm"
import ExteriorForm from "./ExteriorForm/ExteriorForm"
import InteriorForm from "./InteriorForm/InteriorForm"
import OptionsForm from "./OptionsForm/OptionsForm"
import Preview from "./Preview/Preview"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createCar } from "../../features/createCarForm/createCarFormSlice"

import "./form.scss"

const MainForm = () => {
  const context = useContext(Context)
  const [id, setId] = useState(0)
  const dispatch = useDispatch()

  const arrayHeader = [
    <CarInfoForm />,
    <ExteriorForm />,
    <InteriorForm />,
    <OptionsForm />,
    <Preview />,
  ]

  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        {["Info", "Exterior", "Interior", "Options", "Preview"].map(
          (item, index) => {
            return (
              <p key={index} onClick={() => setId(index)}>
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
                  id: 12,
                })
              )
            }
          >
            create
          </button>
        </div>
        {arrayHeader.map((item, index) => {
          return (
            <div
              style={{ display: id === index ? "block" : "none" }}
              key={index}
            >
              {item}
            </div>
          )
        })}
      </form>
    </>
  )
}

export default MainForm
