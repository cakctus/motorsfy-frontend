import { useParams } from "react-router-dom"
import { useGetModelsQuery } from "../../redux/carsApi"
import { Link } from "react-router-dom"
import "./style.scss"

const Models = () => {
  const { brandName } = useParams()
  const { data = [], isLoading } = useGetModelsQuery(brandName)

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
      <div>
        <div className="breadcrumb">
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link to="/">
                Home <span className="breadcrumb-slash">/</span>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/brands">All brands</Link>
            </li>
          </ul>
        </div>
        <div className="models-list">
          {data.map((item) => {
            return (
              <article className="model-item" key={item.id}>
                <div className="model-item-img">
                  <Link to={`model/${item.id}/`}>
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      data-src={`http://localhost:5000/${item.image}`}
                      loading="lazy"
                      alt={`${item.name}`}
                      width="250"
                    />
                  </Link>
                </div>
                <h1>{item.name}</h1>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Models
