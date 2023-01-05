import { useState, useRef, useEffect, useContext } from "react"
import Context from "../../formContext"
import { ReactSortable } from "react-sortablejs"
import Modal from "./Modal"
import { useClearState } from "../../../../hooks/useClearState"
import store from "../../../../store/store"

const CreateCarPhotosForm = ({ carPhotos }) => {
  const context = useContext(Context)
  const [uploadedImage, setUploadedImage] = useState([])
  const [uploadedImage2, setUploadedImage2] = useState([])
  const [fileName, setFileName] = useState([])
  const divRef = useRef(null)
  const [modal, setModal] = useState(false)
  const file = useRef(null)
  // const [handleValue] = useClearState(context?.clearState, setUploadedImage2)

  let arr = []

  function readFiles(file) {
    return new Promise((resolve, reject) => {
      let f = new FileReader()

      f.onload = () => resolve(f.result)

      f.onerror = () => reject(f)

      f.readAsDataURL(file)
    })
  }

  const onDragEnter = (e) => {
    divRef.current.textContent = ""
    e.stopPropagation()
    e.preventDefault()
  }

  const onDragOver = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const onDrop = (e) => {
    // console.log([...e.target.files])
    e.stopPropagation()
    e.preventDefault()
    let dt = e.dataTransfer
    // let files = dt.files
    let files = [...e.target.files]

    for (let i = 0; i < files.length; i++) {
      const obj = {}
      obj["img"] = files[i]
      arr.push(readFiles(files[i]))
      // arr.push(files[i])
      setFileName((prev) => [...prev, files[i].name])
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
    Promise.all(arr).then((result) => {
      const arr = []
      // result.map((item, index) => {
      //   return (obj[index] = item)
      // })
      for (let i = 0; i < result.length; i++) {
        const obj = {}
        obj["img"] = result[i]
        arr.push(obj)
      }
      setUploadedImage2(arr)
      setUploadedImage(Object.assign({}, result))
    })
  }

  function output(text) {
    // divRef.current!.textContent += text
  }

  useEffect(() => {
    if (uploadedImage2) {
      carPhotos(uploadedImage2)
    }
  }, [uploadedImage2])

  useEffect(() => {
    setUploadedImage2(() => {
      if (context?.clearState) {
        return [{}]
      } else return uploadedImage2
    })
  }, [context?.clearState])

  const handleInput = () => {
    const f = file.current
    f?.click()
  }

  return (
    <>
      <div
        id="output"
        ref={divRef}
        className="dragNdropDiv"
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e)}
      >
        <label onClick={handleInput}>Choose File</label>
        <div style={{ background: "#3B3B3B" }}>
          <input
            type="file"
            name="file"
            id="file"
            multiple
            onChange={(e) => onDrop(e)}
            // ref={file}
            // className="hidden"
          />
          {uploadedImage2.length >= 1 && (
            <>
              <p onClick={() => setModal(true)}>
                saved {uploadedImage2.length} files
              </p>
            </>
          )}
        </div>
      </div>

      {modal && (
        <Modal setVisible={setModal}>
          <ReactSortable
            id="imgContainer"
            list={uploadedImage2}
            setList={setUploadedImage2}
          >
            {uploadedImage2.map((item, index) => {
              return (
                <div key={index}>
                  <img className="img" src={item.img} alt="" width="250" />
                  <br />
                  <span>{fileName[index]}</span>
                </div>
              )
            })}
          </ReactSortable>
        </Modal>
      )}
    </>
  )
}

export default CreateCarPhotosForm
