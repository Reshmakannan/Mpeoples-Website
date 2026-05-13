import React, { useState } from "react";
import "../Style/Forms.css";
import ceoPhoto from "../assets/Idea.png";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    deadline: "",
    referral: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contact-section">
      {/* Hero text */}
      <div className="contact-hero">
        <h1 className="contact-title">Let's Build Something That Matters</h1>
        <p className="contact-subtitle">
          Have an idea or a project in mind?
          <br />
          Talk to our experts and turn your vision into a powerful digital
          product.
        </p>
      </div>

      {/* Main content */}
      <div className="contact-body">
        {/* Left — CEO card */}
        <div className="ceo-card">
          <div className="ceo-photo-wrap">
            <img src={ceoPhoto} alt="Narasimma CEO" className="ceo-photo" />
          </div>
          <div className="ceo-info">
            <p className="ceo-text">
              Hi, I'm Narasimma - CEO at MPeoples.{" "}
              <span className="ceo-link">Schedule a call with</span> me to
              discuss in detail about your project and how we can help your
              business. You can also request for free custom quote if the scope
              of work is clear.
            </p>
            <button className="whatsapp-btn"> 
              <svg
                className="wa-icon"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#25D366" />
                <path
                  d="M23.5 8.5A10.44 10.44 0 0 0 16 5.5C10.75 5.5 6.5 9.75 6.5 15a9.45 9.45 0 0 0 1.38 4.93L6.5 26.5l6.73-1.76A9.5 9.5 0 0 0 16 25.5c5.25 0 9.5-4.25 9.5-9.5a9.45 9.45 0 0 0-2-5.5Z"
                  fill="#25D366"
                  stroke="white"
                  strokeWidth="1.2"
                />
                <path
                  d="M21 18.92c-.3.84-1.48 1.54-2.44 1.74-.65.13-1.5.24-4.36-1.87-2.9-2.14-3.9-5.07-3.97-5.3-.07-.23-.6-1.6.27-2.74.35-.46.72-.7 1.06-.73.27-.03.54 0 .77.01.25.01.58-.09.9.7.34.82.42 1.52.29 1.63-.12.12-.46.3-.7.56-.23.26-.44.53-.19.97.25.44 1.12 1.85 2.4 2.99 1.65 1.47 3.04 1.92 3.47 2.14.43.22.68.18.93-.1.25-.28.7-.82.88-1.1.18-.28.37-.23.62-.14.25.1 1.6.75 1.87.89.27.14.46.2.52.31.06.11.06.65-.24 1.24Z"
                  fill="white"
                />
              </svg>
              Connect Narasimma
            </button>
          </div>
        </div>

        {/* Right — Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Navin"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address*</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="poovarasan2607@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">How we can help?*</label>
              <select
                name="service"
                className="form-select"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Services Dropdown -Select</option>
                <option value="ui-ux">UI / UX Design</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="saas">Saas Product Development</option>
                <option value="marketing">Digital Marketing</option>
                <option value="graphic">Graphic Design</option>
                <option value="video">Video Editing</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">What's your budget?*</label>
              <select
                name="budget"
                className="form-select"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Amount</option>
                <option value="lt5k">Less than $5,000</option>
                <option value="5k-10k">$5,000 – $10,000</option>
                <option value="10k-25k">$10,000 – $25,000</option>
                <option value="25k-50k">$25,000 – $50,000</option>
                <option value="gt50k">$50,000+</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                What's your project deadline?*
              </label>
              <select
                name="deadline"
                className="form-select"
                value={formData.deadline}
                onChange={handleChange}
              >
                <option value="">Less than 4 Weeks</option>
                <option value="lt4w">Less than 4 Weeks</option>
                <option value="1-2m">1–2 Months</option>
                <option value="3-6m">3–6 Months</option>
                <option value="gt6m">6+ Months</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">How did you hear about us?*</label>
              <select
                name="referral"
                className="form-select"
                value={formData.referral}
                onChange={handleChange}
              >
                <option value="">Social media dropdown</option>
                <option value="instagram">Instagram</option>
                <option value="linkedin">LinkedIn</option>
                <option value="twitter">Twitter / X</option>
                <option value="google">Google Search</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Text here.."
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Start Your Project
            </button>
            <button type="button" className="btn-consultation">
              Free consultation
              <span className="arrow-circle">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Watermark M */}
      <div className="watermark-m" aria-hidden="true">
        M
      </div>
    </section>
  );
}

export default ContactSection;
