import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header id="header" className="navbar navbar-expand-md navbar-sticky-top navbar-center fixed-top">
      <div className="container d-flex align-items-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="logo mr-auto">
          <img
            src="http://dabangbistro.com/assets/img/logo.png"
            className="img-fluid"
          />
        </h1>
        <nav className="nav-menu navbar-collapse d-none d-lg-block" id= "navbarResponsive">
          <ul classNAme="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/special">Specials</Link>
            </li>
            <li>
              <Link to="/catering">Catering</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/loyalty">Loyalty Program</Link>
            </li>
            <li>
              <Link to="/menu">Menu / Order Online</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
