import React from "react";

import "./topbar.css";
import picture from "../../assets/pictureTopbar.jpg";
import logo from "../../assets/logo.png";

export default function topbar() {
  return (
    <div className="container-fluid sticky-top">
      <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light text-center">
            <div className="col-lg-3 d-lg-none">
              <a className="navbar-brand" href="/">
                <img className="navbar-img" src={logo} alt=""/>
              </a>
            </div>

            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
              <div className="col-lg-3">
                <ul className="nav-item">
                  <i className="topIcon fab fa-instagram-square"></i>
                  <i className="topIcon fab fa-pinterest-square"></i>
                  <i className="topIcon fab fa-facebook-square"></i>
                  <i className="topIcon fab fa-twitter-square"></i>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="nav-item">
                  <li className="nav-item">HOME</li>
                  <li className="nav-item">ABOUT</li>
                  <li className="nav-item">CONTACT</li>
                  <li className="nav-item">WRITE</li>
                  <li className="nav-item">LOGOUT</li>
                </ul>
              </div>

              <div className="col-lg-3">
                <img className="topImg" src={picture} alt="" />
                <i className="topSearchIcon fas fa-search"></i>
              </div>
            </div>
          </nav>
    </div>
    </div>
  );
}
