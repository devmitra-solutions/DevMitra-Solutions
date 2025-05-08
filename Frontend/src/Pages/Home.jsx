import React from 'react'
import Header from '../Compoments/Header'
import HeroSection from './HeroSection'
import Servises from './Servises'
import TestimonialSlider from "../Pages/TestimonialSlider";
import Footer from '../Compoments/Footer';

const Home = () => {
  return (
    <div>
     <Header />
     <HeroSection />
     <Servises />
     <TestimonialSlider />
     <Footer />
    </div>
  )
}

export default Home
