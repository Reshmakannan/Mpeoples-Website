import React from "react";
import "../Style/appservices.css";

import app1 from "../assets/icon1.png";
import app2 from "../assets/icon2.png";
import app3 from "../assets/icon3.png";
import app4 from "../assets/icon4.png";
import app5 from "../assets/icon5.png";
import app6 from "../assets/icon6.png";

const services = [
  {
    icon: app1,
    title: "Custom Mobile App Development",
    desc: "We develop customized mobile apps tailored to your business goals, brand identity, and audience, delivering smooth performance and scalable architecture.",
    tags: ["Business Apps", "Secure Code", " API Integration", "Feature Customization", "Custom App Development"],
  },
  {
    icon: app2,
    title: "Cross-Platform & Native Development",
    desc: "Our team builds high-quality mobile applications for both Android and iOS platforms, ensuring seamless performance and consistent user experiences across devices.",
    tags: ["iOS Development", "Native Apps", "App Deployment", "Android Development", "Cross-Platform Apps"],
  },
  {
    icon: app3,
    title: "Intuitive App UI/UX Design",
    desc: "We design clean, engaging, and user-friendly interfaces that enhance usability and deliver smooth user journeys for better engagement and retention.",
    tags: ["Mobile UX", "App Wireframing", "Visual Interface", "Interaction Design", "Design Systems"],
  },
  {
    icon: app4,
    title: "App Performance & Scalability",
    desc: "Our development approach focuses on building applications that are fast, stable, and scalable, ensuring smooth performance even as your user base grows.",
    tags: ["High Performance", "App Optimization", "Load Handling", "Scalable Infrastructure", "Performance Testing"],
  },
  {
    icon: app5,
    title: "Third-Party API Integration",
    desc: "We integrate essential third-party services such as payment gateways, analytics, maps, and cloud tools to enhance your app’s functionality and capabilities.",
    tags: ["API Integration", "Payment Gateway", "Cloud Services", "Analytics Integration", "Push Notifications"],
  },
  {
    icon: app6,
    title: "Offline Functionality & Data Sync",
    desc: "We build mobile apps with offline capabilities, allowing users to access important features even without internet connectivity, with automatic data syncing once online.",
    tags: ["Offline Mode", "Data Sync", "Local Data Storage", "Background Processing", "Seamless Connectivity"],
  },
];

function ServicesSection() {
  return (
    <section className="appservices-services-section">
      <h2 className="appservices-services-heading">
        App Solutions for Your Digital Growth
      </h2>

      <p className="appservices-services-subtext">
        We build scalable, high-performance mobile apps that help businesses connect with users anytime, anywhere delivering seamless experiences from strategy and design to development and deployment.
      </p>

      <div className="appservices-services-grid">
        {services.map((service, index) => (
          <div className="appservices-service-card" key={index}>
            <div className="appservices-service-icon-wrap">
              <img src={service.icon} alt={service.title} className="appservices-service-icon" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="appservices-service-tags">
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