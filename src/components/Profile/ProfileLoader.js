const ProfileLoader = () => {
  const user = JSON.parse(localStorage.getItem("token"))
  return (
    <>
      <div className="profile-header"></div>
      <div className="container">
        <div className="header-intro">
          <div className="header-intro-item header-intro-item-img">
            <div className="header-intro-item-img"></div>
          </div>
          <div className="header-intro-item header-intro-item-right">
            <div className="profile-profile">
              <h2>Profile</h2>
            </div>
            <div className="header-intro-item-right">
              <h5>Update your photo and persoanal details.</h5>
            </div>
          </div>

          <div className="header-intro-item header-intro-left">
            <div className="header-intro-item-left">
              <button className="header-intro-button-cancle">Cancel</button>
            </div>
            <div className="header-intro-item-left">
              <button className="header-intro-button-save">Save</button>
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
              defaultValue={user?.email}
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
              defaultValue={user?.username === "null" ? "" : user?.username}
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
              defaultValue={user?.firstName === "null" ? "" : user?.firstName}
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
              defaultValue={user?.lastName === "null" ? "" : user?.lastName}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileLoader
