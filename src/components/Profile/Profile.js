import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../redux/profileApi"
import "./style.scss"
import Loader from "./Loader"
import ProfileLoader from "./ProfileLoader"

const Profile = () => {
  const [user, setUset] = useState(JSON.parse(localStorage.getItem("token")))
  const { data, isLoading, refetch } = useGetProfileQuery(user?.userId)
  const navigate = useNavigate()
  const inputFileRef = useRef(null)
  const [photo, setPhoto] = useState(null)
  const [userObject, setUserObject] = useState({
    photo: data?.userPhoto,
    username: data?.username,
    firstName: data?.firstName,
    lastName: data?.lastName,
  })

  useEffect(() => {
    if (user === null) {
      navigate("/login")
    }
  }, [])

  useEffect(() => {
    setUserObject({
      photo: data?.userPhoto,
      username: data?.username,
      firstName: data?.firstName,
      lastName: data?.lastName,
    })
  }, [data])

  if (isLoading) {
    return <ProfileLoader />
  }

  const handleUser = (e) => {
    const name = e.target.name
    const value = e.target.value
    const files = e.target.files
    const type = e.target.type

    setUserObject({
      ...userObject,
      [name]: type === "file" ? files[0] : value,
    })

    if (type === "file") {
      const reader = new FileReader()

      reader.addEventListener("load", () => {
        setPhoto(reader.result)
      })

      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0])
      }
    }
  }

  function handleFiles() {
    const file = inputFileRef.current
    file.click()
  }

  function handleCancle() {
    return window.location.reload()
  }

  async function getPhoto(e) {
    const data = new FormData()
    data.append("userPhoto", userObject?.userPhoto)
    data.append("userId", user.userId)
    data.append("username", userObject.username)
    data.append("firstName", userObject.firstName)
    data.append("lastName", userObject.lastName)
    await fetch("http://localhost:5000/api/update-user-photo", {
      method: "POST",
      body: data,
    })
    setPhoto(null)
    refetch()
  }

  return (
    <>
      <div className="profile-header"></div>
      <div className="container">
        <div className="header-intro">
          <div className="header-intro-item header-intro-item-img">
            <div className="header-intro-item-img">
              {user?.userPhoto !== "" ? (
                <img
                  onClick={handleFiles}
                  className="header-profile-img"
                  src={
                    photo !== null
                      ? photo
                      : `http://localhost:5000/profile/users/${data?.userPhoto}`
                  }
                  alt="profile pic"
                />
              ) : (
                <img
                  onClick={handleFiles}
                  className="header-profile-img"
                  src={
                    photo !== null
                      ? photo
                      : "http://localhost:5000/profile/default.jpg"
                  }
                  alt="default profile pic"
                />
              )}
              <input
                ref={inputFileRef}
                type="file"
                className="hidden-files"
                name="userPhoto"
                onChange={handleUser}
              />
            </div>
          </div>
          <div className="header-intro-item header-intro-item-right">
            <div className="profile-profile">
              <h2>Profile</h2>
              {isLoading && <Loader />}
            </div>
            <div className="header-intro-item-right">
              <h5>Update your photo and persoanal details.</h5>
            </div>
          </div>

          <div className="header-intro-item header-intro-left">
            <div className="header-intro-item-left">
              <button
                onClick={handleCancle}
                className="header-intro-button-cancle"
              >
                Cancel
              </button>
            </div>
            <div className="header-intro-item-left">
              <button onClick={getPhoto} className="header-intro-button-save">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="header-details">
          <div className="header-details-item">
            <label className="header-details-title" htmlFor="userEmail">
              Email
            </label>
            <input
              type="email"
              id="userEmail"
              defaultValue={data?.email}
              readOnly
            />
          </div>
          <div className="header-details-item">
            <p className="header-details-one">Date joined</p>
            <p className="header-details-two">
              {new Date(user?.dateJoined).toDateString()}
            </p>
          </div>
          <div className="header-details-item">
            <label className="header-details-title" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={
                userObject?.username === "null" ? "" : userObject?.username
              }
              onChange={handleUser}
            />
          </div>
          <div className="header-details-item">
            <label className="header-details-title" htmlFor="firstName">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={
                userObject?.firstName === "null" ? "" : userObject?.firstName
              }
              onChange={handleUser}
            />
          </div>
          <div className="header-details-item">
            <label className="header-details-title" htmlFor="lastName">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={
                userObject?.lastName === "null" ? "" : userObject?.lastName
              }
              onChange={handleUser}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
