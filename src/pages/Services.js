import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const [activeTab, setActiveTab] = useState("business");

  const services = {
    business: [
      { name: "Incorporation L.L.C/ OPC", price: "10,000 L.E" },
      { name: "Incorporation JSC", price: "15,000 L.E" },
      { name: "MSMEDA Registration", price: "6,000 L.E" },
      { name: "Trade-Mark Registration", price: "8,000 L.E" },
    ],
    legal: [
      { name: "Legal Opinion", price: "Starting from 8,000 L.E" },
      { name: "Shareholder Agreement", price: "Starting from 40,000 L.E" },
      { name: "SAAS Agreement", price: "Starting from 15,000 L.E" },
      { name: "Partnership Agreement", price: "Starting from 9,000 L.E" },
    ],
    tax: [
      { name: "TAX Card Renewal", price: "2,500 L.E" },
      { name: "TAX Return + Annual Budget", price: "Starting from 10,000 L.E" },
      { name: "VAT Registration", price: "Starting from 3,000 L.E" },
      { name: "Annual Audit", price: "Starting from 10,000 L.E" },
    ],
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: "var(--body-color)", padding: "20px", borderRadius: "8px" }}>
      <h2 className="text-center mb-4" style={{ color: "var(--primary-color)" }}>Be Legal Services</h2>
      <ul className="nav nav-tabs" style={{ borderColor: "var(--primary-color)" }}>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "business" ? "active" : ""}`}
            onClick={() => setActiveTab("business")}
            style={{ color: "var(--primary-color)" }}
          >
            Business Services
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "legal" ? "active" : ""}`}
            onClick={() => setActiveTab("legal")}
            style={{ color: "var(--primary-color)" }}
          >
            Legal Services
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "tax" ? "active" : ""}`}
            onClick={() => setActiveTab("tax")}
            style={{ color: "var(--primary-color)" }}
          >
            Tax & Finance
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3">
        <div className="tab-pane fade show active">
          <ul className="list-group">
            {services[activeTab].map((service, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between" style={{ backgroundColor: "var(--section-primary-background-color)", color: "white" }}>
                <span>{service.name}</span>
                <strong>{service.price}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Services;
