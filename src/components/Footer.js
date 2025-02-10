import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="layout-bg-theme section-padding text-white">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3">
            <img src={logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <h5 className="text-white-50 fw-bold">Quick links</h5>
            <ul className="quick-links">
              <li>
                <Link to="/services">Services </Link>
              </li>
              <li>
                <Link to="/services">About us </Link>
              </li>
              <li>
                <Link to="/services">Contact us </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <h5 className="text-white-50 fw-bold">Services</h5>
            <ul className="quick-links">
              <li>Incorporation L.L.C/ OPC</li>
              <li>Incorporation JSC</li>
              <li>
                <Link to="/services">Contact us </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <h5 className="text-white-50 fw-bold">Contact us</h5>
            <ul className="d-flex align-items-center mt-3">
              <li className="me-3">
                <a
                  href="https://wa.me/201029018357"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://wa.me/201029018357"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877f2" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201029018357"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </footer>
  );
}

export default Footer;
