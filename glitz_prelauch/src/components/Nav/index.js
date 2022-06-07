import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__white"}`}>
      <div className="nav__contents">
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="Glitz" className="imagelogo" />
          </Link>
        </div>
        <div className="nav__links">
          <button
            className="contact__link"
            onClick={() => (window.location = "mailto:pompeyayodele@gmail.com")}
          >
            Contact
          </button>
          <button className="early__access">Request Early Access</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
