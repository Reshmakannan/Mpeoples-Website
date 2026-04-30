import React from "react";
import "../Style/Webservice.css";
// import "../Style/Uiux.css";
// import "../Style/Uiuxdesign.css";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

const services = [
  {
    icon: icon1,
    title: "Custom Website Development",
    desc: "We create fully customized websites tailored to your brand, goals, and audience. Our development approach ensures performance, scalability, and seamless functionality.",
    tags: ["UX Design", "User Flows", "Wireframes", "Usability Testing", "Interaction Design"],
  },
  {
    icon: icon2,
    title: "UI/UX Website Design",
    desc: "We craft responsive, visually engaging web interfaces that adapt beautifully across devices while maintaining performance and accessibility standards.",
    tags: ["UI Systems", "Mobile-First", "Web Accessibility", "Responsive Design", "Frontend Collaboration"],
  },
  {
    icon: icon3,
    title: "Website Performance Optimization",
    desc: "We create high-impact landing pages focused on engagement and conversion, designed to guide users toward meaningful actions.",
    tags: ["Conversion Design", "CTA Optimization", "CRO", "Heatmap Analysis", "Funnel Strategy"],
  },
  {
    icon: icon4,
    title: "UX Research & Validation",
    desc: "Our research-driven approach ensures every design decision is backed by insights, reducing risk and improving product-market fit.",
    tags: ["User Interviews", "Competitor Research", "UX Audit", "Journey Mapping", "Persona Creation"],
  },
  {
    icon: icon5,
    title: "Prototyping & MVP Design",
    desc: "We build interactive prototypes that allow stakeholders to test ideas quickly, validate concepts, and accelerate product development.",
    tags: ["Clickable Prototypes", "User Flows", "Wireframes", "Usability Testing", "Interaction Design"],
  },
  {
    icon: icon6,
    title: "Design Systems & Visual Identity",
    desc: "We develop scalable design systems and cohesive brand interfaces that ensure consistency, efficiency, and long-term product growth.",
    tags: ["Design Systems", "Component Library", "UI Kit", "Style Framework", "Brand Guidelines"],
  },
];

function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="services-heading">Experience-Led Digital Design Solutions</h2>
      <p className="services-subtext">
        From research and strategy to scalable design systems, we deliver end-to-end
        UI/UX solutions that help businesses build intuitive, high-performing digital products.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon-wrap">
              <img src={service.icon} alt={service.title} className="service-icon" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="service-tags">
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