import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        <Banner />
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
