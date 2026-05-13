import React from "react";
import "../Style/saasservices.css";

import saas1 from "../assets/icon1.png";
import saas2 from "../assets/icon2.png";
import saas3 from "../assets/icon3.png";
import saas4 from "../assets/icon4.png";
import saas5 from "../assets/icon5.png";
import saas6 from "../assets/icon6.png";

const services = [
  {
    icon: saas1,
    title: "Unique solutions for your business",
    desc: "Custom software is built for your business needs with personalized features and seamless integration. It improves efficiency and supports long-term growth.",
    tags: ["Custom Software", "Personalized Solutions", "Workflow", "Business Automation", "Scalable Technology"],
  },
  {
    icon: saas2,
    title: "Satisfies customer requirements",
    desc: "Customized software adapts to customer needs and feedback, improving user experience and satisfaction while building long-term loyalty.",
    tags: ["Flexible Solutions", "Customer Personalization", " Improved User Experience", "Customer Loyalty"],
  },
  {
    icon: saas3,
    title: "Additional security",
    desc: "Custom software offers stronger security with controlled access and tailored protection. It helps safeguard sensitive data and reduces security risks.",
    tags: ["Enhanced Security", "Protection", "Controlled Access", "Secure Architecture", "Data Protection"],
  },
  {
    icon: saas4,
    title: "Improved flexibility and scalability",
    desc: "Custom software allows businesses to easily modify and scale their systems as they grow. It provides full control without licensing limitations.",
    tags: ["Scalable Solutions", "Flexible", "Low Maintenance", "Business Control", "Future-Ready Software"],
  },
  {
    icon: saas5,
    title: "Reliability and consistency",
    desc: "With dedicated support and maintenance, custom software ensures stable performance and quick issue resolution. This helps maintain smooth business operations.",
    tags: ["High Reliability", "Dedicated Support", "24/7 Maintenance", "Stable Performance", "Business Continuity"],
  },
  {
    icon: saas6,
    title: "Minimal interface problems",
    desc: "Custom applications are built around business processes, making them easy for teams to use with minimal training. This improves workflow efficiency.",
    tags: ["Easy Adoption", "Minimal Training", "Simplified Workflow", "User-Friendly Interface", "Business-Focused Design"],
  },
];

function ServicesSection() {
  return (
    <section className="saas-services-section">
      <h2 className="saas-services-heading">
        Need for SaaS Products for your business
      </h2>

      <p className="saas-services-subtext">
       We build scalable SaaS products that help businesses streamline operations and serve customers from anywhere. Our solutions ensure seamless user experiences and reliable performance.
      </p>

      <div className="saas-services-grid">
        {services.map((service, index) => (
          <div className="saas-service-card" key={index}>
            <div className="saas-service-icon-wrap">
              <img src={service.icon} alt={service.title} className="saas-service-icon" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="saas-service-tags">
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