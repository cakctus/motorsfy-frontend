import { Link } from "react-router-dom"
import "./style.scss"

const MainList = () => {
  return (
    <div className="container">
      <div className="main-list">
        <div className="main-item new-cars">
          <img
            className="main-item-img"
            src="http://localhost:5000/main/new-ford.jpg"
            alt="new cars"
          />
          <div className="main-list-title">
            <Link to="/new">New Cars</Link>
          </div>
        </div>
        <div className="main-item body-cars">
          <img
            className="main-item-img"
            src="http://localhost:5000/main/body.webp"
            alt="search cars"
          />
          <div className="main-list-title">
            <Link to="/body">Search Cars By Body</Link>
          </div>
        </div>
        <div className="main-item speed-cars">
          <img
            className="main-item-img"
            src="http://localhost:5000/main/fast.jpg"
            alt="faster cars"
          />
          <div className="main-list-title">
            <Link to="/fast">Fastest Accelerating Cars</Link>
          </div>
        </div>
        <div className="main-item range-cars">
          <img
            className="main-item-img"
            src="http://localhost:5000/main/ev.jpg"
            alt="top ev by range"
          />
          <div className="main-list-title">
            <Link to="/evrange">Longest Range Electric Cars</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainList
