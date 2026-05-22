import React, { useState } from "react";
import "../Style/Navbar.css";
import logo from "../assets/logo.png";
import teamPhoto from "../assets/group.png";
import awardsImg from "../assets/award.png";

function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 450);
  };

  const handleNavigate = (path) => {
    handleClose();
    setTimeout(() => {
      onNavigate(path);
    }, 450);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img
            src={logo}
            alt="logo"
            className={`logo ${menuOpen ? "logo--white" : ""}`}
            onClick={() => onNavigate("/")}
            style={{ cursor: "pointer" }}
          />

          <div className="menu-box" onClick={() => setMenuOpen(true)}>
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="menu-text">MENU</span>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className={`menu-overlay ${closing ? "menu-overlay--closing" : ""}`}
        >
          <img src={logo} alt="logo" className="overlay-logo" />

          <div className="close-box" onClick={handleClose}>
            <div className="close-icon">
              <span></span>
              <span></span>
            </div>
            <span className="menu-text">CLOSE</span>
          </div>

          <div className="overlay-inner">
            <div className="overlay-links">
              <div className="link-column">
                <h3 className="col-title">Services</h3>
                <ul>
                  <li onClick={() => handleNavigate("/uiux-design")}>
                    UI / UX Design
                  </li>
                  <li onClick={() => handleNavigate("/web-development")}>
                    Web Development
                  </li>
                  <li onClick={() => handleNavigate("/app-development")}>
                    App Development
                  </li>
                  <li onClick={() => handleNavigate("/saas-development")}>
                    Saas Development
                  </li>
                  <li onClick={() => handleNavigate("/digital-marketing")}>
                    Digital Marketing
                  </li>
                  <li onClick={() => handleNavigate("/graphic-design")}>
                    Graphic Design
                  </li>
                  <li onClick={() => handleNavigate("/video-editing")}>
                    Video Editing
                  </li>
                </ul>

                <h3 className="col-title second-title">Our Product</h3>
                <ul>
                  <li
                    onClick={() =>
                      window.open("https://lookit.mpeoplesnet.com", "_blank")
                    }
                  >
                    Look it
                  </li>

                  <li
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.makkal.calendar",
                        "_blank",
                      )
                    }
                  >
                    Makkal nalkattai
                  </li>
                  <li>HR Management</li>
                </ul>
              </div>

              <div className="link-column">
                <h3 className="col-title">Resources</h3>
                <ul>
                  <li onClick={() => handleNavigate("/")}>Case Study</li>
                  <li onClick={() => handleNavigate("/blogs-page")}>Blog</li>
                </ul>

                <h3 className="col-title second-title">Company</h3>
                <ul>
                  <li onClick={() => handleNavigate("/about-us")}>
                    About Us
                  </li>
                  <li onClick={() => handleNavigate("/team-page")}>Team</li>
                  <li onClick={() => handleNavigate("/career-page")}>
                    Career
                  </li>
                </ul>
              </div>
            </div>

            <div className="overlay-right">
              <img src={teamPhoto} alt="Team" className="team-photo" />
              <p className="team-desc">
                We design seamless, user-centered experiences that simplify
                complex workflows and improve product usability across web and
                mobile platforms.
              </p>

              <div className="awards-row">
                <img src={awardsImg} alt="Award 1" className="award-single" />
                <img src={awardsImg} alt="Award 2" className="award-single" />
                <img src={awardsImg} alt="Award 3" className="award-single" />
              </div>

              <p className="awards-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;