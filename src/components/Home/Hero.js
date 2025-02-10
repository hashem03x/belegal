import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import hero_img from '../../assets/hero_image.webp'
function Hero() {
    const navigate = useNavigate();

  return (
    <section className="hero" data-aos="fade-up">
      <div className="container d-flex align-items-center h-100">
        <div className="d-flex flex-column justify-content-center align-items-start ">
          <h2 className="fw-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Empowering Your Legal and Business Needs
          </h2>
          <h5
            className="fw-bold m-auto"
            style={{ color: "var(--body-color)", lineHeight: "1.8" }}
          >
            BeLegal offers tailored legal and financial solutions, helping
            businesses thrive with expert guidance in incorporation, agreements,
            compliance, and more
          </h5>
          <div className="buttons d-flex align-items-center justify-content-center mt-5">
          <button onClick={()=>navigate("/services")} class="dark-primary-button me-4">Get Started</button>
          <button onClick={()=>navigate("contact-us")} class="custom-primary-button" >Request a service</button>
          </div>

          <div className="social-section mt-5 d-flex justify-content-center align-items-center fs-1">
          <FontAwesomeIcon icon={faFacebook} className="me-3" />
          <FontAwesomeIcon icon={faInstagram} className="me-3" />
          <FontAwesomeIcon icon={faWhatsapp} className="me-3" />
          </div>
        </div>
        <div className="">
        <img src={hero_img} className="img-fluid" alt="Hero Image"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
