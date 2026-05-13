import React from "react";
import "../Style/Webservice.css";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

const webServices = [
  {
    icon: icon1,
    title: "Custom Website Development",
    desc: "We create fully customized websites tailored to your brand, goals, and audience. Our development approach ensures performance, scalability, and seamless functionality.",
    tags: [
      "Custom",
      "Responsive",
      "CMS-Ready",
      "Scalable",
      "Flexible",
    ],
  },
  {
    icon: icon2,
    title: "UI/UX Website Design",
    desc: "We design modern and intuitive user interface that improve usability and engagement. Our UX strategy focuses on smooth user journeys that convert visitors into customers.",
    tags: [
      "User Experience",
      "Wireframing",
      "Visual Design",
      "Interaction Design",
      "Design Systems",
    ],
  },
  {
    icon: icon3,
    title: "Website Performance Optimization",
    desc: "A fast website improves both user experience and SEO. We optimize your website for speed, performance, and smooth navigation across all devices.",
    tags: [
      "Core Web Vitals",
      "Mobile Optimization",
      "Lazy Loading",
      "Code Optimization",
      "Performance Testing",
    ],
  },
  {
    icon: icon4,
    title: "SEO-Ready Website Development",
    desc: "We build websites with strong SEO foundations to improve visibility on search engines and attract more organic traffic to your business.",
    tags: [
      "Technical SEO",
      "On-Page SEO",
      "Meta Optimization",
      "SEO Architecture",
      "Analytics Setup",
    ],
  },
  {
    icon: icon5,
    title: "Website Migration & Integration",
    desc: "We help businesses migrate their websites safely while maintaining performance and SEO rankings. We also integrate essential tools and platforms.",
    tags: [
      "Website Migration",
      "Data Transfer",
      "CMS Migration",
      "Website Migration",
      "API Integration",
    ],
  },
  {
    icon: icon6,
    title: "Website Maintenance & Support",
    desc: "We provide ongoing support and maintenance to ensure your website stays secure, updated, and running smoothly at all times.",
    tags: [
      "Security Updates",
      "Bug Fixing",
      "Backup & Recovery",
      "Performance Monitoring",
      "Technical Support",
    ],
  },
];

function webServicesSection() {
  return (
    <section className="web-services-section">
      <h2 className="web-services-heading">
        Website Solutions for Your Digital Growth
      </h2>

      <p className="web-services-subtext">
        We build powerful, scalable, and high-performing websites that help
        businesses grow online. From strategy and design to development and
        optimization, our solutions ensure your website delivers the best user
        experience and measurable results.
      </p>

      <div className="web-services-grid">
        {webServices.map((service, index) => (
          <div className="web-service-card" key={index}>
            <div className="web-service-icon-wrap">
              <img
                src={service.icon}
                alt={service.title}
                className="web-service-icon"
              />
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <div className="web-service-tags">
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

export default webServicesSection;
