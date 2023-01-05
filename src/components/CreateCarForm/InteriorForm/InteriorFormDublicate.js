import React, { useState, useContext, useEffect } from "react"
import Context from "../formContext"
import ImageTrimsInteriorForm from "./ImageTrimsForm/ImageTrimsInteriorForm"
import Modal from "./ImageTrimsForm/Modal"
import "./style.scss"

const InteriorFormDublicate = ({ item, index }) => {
  const appContext = useContext(Context)
  const [val, setVal] = useState([[]])
  const [imageTrims, setImageTrims] = useState()
  const [imageTrimsInterior, setImageTrimsInterior] = useState()
  const [listOfInteriorTrim, setListOfInteriorTrim] = useState([])
  const [modal, setModal] = useState(false)

  const handleVal = () => {
    const value = [...val, []]
    setVal(value)
  }

  useEffect(() => {
    appContext?.carImageTrims(imageTrims, imageTrimsInterior)
  }, [imageTrims, imageTrimsInterior])

  const saveAndAdd = () => {
    handleVal()
    appContext?.trimInteriorFunc()
  }

  useEffect(() => {
    setVal(() => {
      if (!appContext?.clearState) {
        return [[]]
      }
    })
  }, [!appContext?.clearState])

  return (
    <>
      <div className="trims-images" onClick={() => setModal(true)}>
        {listOfInteriorTrim.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <img src={item.interior} width="100" />
              <br />
            </React.Fragment>
          )
        })}
      </div>

      {item[index] === true && modal && (
        <Modal
          setVisible={setModal}
          listOfInteriorTrim={listOfInteriorTrim}
        ></Modal>
      )}

      {item[index] !== true &&
        val.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <ImageTrimsInteriorForm
                setImageTrimsInterior={setImageTrimsInterior}
                saveAndAdd={saveAndAdd}
                setImageTrims={setImageTrims}
                listOfInteriorTrim={listOfInteriorTrim}
                setListOfInteriorTrim={setListOfInteriorTrim}
                modal={modal}
                setModal={setModal}
                item={item}
                index={index}
              />
            </React.Fragment>
          )
        })}
    </>
  )
}

export default InteriorFormDublicate
