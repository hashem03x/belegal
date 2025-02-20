import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import usa_flag from "../assets/usa.jpg";
import eg_flag from "../assets/eg.jpg";
import {
  faHouse,
  faFileContract,
  faPhone,
  faCircleInfo,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import i18n from "../i18n";
import { t } from "i18next";
function Header() {
  const [lang, setLang] = useState("ar");
  useEffect(() => {
    document.body.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);
  return (
    <header className="" data-aos="fade-down">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink
            className="navbar-brand fw-bold fs-3"
            style={{ color: "var(--primary-color)" }}
            to="/"
          >
            <img src={logo} alt="Logo" className="img-fluid" width={180} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  <FontAwesomeIcon icon={faHouse} className="me-2 ms-2" />
                  {t("header.home")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  <FontAwesomeIcon
                    icon={faFileContract}
                    className="me-2 ms-2"
                  />
                  {t("header.services")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <FontAwesomeIcon icon={faCircleInfo} className="me-2 ms-2" />
                  {t("header.aboutus")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faPhone} className="me-2 ms-2" />
                  {t("header.contactus")}
                </NavLink>
              </li>
              {lang === "en" ? (
                <button
                  className="btn"
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    setLang("ar");
                  }}
                >
                  <img src={eg_flag} width={30} alt="USA_flag" className="me-3" />
                  العربية
                </button>
              ) : (
                <button
                  className="btn"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setLang("en");
                  }}
                >
                  English <img src={usa_flag} width={30} alt="USA_flag" className="me-3" />
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
