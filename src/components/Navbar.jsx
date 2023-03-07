import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light  bg-light sticky-top ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div>
                <span className="navbar-toggler-icon" />
              </div>
            </button>

            <div
              id="navbarTogglerDemo01"
              className="navbar bg-dark text-light px-4 collapse navbar-collapse "
            >
              <a style={{ fontWeight: 900, fontSize: 34 }}>
                <span style={{ color: "yellow" }}>CS</span> ELP
              </a>
              <ul
                style={{ fontWeight: 900, fontSize: 14 }}
                className="nav nav-pills"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#scrollspyHeading1"
                    style={{ color: "white" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#scrollspyHeading2"
                    style={{ color: "white" }}
                  >
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#scrollspyHeading3"
                    style={{ color: "white" }}
                  >
                    Programs
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#scrollspyHeading4"
                    style={{ color: "white" }}
                  >
                    Courses
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#scrollspyHeading4"
                    style={{ color: "white" }}
                  >
                    Contact
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#scrollspyHeading6"
                    style={{ color: "white" }}
                  >
                    Login
                  </a>
                </li>
                
              </ul>
            </div>
          </nav> */}

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
                  href="#scrollspyHeading1"
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
                  href="#scrollspyHeading2"
                  style={{ fontSize: 15, color: "#FFFFFF" }}
                >
                  ABOUT US
                </a>
              </li>
              <hr style={{ color: "#FFFFFF", width: "100" }} />
              <li className="nav-item px-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#scrollspyHeading3"
                  style={{ fontSize: 15, color: "#FFFFFF" }}
                >
                  PROGRAMS
                </a>
              </li>
              <hr style={{ color: "#FFFFFF", width: "100" }} />
              <li className="nav-item px-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#scrollspyHeading4"
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
                  href="#scrollspyHeading5"
                  style={{ fontSize: 15, color: "#FFFFFF" }}
                >
                  CONTACT
                </a>
              </li>
              <hr style={{ color: "#FFFFFF", width: "100" }} />
              <li className="nav-item px-3">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="/login"
                  style={{ fontSize: 15, color: "#FFFFFF" }}
                >
                  LOGIN
                </a>
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
            id="scrollspyHeading1"
          />
          <div className="homeContainer">
            <p>
              “LEARNING DOESN'T JUST "HAPPEN"!{" "}
              <p>IT REQUIRES CAREFUL PLANNING AND IMPLEMENTATION.”</p>{" "}
              <h2>
                EASY WITH OUR <span style={{ color: "#f5a425" }}>CSELP</span>
              </h2>
            </p>

            <button>DISCOVER MORE</button>
          </div>

          <img
            id="scrollspyHeading2"
            src="./assets/banner.jpg"
            className=" home img-fluid"
          />

          <img
            id="scrollspyHeading3"
            src="./assets/girl.jpg"
            className=" home img-fluid"
          />

          <img
            id="scrollspyHeading4"
            src="./assets/courseBanner.jpg"
            className="home img-fluid"
          />
          <img
            id="scrollspyHeading5"
            src="./assets/contact-bg.jpg"
            className="home img-fluid"
          />
        </div>
      </div>
    </div>
  );
};
