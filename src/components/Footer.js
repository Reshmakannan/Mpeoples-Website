import React from "react";
import "../Style/Footer.css";
import logo from "../assets/logo.png";
import award1 from "../assets/award.png";
import award2 from "../assets/award.png";
import award3 from "../assets/award.png";

const Footer = () => {

  const socialIcons = [
    {
      label: "Instagram",
      svg: (
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 16a3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      ),
    },
    {
      label: "LinkedIn",
      svg: (
        <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.5 6H7v9h2.5V9zm-1.25-3a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 8.25 6zM18 18h-2.5v-4.5c0-1.1-.4-1.75-1.4-1.75-.8 0-1.3.5-1.5 1V18H10V9h2.5v1.2c.5-.8 1.4-1.5 2.8-1.5 2 0 3.2 1.3 3.2 3.8V18z"/>
      ),
    },
    {
      label: "YouTube",
      svg: (
        <path d="M10 15l5.19-3L10 9v6zm11-3c0-2.21-.18-3.8-.55-4.88-.33-1-1.1-1.77-2.1-2.1C17.27 4 12 4 12 4s-5.27 0-6.35.02c-1 .33-1.77 1.1-2.1 2.1C3.18 8.2 3 9.79 3 12s.18 3.8.55 4.88c.33 1 1.1 1.77 2.1 2.1C6.73 20 12 20 12 20s5.27 0 6.35-.02c1-.33 1.77-1.1 2.1-2.1.37-1.08.55-2.67.55-4.88z"/>
      ),
    },
    {
      label: "WhatsApp",
      svg: (
        <path d="M20 12a8 8 0 0 1-12.9 6.2L4 20l1.9-3.1A8 8 0 1 1 20 12zm-8 1.3c1.8 0 3.3-1.5 3.3-3.3S13.8 6.7 12 6.7 8.7 8.2 8.7 10 10.2 13.3 12 13.3z"/>
      ),
    },
    {
      label: "Facebook",
      svg: (
        <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.5 1.6-1.5H17V2h-3c-3 0-4 1.5-4 4.2V10H7v4h3v8h3z"/>
      ),
    },
  ];

  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="MPeoples" className="footer-logo-img" />
            <span className="footer-logo-text">MPeoples</span>
          </div>

          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="footer-awards">
            <img src={award1} alt="Award 1" />
            <img src={award2} alt="Award 2" />
            <img src={award3} alt="Award 3" />
          </div>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="/uiux-design">UI / UX Design</a></li>
            <li><a href="/web-development">Web Development</a></li>
            <li><a href="/app-development">App Development</a></li>
            <li><a href="/saas-development">SaaS Development</a></li>
            <li><a href="/digital-marketing">Digital Marketing</a></li>
            <li><a href="/graphic-design">Graphic Design</a></li>
            <li><a href="/video-editing">Video Editing</a></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/case-study">Case Study</a></li>
            <li><a href="/blogs-page">Blog</a></li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Our Product</h4>
          <ul>
            <li>
              <a href="https://lookit.mpeoplesnet.com" target="_blank" rel="noreferrer">
                Look It
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.makkal.calendar" target="_blank" rel="noreferrer">
                Makkal Nalkatti
              </a>
            </li>
            <li>
              <a href="/hr-management">HR Management</a>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/team-page">Team</a></li>
            <li><a href="/career-page">Career</a></li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">
            {socialIcons.map(({ label, svg }) => (
              <a
                key={label}
                href="#"
                className="footer-social-icon"
                aria-label={label}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  {svg}
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* NEWSLETTER */}
      <div className="footer-newsletter">
        <span>Get updates from MPeoples</span>
        <div>
          <input type="email" placeholder="Email address" />
          <button>Subscribe →</button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>2026 MPeoples</span>
        <div>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;