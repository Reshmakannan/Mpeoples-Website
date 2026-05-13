import React from "react";
import "../Style/Gdservices.css";

import gd1 from "../assets/icon1.png";
import gd2 from "../assets/icon2.png";
import gd3 from "../assets/icon3.png";
import gd4 from "../assets/icon4.png";
import gd5 from "../assets/icon5.png";
import gd6 from "../assets/icon6.png";

const services = [
  {
    icon: gd1,
    title: "Logo Design",
    desc: "A logo is the foundation of your brand identity. We design unique logos that help your business stand out and create a strong first impression.",
    tags: ["Logo Creation", "Brand Logo", "Creative Logo", "Business Logo", "Unique Logo Design"],
  },
  {
    icon: gd2,
    title: "Brand Identity Design",
    desc: "Brand identity defines the visual personality of your business. We create consistent branding that builds trust and strengthens brand recognition.",
    tags: ["Brand Identity", "Visual Branding", "Brand Guidelines", "Business Branding", "Corporate Identity"],
  },
  {
    icon: gd3,
    title: "Brochure & Pamphlet Design",
    desc: "Brochures and pamphlets help communicate your products and services effectively. Our creative designs present your information clearly while attracting potential customers.",
    tags: ["Brochure Design", "Pamphlet", "Marketing Brochure", "Print Design", "Promotional Materials"],
  },
  {
    icon: gd4,
    title: "Advertising Creatives",
    desc: "Engaging advertising visuals are essential for capturing attention. We design impactful creatives that increase brand awareness and support your marketing campaigns.",
    tags: ["Ad Creatives", "Marketing Graphics", "Campaign Design", "Digital Ads", "Promotional Creatives"],
  },
  {
    icon: gd5,
    title: "Custom Graphic Design",
    desc: "Every business has unique design needs. We provide customized graphic solutions that align with your brand and effectively showcase your ideas.",
    tags: ["Custom Design", "Creative Graphics", "Business Visuals", " Unique Design Solutions", "Tailored Graphics"],
  },
  {
    icon: gd6,
    title: "Modern Design Solutions",
    desc: "Our team uses the latest design tools and creative strategies to produce clean, modern, and visually appealing graphics that enhance your brand presence.",
    tags: ["Modern Design", "Creative Strategy", "Visual Innovation", "Professional Graphics", "Design Excellence"],
  },
];

function ServicesSection() {
  return (
    <section className="gd-services-section">
      <h2 className="gd-services-heading">
        Need for Graphic Design Service for your business
      </h2>

      <p className="gd-services-subtext">
        We create impactful graphic designs that strengthen brand identity and connect businesses with their audience. From logos to marketing creatives, our designs ensure clear communication and a strong brand presence.
      </p>

      <div className="gd-services-grid">
        {services.map((service, index) => (
          <div className="gd-service-card" key={index}>
            <div className="gd-service-icon-wrap">
              <img src={service.icon} alt={service.title} className="gd-service-icon" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="gd-service-tags">
              {service.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;