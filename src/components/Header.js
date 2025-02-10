import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { faHouse , faFileContract, faPhone, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'
function Header() {
  return (
    <header className="" data-aos="fade-down">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-3" style={{color:'var(--primary-color)'}} to="/">
            <img src={logo} alt="Logo" className="img-fluid" width={140}/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                <FontAwesomeIcon icon={faHouse} className="me-2"/>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                <FontAwesomeIcon icon={faFileContract} className="me-2" />
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                <FontAwesomeIcon icon={faCircleInfo} className="me-2"/>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                <FontAwesomeIcon icon={faPhone} className="me-2" />

                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
