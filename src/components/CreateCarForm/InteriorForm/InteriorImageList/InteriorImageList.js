import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import InteriorImageItem from "./InteriorImageItem"

const InteriorImageList = () => {
  const images = useSelector((state) => state.addedTrims)
  const [value, setValue] = useState([])

  useEffect(() => {
    setValue(images)
  }, [images.length])
  return (
    <div className="trims-images">
      {images.map((item, index) => {
        return (
          <div key={index}>
            <InteriorImageItem item={item} />
          </div>
        )
      })}
    </div>
  )
}

export default InteriorImageList
