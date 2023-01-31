import { useState, useEffect } from "react"
import Rating from "@mui/material/Rating"
import { usePutRatingMutation, useGetRatingQuery } from "../../../redux/carsApi"

import "./style.scss"

const RatingComponents = ({ modificationId }) => {
  const rating = useGetRatingQuery(modificationId)
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("token")) !== null
      ? JSON.parse(localStorage.getItem("token")).userId
      : null
  )
  const [putRating] = usePutRatingMutation()

  const handleRating = (value) => {
    putRating({
      id: modificationId,
      rating: value,
      userId: JSON.parse(localStorage.getItem("token")).userId,
    })
  }

  const handleLogin = () => {
    alert("Please Login")
  }

  useEffect(() => {}, [rating.isSuccess])

  return (
    <div className="rating-container">
      <div className="rating-item">
        <Rating
          sx={{
            "& .MuiRating-iconEmpty": {
              color: "#FAAF00",
            },
            "& .MuiRating-icon": {
              fontSize: "1.5rem",
            },
          }}
          name="simple-controlled"
          value={rating.isSuccess ? rating.currentData.res : 0}
          max={10}
          onChange={(event, newValue) => {
            userId !== null ? handleRating(newValue) : handleLogin()
          }}
          size="large"
        />
      </div>
      <div className="rating-item">
        <span>{rating.isSuccess && rating.currentData.res}/</span>
        <span>10</span> <br />
        {/* <span>{rating.isSuccess && rating.currentData.numberOfRating}</span> */}
      </div>
    </div>
  )
}

export default RatingComponents
