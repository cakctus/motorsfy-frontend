import { useState, useRef, useEffect, useContext } from "react"
import Context from "../../formContext"
import { ReactSortable } from "react-sortablejs"
import { useClearState } from "../../../../hooks/useClearState"
import store from "../../../../store/store"

type Props = {
  carPhotos: (photos: any) => void
}

const CreateCarPhotosForm = ({ carPhotos }: Props) => {
  const context = useContext(Context)
  const [uploadedImage, setUploadedImage] = useState<any[]>([])
  const [uploadedImage2, setUploadedImage2] = useState<any>([])
  const [fileName, setFileName] = useState<any>([])
  const divRef = useRef<HTMLDivElement>(null!)
  // const [handleValue] = useClearState(context?.clearState, setUploadedImage2)

  let arr: any = []

  function readFiles(file: any) {
    return new Promise((resolve, reject) => {
      let f = new FileReader()

      f.onload = () => resolve(f.result)

      f.onerror = () => reject(f)

      f.readAsDataURL(file)
    })
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
    // console.log([...e.target.files])
    e.stopPropagation()
    e.preventDefault()
    let dt = e.dataTransfer
    // let files = dt.files
    let files = [...e.target.files]

    for (let i: any = 0; i < files.length; i++) {
      // arr.push(readFiles(files[i]))
      const obj: any = {}
      obj["img"] = files[i]
      arr.push(files[i])
      setUploadedImage2(arr)
      setFileName((prev: any) => [...prev, files[i].name])
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
    // Promise.all(arr).then((result) => {
    //   const arr: any = []
    //   // result.map((item, index) => {
    //   //   return (obj[index] = item)
    //   // })
    //   for (let i = 0; i < result.length; i++) {
    //     const obj: any = {}
    //     obj["img"] = result[i]
    //     arr.push(obj)
    //   }
    //   setUploadedImage2(arr)
    //   setUploadedImage(Object.assign({}, result))
    // })
  }

  function output(text: any): void {
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

  return (
    <>
      <div
        id="output"
        ref={divRef}
        className="dragNdropDiv"
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e)}
        style={{ width: "500px" }}
      >
        <div>
          <label htmlFor="file">Choose File</label>
          <input
            type="file"
            name="file"
            id="file"
            multiple
            onChange={(e) => onDrop(e)}
          />
        </div>
      </div>
      <div>
        <ReactSortable
          id="imgContainer"
          list={uploadedImage2}
          setList={setUploadedImage2}
        >
          {uploadedImage2.map((item: any, index: number) => (
            <div key={index}>
              <img className="img" src={item.img} alt="" width="250" />
              <br />
              <span>{fileName[index]}</span>
            </div>
          ))}
        </ReactSortable>
      </div>
    </>
  )
}

export default CreateCarPhotosForm
