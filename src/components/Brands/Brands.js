import { Link } from "react-router-dom"
import { useGetBrandsQuery } from "../../redux/carsApi"

import "./style.scss"
const Brands = () => {
  const { data = [], isLoading } = useGetBrandsQuery()

  if (isLoading) {
    return (
      <div className="container">
        <h3>Loading...</h3>
      </div>
    )
  }

  const images = Array.from(document.querySelectorAll('img[loading="lazy"]'))

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target

          image.src = image.dataset.src
          image.onload = () => image.previousElementSibling.remove()

          imageObserver.unobserve(image)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }

  return (
    <div className="container">
      <div className="breadcrumb">
        <ul className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="brands-list">
        {data.map((item) => {
          return (
            <div className="brands-items" key={item.id}>
              <div>
                <Link to={`${item.name}/`}>
                  <img
                    src={`http://localhost:5000/${item.image}`}
                    data-src={`http://localhost:5000/${item.image}`}
                    loading="lazy"
                    alt="…"
                    width="50"
                    height="50"
                  />
                </Link>
              </div>
              <div>{item.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Brands
