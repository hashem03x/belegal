import {
  faBalanceScale,
  faCogs,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation();

  const featuresData = [
    {
      icon: faRocket,
      title: t("features.kickstart.title"),
      text: t("features.kickstart.text"),
    },
    {
      icon: faCogs,
      title: t("features.coverNeeds.title"),
      text: t("features.coverNeeds.text"),
    },
    {
      icon: faBalanceScale,
      title: t("features.corpCounsel.title"),
      text: t("features.corpCounsel.text"),
    },
  ];

  return (
    <section data-aos="fade-left" className="section-padding">
      <div className="container mt-5 text-center">
        <div className="title mb-5 text-center">
          <div className="section-title">
            <h2>{t("features.title")}</h2>
            <p className="mt-3 fs-5" style={{ opacity: "0.7" }}>
              {t("features.subtitle")}
            </p>
          </div>
        </div>
        <div className="row cards mt-5 text-center">
          {featuresData.map((feature, index) => (
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
        <button className="text-center btn dark-primary-button m-auto mt-5" style={{ width: "20%" }}>
          {t("features.viewAll")}
        </button>
      </div>
    </section>
  );
}

export default Features;
