import { useContext } from "react"
import Context from "../buildContext"
import { useDispatch } from "react-redux"
import {
  changeInteriorId,
  changeimageUpholstery,
  changeimageTrims,
} from "../../../features/selectedCar/selectedCarSlice"

const Interior = () => {
  const {
    clickHandler,
    handleUpHostery,
    togleType,
    toggleInteriorPhoto,
    urls,
    carsListId,
    upHolsteryId,
    trimsId,
    handleTrimId,
  } = useContext(Context)
  const dispatch = useDispatch()

  const upholsteryCar = (index) => {
    handleUpHostery(index)
    changeInteriorId(index)
    changeimageUpholstery(index)
  }

  const trimCar = (index) => {
    handleTrimId(index)
    changeimageTrims(index)
  }

  return (
    <div
      className="interior-container"
      style={{
        display: togleType === "Interior" ? "block" : "none",
      }}
    >
      {toggleInteriorPhoto ? (
        <div className="imgContainer" id="imgContainer" onWheel={clickHandler}>
          <img
            className="imageId"
            src={
              urls[carsListId].interior[upHolsteryId].imageUpholsteryInterior
            }
            alt=""
          />
        </div>
      ) : (
        <div className="imgContainer" id="imgContainer">
          <img
            className="imageId"
            src={
              urls[carsListId].interior[upHolsteryId].trims !== undefined
                ? urls[carsListId].interior[upHolsteryId].trims[trimsId]
                    ?.imageTrimsInterior
                : ""
            }
            alt=""
          />
        </div>
      )}

      {/* interior upholstery */}
      <div className="interior-upHolstery">
        {urls[carsListId].interior.map((item, index) => {
          return (
            <div
              className="interiorUpholsteryImages"
              key={index}
              onClick={() => upholsteryCar(index)}
            >
              <img
                className="interiorUpholsteryImg"
                src={item.imageUpholstery}
                alt=""
              />
            </div>
          )
        })}
      </div>

      {/* interior trims */}
      <div className="interior-trims">
        {urls[carsListId].interior[upHolsteryId].trims !== undefined
          ? urls[carsListId].interior[upHolsteryId].trims.map((item, index) => {
              return (
                <div
                  className="interiorTrimsImages"
                  onClick={() => trimCar(index)}
                >
                  <img
                    className="interiorTrimsImg"
                    src={item.imageTrims}
                    alt=""
                  />
                </div>
              )
            })
          : ""}
      </div>
    </div>
  )
}

export default Interior
