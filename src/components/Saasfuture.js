import React from 'react';
import '../Style/Saasfuture.css';


import iconUser from '../assets/A.png';
import iconWireframe from '../assets/M.png';
import iconModernUI from '../assets/C.png';
import iconMobile from '../assets/M.png';
import iconUsability from '../assets/S.png';

const services = [
  {
    id: 1,
    icon: iconUser,
    title: "AI-Driven SaaS Platforms",
    text: "Future apps will leverage AI and machine learning to deliver smarter features, automation, and personalized user experiences.",
    row: "top",
  },
  {
    id: 2,
    icon: iconWireframe,
    title: "Multi-Tenant Architecture",
    text: "Modern SaaS platforms are built with multi-tenant architecture, allowing multiple users to securely share the same infrastructure while maintaining scalability.",
    row: "top",
  },
  {
    id: 3,
    icon: iconModernUI,
    title: "Cloud-Native Infrastructure",
    text: "Cloud-native SaaS applications enable businesses to scale effortlessly, ensure high availability, and deliver reliable performance across global users.",
    row: "top",
  },
  {
    id: 4,
    icon: iconMobile,
    title: "Advanced SaaS Security",
    text: "With growing data demands, SaaS platforms will focus on stronger encryption, secure authentication, and privacy-first architecture to protect sensitive information.",
    row: "bottom-left",
  },
  {
    id: 5,
    icon: iconUsability,
    title: "Seamless User Experiences",
    text: "Future SaaS platforms will prioritize intuitive UI/UX, faster workflows, and smooth digital experiences to increase productivity and user satisfaction.",
    row: "bottom-right",
  },
];

const Saasfuture = () => {
  return (
    <section className="saasfuture-main-section">
      <div className="saasfuture-main-container">

        <h1 className="saasfuture-main-title">
        The Future of SaaS Development
        </h1>

        <p className="saasfuture-subtitle-label">
          Delivered by MPeoples
        </p>

        <p className="saasfuture-main-description">
        Modern SaaS platforms are more than just software — they are scalable digital ecosystems that power businesses worldwide. At MPeoples, we combine cloud technology, intelligent automation, and user-focused design to build secure, high-performance SaaS platforms that help businesses grow faster and operate smarter.
        </p>

        <div className="saasfuture-card-grid">

          {/* TOP ROW */}
          {services.filter(s => s.row === "top").map(service => (
            <Card key={service.id} service={service} />
          ))}

          {/* BOTTOM ROW */}
          {services.filter(s => s.row !== "top").map(service => (
            <Card
              key={service.id}
              service={service}
              extraClass={
                service.row === "bottom-left"
                  ? "saasfuture-card-bottom-left"
                  : "saasfuture-card-bottom-right"
              }
            />
          ))}

        </div>
      </div>
    </section>
  );
};

const Card = ({ service, extraClass }) => (
  <div className={`uxfuture-service-card ${extraClass || ""}`}>
    <div className="uxfuture-card-header">
      <img src={service.icon} alt={service.title} className="uxfuture-card-icon" />
      <h3 className="uxfuture-card-title">{service.title}</h3>
    </div>
    <p className="uxfuture-card-text">{service.text}</p>
  </div>
);

export default Saasfuture;