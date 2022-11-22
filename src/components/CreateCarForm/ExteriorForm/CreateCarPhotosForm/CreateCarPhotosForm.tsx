import { useState, useRef, useEffect } from "react"
import { ReactSortable } from "react-sortablejs"

type Props = {
  carPhotos: (photos: any) => void
}

const CreateCarPhotosForm = ({ carPhotos }: Props) => {
  const [uploadedImage, setUploadedImage] = useState<any[]>([])
  const [uploadedImage2, setUploadedImage2] = useState<any>([])
  const [fileName, setFileName] = useState<any>([])
  const divRef = useRef<HTMLDivElement>(null!)

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
    e.stopPropagation()
    e.preventDefault()
    let dt = e.dataTransfer
    let files = dt.files

    for (let i: any = 0; i < files.length; i++) {
      arr.push(readFiles(files[i]))
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
    Promise.all(arr).then((result) => {
      const arr: any = []
      // result.map((item, index) => {
      //   return (obj[index] = item)
      // })
      for (let i = 0; i < result.length; i++) {
        const obj: any = {}
        obj["img"] = result[i]
        arr.push(obj)
      }
      setUploadedImage2(arr)
      setUploadedImage(Object.assign({}, result))
    })
  }

  function output(text: any): void {
    // divRef.current!.textContent += text
  }

  useEffect(() => {
    if (uploadedImage2) {
      carPhotos(uploadedImage2)
    }
  }, [uploadedImage2])

  return (
    <>
      <div
        id="output"
        ref={divRef}
        className="dragNdropDiv"
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e)}
      ></div>
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
