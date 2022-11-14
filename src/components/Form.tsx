import { useState, useReducer, useRef, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Buffer } from "buffer"
import { ReactSortable, Sortable } from "react-sortablejs"
import SortableList, { SortableItem } from "react-easy-sort"
import arrayMove from "array-move"
import { arrayMoveImmutable } from "array-move"
import CreateCarNameForm from "./CreateCarForm/CreateCarNameForm/CreateCarNameForm"
import CreateCarColorImage from "./CreateCarForm/CreateCarColorImageForm/CreateCarColorImage"
import CreateCarModelForm from "./CreateCarForm/CreateCarModelForm/CreateCarModelForm"
import CreateCarWheelForm from "./CreateCarForm/CreateCarWheelForm/CreateCarWheelForm"
import "./form.scss"

type Props = {}

type State = {
  car: string
}

const initialState = {
  car: "BMW",
  colorImage: "",
  model: "",
  wheel: "",
  photosCars: [],
}

type Action =
  | { type: "CAR"; payload: string }
  | { type: "CARS_PHOTOS"; payload: any }
  | { type: "CAR_PHOTO_IMAGE"; payload: any }
  | { type: "MODEL"; payload: any }
  | { type: "WHEEL"; payload: any }

function reducer(state: any, action: Action) {
  switch (action.type) {
    case "CAR":
      return {
        ...state,
        car: action.payload,
      }
    case "CARS_PHOTOS":
      return {
        ...state,
        photosCars: [...action.payload],
      }
    case "CAR_PHOTO_IMAGE":
      return {
        ...state,
        colorImage: action.payload,
      }
    case "MODEL":
      return {
        ...state,
        model: action.payload,
      }
    case "WHEEL":
      return {
        ...state,
        wheel: action.payload,
      }
  }
}

const Form = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const divRef = useRef<HTMLDivElement>(null!)
  const [uploadedImage, setUploadedImage] = useState<any[]>([])

  let arr: any = []

  function readFiles(file: any) {
    return new Promise((resolve, reject) => {
      let f = new FileReader()

      f.onload = () => resolve(f.result)

      f.onerror = () => reject(f)

      f.readAsDataURL(file)
    })
  }

  const carName = (car: string) => {
    dispatch({ type: "CAR", payload: car })
  }

  const carPhotoImage = (carPhotoImageFile: string) => {
    dispatch({ type: "CAR_PHOTO_IMAGE", payload: carPhotoImageFile })
  }

  const carModel = (model: string) => {
    dispatch({ type: "MODEL", payload: model })
  }

  const carWheel = (wheel: any) => {
    dispatch({ type: "WHEEL", payload: wheel })
  }

  const onDragEnter = (e: any) => {
    divRef.current!.textContent = ""
    e.stopPropagation()
    e.preventDefault()
  }

  const onDragOver = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const onDrop = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    let dt = e.dataTransfer
    let files = dt.files
    let count = files.length
    let formData = new FormData()

    const container = document.getElementById(
      "divImageContainer"
    ) as HTMLDivElement
    for (let i: any = 0; i < files.length; i++) {
      formData.append(files[i].name, files[i])
      const reader = new FileReader()
      arr.push(readFiles(files[i]))

      // reader.addEventListener("load", (event) => {
      //   // const img = document.createElement("img") as HTMLImageElement
      //   // const draggable = document.createElement("div") as HTMLDivElement
      //   // draggable.draggable = true
      //   // draggable.setAttribute("class", "draggable")
      //   // img.setAttribute("data-index", i)
      //   // img.src = reader.result as string
      //   // draggable.append(img)
      //   // container?.append(draggable)
      //   // addEventListener()
      //   arr.push(event?.target?.result as string)
      // })

      reader.readAsDataURL(files[i])

      output(
        " File " +
          i +
          ":\n(" +
          typeof files[i] +
          ") : <" +
          files[i] +
          " > " +
          files[i].name +
          " " +
          files[i].size +
          "\n"
      )
    }

    dispatch({ type: "CARS_PHOTOS", payload: [...arr] })
    Promise.all(arr).then((result) => setUploadedImage([...result]))
  }

  function output(text: any): void {
    divRef.current!.textContent += text
  }

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setUploadedImage((array: any) =>
      arrayMoveImmutable(array, oldIndex, newIndex)
    )
  }

  return (
    <>
      Form
      <CreateCarNameForm carName={carName} />
      <CreateCarColorImage carPhotoImage={carPhotoImage} />
      <CreateCarModelForm carModel={carModel} />
      <CreateCarWheelForm carWheel={carWheel} />
      <div
        id="output"
        ref={divRef}
        className="dragNdropDiv"
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e)}
      ></div>
      <div id="imgContainer">
        <ReactSortable list={uploadedImage} setList={setUploadedImage}>
          {uploadedImage.map((item: any, index: number) => (
            <img className="img" src={item} alt="" width="250" />
          ))}
        </ReactSortable>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default Form
