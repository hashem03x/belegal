import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const { t } = useTranslation(); // Use translation hook

  return (
    <footer className="layout-bg-theme section-padding text-white">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3">
            <img src={logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <h5 className="text-white-50 fw-bold">{t("footer.quick_links")}</h5>
            <ul className="quick-links">
              <li>
                <Link to="/services">{t("footer.services")}</Link>
              </li>
              <li>
                <Link to="/about-us">{t("footer.about_us")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("footer.contact_us")}</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <h5 className="text-white-50 fw-bold">{t("footer.services")}</h5>
            <ul className="quick-links">
              <li>Incorporation L.L.C/ OPC</li>
              <li>Incorporation JSC</li>
              <li>
                <Link to="/contact">{t("footer.contact_us")}</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <h5 className="text-white-50 fw-bold">{t("footer.social_media")}</h5>
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
                  href="https://www.facebook.com/YourPage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877f2" />
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://www.instagram.com/YourPage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
