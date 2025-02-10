import React from "react";
import overview_img from "../../assets/illustrations/Sandy_Tech-13_Single-09.jpg";

function Overveiw() {
  return (
    <section data-aos="fade-right" className="overview section-padding position-relative layout-bg-theme">
      <div className="container">
        <h3 className="text-center text-white section-title"> Who We Are?</h3>
        <div className="row d-flex align-items-center">
          <div className="col-md-5 col-sm-12">
            <img
              src={overview_img}
              style={{ borderRadius: "18px" }}
              className="img-fluid"
            />
          </div>
          <div className="text-white fs-5 col-md-7 col-12">
            <p>
              Be Legal is a pioneering legal and accounting solutions company
              that integrates technology to streamline business services. Unlike
              traditional firms, we combine legal expertise with financial
              insights to provide seamless, AI-powered solutions for startups,
              SMEs, and investors. Our mission is to simplify compliance,
              enhance efficiency, and empower businesses to focus on growth
              while we handle the complexities of law and finance.
            </p>
            <button className="dark-primary-button mt-4">Learn more about us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overveiw;
