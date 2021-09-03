import React from "react";
import Header from "./Homepage/Header";
import Viewer from "./All_Pages/Viewer";
import AboutSection from "./Homepage/AboutSection";
import Features from "./Homepage/Features";
import Footer from "./All_Pages/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Viewer message="Welcome You" />
      <AboutSection />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
