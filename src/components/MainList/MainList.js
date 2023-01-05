import { Link } from "react-router-dom"

const MainList = () => {
  return (
    <>
      <Link to="/new">NewCars</Link> <br />
      <Link to="/body">Search Cars By Body</Link> <br />
      <Link to="/fast">Top cars by speed</Link> <br />
      <Link to="/evrange">Top EV by range</Link> <br />
    </>
  )
}

export default MainList
