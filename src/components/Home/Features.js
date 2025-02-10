import {
  faBalanceScale,
  faCogs,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Features() {
  return (
    <section data-aos="fade-left" className="section-padding">
      <div className="container mt-5 text-center">
        <div className="title mb-5 text-center">
          <div className="section-title">
            <h2 >Our Services</h2>
            <p className="mt-3 fs-5" style={{ opacity: "0.7" }}>
              We offer a wide range of services to help you with your legal and
              business needs
            </p>
          </div>
        </div>
        <div className="row cards mt-5 text-center">
          {[
            {
              icon: faRocket,
              title: "Kick start UR Business",
              text: "Lay the foundation for your business with our comprehensive startup package. From company incorporation to essential legal documentation, we provide everything you need to launch confidently and seamlessly.",
            },
            {
              icon: faCogs,
              title: "Cover UR business Need",
              text: "Ensure your business runs smoothly with tailored solutions for legal compliance, trademark registration, and employment structuring. Our services are designed to meet your ongoing operational requirements.",
            },
            {
              icon: faBalanceScale,
              title: "Corp Counsel",
              text: "Access full-spectrum legal and financial support with our Corp Counsel package. Enjoy unlimited EGMs & OGMs, shareholder agreements, tax filing, audits, and much more, ensuring your business stays ahead.",
            },
          ].map((feature, index) => (
            <div className="col-md-6 col-lg-4 col-12 mb-5" key={index}>
              <div className="feature-card">
                <div className="icon-wrapper mb-3">
                  <FontAwesomeIcon
                    color="black"
                    icon={feature.icon}
                    fontSize="40px"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-3">{feature.title}</h5>
                  <p
                    className="card-text text-black"
                    style={{ opacity: "0.7", lineHeight: "1.8" }}
                  >
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
          <button className="text-center btn dark-primary-button m-auto mt-5" style={{width:"20%"}}>View all services</button>
      </div>
    </section>
  );
}

export default Features;
