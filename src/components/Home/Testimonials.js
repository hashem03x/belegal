import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ahmed Khaled",
    role: "Startup Founder",
    text: "Be Legal simplified our tax filing and corporate compliance. Their AI-driven platform is a game changer!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah Ali",
    role: "SME Owner",
    text: "Professional, efficient, and affordable legal services. I highly recommend Be Legal!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Mohamed Youssef",
    role: "Investor",
    text: "Their integrated legal and accounting solutions saved us time and effort. Exceptional service!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section data-aos="fade-up" className="section-padding layout-bg-theme">
      <h2 className="text-white text-center section-title">What Our Clients Say</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation   
        pagination={{ clickable: true }}
        autoplay={false}
        // autoplay={{ delay: 3000 }}
        // loop={true} 
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
