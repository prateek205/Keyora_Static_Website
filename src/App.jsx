import React from "react";
import Navbar from "./Components/Layouts/Navbar";
import HeroSection from "./Sections/HeroSection";
import CollectionSection from "./Sections/CollectionSection";
import FeaturesSection from "./Sections/FeaturesSection";
import GallerySection from "./Sections/GallerySection";
import TestimonialsSection from "./Sections/TestimonialSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <FeaturesSection />
      <GallerySection />
      <TestimonialsSection />
    </>
  );
};

export default App;
