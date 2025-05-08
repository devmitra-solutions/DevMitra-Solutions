import React from 'react';
import Header from "../Compoments/Header";
import Footer from "../Compoments/Footer";
import AboutHeader from "./About/AboutHeader";
import OurStorySection from "./About/OurStorySection";
import OurValues from "./About/OurValues";
import CallToAction from "./About/CallToAction";


const About = () => {
  return (
    <div>
      <Header />
      <AboutHeader />
      <OurStorySection />
      <OurValues />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default About
