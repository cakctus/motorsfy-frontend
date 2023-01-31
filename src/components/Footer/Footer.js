import "./style.scss"
import { Link } from "react-router-dom"
import YouTubeIcon from "@mui/icons-material/YouTube"
import TwitterIcon from "@mui/icons-material/Twitter"
import { TikTokIcon } from "./TikTokIcon"
import PinterestIcon from "@mui/icons-material/Pinterest"

const Footer = () => {
  return (
    <footer className="section bg-footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div>
              <h6 className="footer-heading text-uppercase text-white">
                Information
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <Link to="/">Pages</Link>
                </li>
                <li>
                  <Link to="/">Our team</Link>
                </li>
                <li>
                  <Link to="/">Feuchers</Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <h6 className="footer-heading text-uppercase text-white">
                Ressources
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <Link to="/">Monitoring Grader</Link>
                </li>
                <li>
                  <Link to="/">Video Tutorial</Link>
                </li>
                <li>
                  <Link to="/">Term &amp; Service</Link>
                </li>
                <li>
                  <Link to="/">Zeeko API</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <h6 className="footer-heading text-uppercase text-white">Help</h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <Link to="/registration">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Services</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <h6 className="footer-heading text-uppercase text-white">
                Contact Us
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="mailto:info@motorsfy.com">info@motorsfy.com </a>
                </li>
              </ul>
              <div className="mt-5">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://www.youtube.com/@motorsfy/"
                      target="_blank"
                    >
                      <YouTubeIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/motorsfy" target="_blank">
                      <TwitterIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://tiktok.com/@motorsfy" target="_blank">
                      <TikTokIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://pinterest.com/motorsfy" target="_blank">
                      <PinterestIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
