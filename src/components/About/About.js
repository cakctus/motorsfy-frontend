import "./about.css"

const About = () => {
  return (
    <div className="container">
      <section className="about-section">
        <div className="container">
          <div className="row-about">
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1">
                  <img
                    title="motorsfy.com"
                    src="http://localhost:5000/about/car.jpg"
                    className="main-img"
                  />
                </figure>
              </div>
            </div>
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">About Motorsfy</span>
                  <h2>All cars in the world in one site</h2>
                </div>
                <div className="text">
                  motorsfy.com is a comprehensive resource for car enthusiasts
                  and shoppers alike. The site provides detailed technical
                  specifications for a wide range of cars, including make,
                  model, engine type, horsepower, torque, and much more. Whether
                  you're looking to compare different cars or simply want to
                  know more about the vehicle you're considering purchasing,
                  motorsfy.com has you covered. With its user-friendly interface
                  and easy-to-find information, the site makes it easy to find
                  the information you need quickly and efficiently. So if you're
                  in the market for a new car, be sure to check out motorsfy.com
                  for all the information you need to make an informed decision.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
