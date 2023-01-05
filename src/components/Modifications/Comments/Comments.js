import { useState } from "react"
import {
  usePostCommentMutation,
  useGetCommentQuery,
} from "../../../redux/carsApi"
import "./style.scss"

const Comments = ({ modificationId, commentsData }) => {
  const [comment, setComment] = useState("")

  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("user")) !== null
      ? JSON.parse(localStorage.getItem("user")).userId
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

  return (
    <>
      <div className="comments-container">
        <div className="comment-user">
          <div className="letter">A</div>
          <div className="background"></div>
        </div>
        <input
          className="comments-commnetsInput"
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={userId !== null ? handleComment : handleLogin}
        />
        <button className="comments-button" onClick={sendComment}>
          Post
        </button>
      </div>
      {commentsData &&
        commentsData.map((comment) => {
          return (
            <div className="comments-container">
              <div className="comment-user">
                <div className="letter">{comment.user.email[0]}</div>
                <div className="background"></div>
              </div>
              <div className="comment-content">{comment.comment}</div>

              <div className="comment-created">{comment.created}</div>
            </div>
          )
        })}
    </>
  )
}

export default Comments
