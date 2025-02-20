import React from "react";
import overview_img from "../../assets/illustrations/Sandy_Tech-13_Single-09.jpg";
import { useTranslation } from "react-i18next";

function Overveiw() {
  const { t } = useTranslation();

  return (
    <section data-aos="fade-right" className="overview section-padding position-relative layout-bg-theme">
      <div className="container">
        <h3 className="text-center text-white section-title">{t("overview.title")}</h3>
        <div className="row d-flex align-items-center">
          <div className="col-md-5 col-sm-12">
            <img src={overview_img} style={{ borderRadius: "18px" }} className="img-fluid" alt="Overview" />
          </div>
          <div className="text-white fs-5 col-md-7 col-12">
            <p>{t("overview.description")}</p>
            <button className="dark-primary-button mt-4">{t("overview.learnMore")}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overveiw;
