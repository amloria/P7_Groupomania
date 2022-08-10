import React from "react";
import { Outlet, Link } from "react-router-dom";

import "../styles/Form.css";
// import bgImage from "../assets/teamwork-groupomania.webp";

import Banner from "../components/Banner";
import Footer from "../components/Footer";


function Auth() {
  return (
    <>
    <Banner />
    <div className="register">
      <Link to="/login">S'identifier</Link>
      <Link to="/signup">S'inscrire</Link>
      {/* <img src={bgImage} className="register-img" alt="Photo d'une équipe de travail" /> */}
    </div>
    
    <Outlet />
    <Footer />
    </>
  )
}

export default Auth;
