import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic here (API call, email service, etc.)
  };

  return (
    <div className="container section-padding">
      <h2 className="section-title text-center">{t("contact.title")}</h2>
      <form
        onSubmit={handleSubmit}
        className="p-5"
        style={{
          borderRadius: "18px",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            {t("contact.email")}
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            {t("contact.message")}
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            placeholder={t("contact.placeholder")}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="w-100 text-center">
          <button type="submit" className="dark-primary-button m-auto">
            {t("contact.send")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
