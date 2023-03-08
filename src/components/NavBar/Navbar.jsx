import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top h-23 px-5"
        style={{ backgroundColor: "#162239F2" }}
      >
        <div className="container-fluid">
          <a
            className="text-light "
            style={{ fontWeight: 900, fontSize: 36, textDecoration: "none" }}
          >
            <div className="head">
              {" "}
              <span style={{ color: "#F5A425" }}>CS</span> ELP
            </div>
          </a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item px-4">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="#homeSection"
                  style={{ fontSize: 15, color: "#FFFFFF" }}
                >
                  HOME
                </a>
              </li>
              <hr style={{ color: "#FFFFFF", width: "100" }} />
              <li className="nav-item px-3">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="#aboutusSection"
                  style={{ fontSize: 15, color: "#FFFFFF" }}
                >
                  ABOUT US
                </a>
              </li>
              <hr style={{ color: "#FFFFFF", width: "100" }} />
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  href="#programSection"
                  style={{ fontSize: 15, color: "#FFFFFF" }}
                >
                  PROGRAMS
                </NavLink>
              </li>
              <hr style={{ color: "#FFFFFF", width: "100" }} />
              <li className="nav-item px-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#courseSEction"
                  style={{ fontSize: 15, color: "#FFFFFF" }}
                >
                  COURSES
                </a>
              </li>
              <hr style={{ color: "#FFFFFF", width: "100" }} />
              <li className="nav-item px-3">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="#contactSection"
                  style={{ fontSize: 15, color: "#FFFFFF" }}
                >
                  CONTACT
                </a>
              </li>
              <hr style={{ color: "#FFFFFF", width: "100" }} />
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link active "
                  aria-current="page"
                  to="/login"
                  style={{ fontSize: 15, color: "#FFFFFF" }}
                >
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset={0}
        className="scrollspy-example"
        tabIndex={0}
      >
        <div className="home">
          <div className="overlay"></div>
          <video
            className="home"
            src="./assets/videoBg.mp4"
            autoPlay
            loop
            muted
            id="homeSection"
          />
          <div className="homeContainer">
            <p>
              “LEARNING DOESN'T JUST "HAPPEN"!{" "}
              <p>IT REQUIRES CAREFUL PLANNING AND IMPLEMENTATION.”</p>{" "}
              <h2>
                EASY WITH OUR <span style={{ color: "#f5a425" }}>CSELP</span>
              </h2>
            </p>
            </div>
            <button>DISCOVER MORE</button>
          </div>


          <img
            id="aboutusSection"
            src="./assets/banner.jpg"
            // className=" home img-fluid"
          />

          <img
            id="programSection"
            src="./assets/girl.jpg"
            // className=" home img-fluid"
          />

          <img
            id="courseSEction"
            src="./assets/courseBanner.jpg"
            // className="home img-fluid"
          />

          <img
            id="contactSection"
            src="./assets/contact-bg.jpg"
            // className="home img-fluid"
          />
       
      </div>
    </div>
  );
};
