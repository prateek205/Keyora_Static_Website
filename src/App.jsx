import React from "react";

import Navbar from "./Components/Layouts/Navbar";
import Footer from "./Components/Layouts/Footer";

import HeroSection from "./Sections/HeroSection";
import CollectionSection from "./Sections/CollectionSection";
import FeaturesSection from "./Sections/FeaturesSection";
import GallerySection from "./Sections/GallerySection";
import TestimonialsSection from "./Sections/TestimonialSection";
import NewsletterSection from "./Sections/NewsLetterSection";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <CollectionSection />
        <FeaturesSection />
        <GallerySection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
};

export default App;
