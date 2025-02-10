import React from "react";
import Hero from "../components/Home/Hero";
import Overveiw from "../components/Home/Overveiw";
import Features from "../components/Home/Features";
import TestimonialsSection from "../components/Home/Testimonials";
import Contact from "../components/Home/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Overveiw />
      <Features/>
      <TestimonialsSection/>
      <Contact/>
    </>
  );
}

export default Home;
