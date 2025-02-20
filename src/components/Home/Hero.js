import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import hero_img from "../../assets/hero_image.webp";
import { useTranslation } from "react-i18next";

function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handlePackageSelect = (packageName) => {
    navigate(`/packages?selected=${packageName}`); // Pass package as query param
  };
  return (
    <section className="hero" data-aos="fade-up">
      <div className="container d-flex align-items-center h-100">
        <div className="d-flex flex-column justify-content-center align-items-start">
          {/* Package Buttons */}
          <div
            className="packages-buttons d-flex flex-wrap mt-4 mb-4"
            style={{ gap: "12px" }}
          >
            <button
              onClick={() => handlePackageSelect("freelancer")}
              className="btn btn-outline-secondary"
            >
              {t("hero.freelancerPack")}
            </button>

            <button
              onClick={() => handlePackageSelect("IT_SW")}
              className=" btn btn-outline-secondary"
            >
              {t("hero.IT&SWPack")}
            </button>

            <button
              onClick={() => handlePackageSelect("Imp_Exp")}
              className=" btn btn-outline-secondary"
            >
              {t("hero.Imp&ExpPack")}
            </button>

            <button
              onClick={() => handlePackageSelect("Contractor")}
              className=" btn btn-outline-secondary"
            >
              {t("hero.ContractorPack")}
            </button>
            <button
              onClick={() => handlePackageSelect("Manufacturing")}
              className=" btn btn-outline-secondary"
            >
              {t("hero.ManufacturingPack")}
            </button>
          </div>
          <h2 className="fw-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {t("hero.title")}
          </h2>
          <h5
            className="fw-bold m-auto"
            style={{ color: "var(--body-color)", lineHeight: "1.8" }}
          >
            {t("hero.subtitle")}
          </h5>
          <div className="buttons d-flex align-items-center justify-content-center mt-5">
            <button
              onClick={() => navigate("/services")}
              className="dark-primary-button me-4 ms-4"
            >
              {t("hero.getStarted")}
            </button>
            <button
              onClick={() => navigate("/contact-us")}
              className="custom-primary-button"
            >
              {t("hero.requestService")}
            </button>
          </div>
          <div className="social-section mt-5 d-flex justify-content-center align-items-center fs-1">
            <FontAwesomeIcon icon={faFacebook} className="me-3" />
            <FontAwesomeIcon icon={faInstagram} className="me-3" />
            <FontAwesomeIcon icon={faWhatsapp} className="me-3" />
          </div>
        </div>
        <div className="">
          <img src={hero_img} className="img-fluid" alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
