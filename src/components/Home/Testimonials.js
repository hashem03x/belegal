import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("testimonials.ahmed.name"),
      role: t("testimonials.ahmed.role"),
      text: t("testimonials.ahmed.text"),
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: t("testimonials.sarah.name"),
      role: t("testimonials.sarah.role"),
      text: t("testimonials.sarah.text"),
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: t("testimonials.mohamed.name"),
      role: t("testimonials.mohamed.role"),
      text: t("testimonials.mohamed.text"),
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <section data-aos="fade-up" className="section-padding layout-bg-theme">
      <h2 className="text-white text-center section-title">{t("testimonials.title")}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="swiper-slide text-center d-flex align-items-center">
            <div className="testimonial-card w-50 text-white">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
              <p>{testimonial.text}</p>
              <h5>{testimonial.name}</h5>
              <p className="role">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
