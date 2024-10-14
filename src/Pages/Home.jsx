import React from 'react'
import Hero from '../Section/hero'
import About from '../Section/about';
import Feature from '../Section/feature';
import GetStarted from '../Section/getStarted';
import Testimonial from '../Section/testimonial';
// import Footer from '../Components/footer';
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Feature />
      <GetStarted />
      <Testimonial />
      
    </div>
  );
}
