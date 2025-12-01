import React from "react";
import Navbar from "../components/Navbar";
import Auth from "../components/Auth";
import Footer from "../components/Footer";

const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        <Auth />
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
