import React, { useState, useEffect, useContext } from "react"
import Context from "../formContext"
import ImageUpHolsteryForm from "./ImageUpHolsteryForm/ImageUpHolsteryForm"
import ImageUpHolsteryInteriorForm from "./ImageUpHolsteryForm/ImageUpHolsteryInteriorForm"
import InteriorFormDublicate from "./InteriorFormDublicate"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../../../features/addedTrims/checkTrimsSlice"

const InteriorForm = () => {
  const context = useContext(Context)
  const [dynamicAddUpHolstery, setDynamicAddUpHolstery] = useState([[]])
  const dispatch = useDispatch()
  const item = useSelector((state) => state.checkTrims)

  const handleDynamicUpHolstery = () => {
    const res = [...dynamicAddUpHolstery, []]
    setDynamicAddUpHolstery(res)
    dispatch(addItem(true))
  }

  const save = () => {
    context?.interiorCar()
    handleDynamicUpHolstery()
  }

  useEffect(() => {
    setDynamicAddUpHolstery(() => {
      if (!context?.clearState) {
        return [[]]
      }
    })
  }, [!context?.clearState])

  return (
    <>
      {dynamicAddUpHolstery?.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <div className="body">
              <h3>Upholstery</h3>
              <ImageUpHolsteryForm item={item} index={index} />
              <ImageUpHolsteryInteriorForm item={item} index={index} />

              <h3>Trims</h3>
              <InteriorFormDublicate
                dynamicAddUpHolstery={dynamicAddUpHolstery}
                item={item}
                index={index}
              />
            </div>

            {item[index] !== true && (
              <div className="footer">
                <div className="button-save">
                  <button onClick={save}>save</button>
                </div>
              </div>
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}

export default InteriorForm
