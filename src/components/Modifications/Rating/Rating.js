import { useState, useEffect } from "react"
import Rating from "@mui/material/Rating"
import { usePutRatingMutation, useGetRatingQuery } from "../../../redux/carsApi"

const RatingComponents = ({ modificationId }) => {
  const rating = useGetRatingQuery(modificationId)
  const [ratingState, setRatingState] = useState(0)
  const [putRating] = usePutRatingMutation()

  const handleRating = (value) => {
    putRating({
      id: modificationId,
      rating: value,
      userId: JSON.parse(localStorage.getItem("user")).userId,
    })
  }

  useEffect(() => {}, [rating.isSuccess])

  console.log(rating.isSuccess && rating.currentData.res)

  return (
    <div>
      <Rating
        name="simple-controlled"
        value={rating.isSuccess ? rating.currentData.res : 0}
        max={10}
        onChange={(event, newValue) => {
          handleRating(newValue)
        }}
      />
      <p>
        <span>{rating.isSuccess && rating.currentData.res}/</span>
        <span>10</span> <br />
        <span>{rating.isSuccess && rating.currentData.numberOfRating}</span>
      </p>
    </div>
  )
}

export default RatingComponents
