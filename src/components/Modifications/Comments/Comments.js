import { useState } from "react"
import {
  usePostCommentMutation,
  useGetCommentQuery,
} from "../../../redux/carsApi"
import "./style.scss"

const Comments = ({ modificationId, commentsData }) => {
  const [comment, setComment] = useState("")

  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("token")) !== null
      ? JSON.parse(localStorage.getItem("token")).userId
      : null
  )
  const { data = [], isLoading, isError } = useGetCommentQuery(modificationId)
  const [postComment, resultComment] = usePostCommentMutation()

  const handleComment = (event) => {
    setComment(event.target.value)
  }

  const sendComment = () => {
    postComment({ comment, modificationId, userId })
    setComment("")
  }

  const handleLogin = () => {
    alert("Please Login")
  }

  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000)

    var interval = seconds / 31536000

    if (interval > 1) {
      return Math.floor(interval) + " years"
    }
    interval = seconds / 2592000
    if (interval > 1) {
      return Math.floor(interval) + " months"
    }
    interval = seconds / 86400
    if (interval > 1) {
      return Math.floor(interval) + " days"
    }
    interval = seconds / 3600
    if (interval > 1) {
      return Math.floor(interval) + " hours"
    }
    interval = seconds / 60
    if (interval > 1) {
      return Math.floor(interval) + " minutes"
    }
    return Math.floor(seconds) + " seconds"
  }

  return (
    <>
      <div className="comments-container">
        <div className="comment-user">
          <div className="letter">
            {userId !== null ? (
              <span>{JSON.parse(localStorage.getItem("token"))?.email[0]}</span>
            ) : (
              <span>A</span>
            )}
          </div>
          <div className="background"></div>
        </div>
        <input
          className="comments-commnetsInput"
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={userId !== null ? handleComment : handleLogin}
        />
        <button
          className="comments-button"
          onClick={userId !== null ? sendComment : handleLogin}
        >
          Post
        </button>
      </div>
      {commentsData &&
        commentsData.map((comment, index) => {
          return (
            <div className="comments-container" key={index}>
              <div className="comment-user">
                <div className="letter">{comment.user.email[0]}</div>
                <div className="background"></div>
              </div>
              <div className="comment-content">{comment.comment}</div>

              <div className="comment-created">
                {timeSince(new Date(comment.created))} ago
              </div>
            </div>
          )
        })}
    </>
  )
}

export default Comments
