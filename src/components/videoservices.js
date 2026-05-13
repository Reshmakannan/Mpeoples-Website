import React from "react";
import "../Style/videoservices.css";

import video1 from "../assets/icon1.png";
import video2 from "../assets/icon2.png";
import video3 from "../assets/icon3.png";
import video4 from "../assets/icon4.png";
import video5 from "../assets/icon5.png";
import video6 from "../assets/icon6.png";

const services = [
  {
    icon: video1,
    title: "Corporate Video Production",
    desc: "Corporate videos showcase your company’s vision, values, and services. We create professional videos that build trust and strengthen your brand image.",
    tags: ["Corporate Videos", "Company Profile", "Business Videos", "Brand Story", "Professional Shoots"],
  },
  {
    icon: video2,
    title: "Promotional & Marketing Videos",
    desc: "Promotional videos are designed to attract customers and increase conversions. We craft engaging content that highlights your products and services.",
    tags: ["Promo Videos", "Product Videos", "Campaign Videos", "Ad Films", "Marketing Content"],
  },
  {
    icon: video3,
    title: "Social Media Video Content",
    desc: "Short-form videos are essential for digital growth. We create eye-catching content optimized for platforms like Instagram, YouTube, and Facebook.",
    tags: [" Reels", "Shorts", "Social Media Ads", "Viral Content", "Digital Campaigns"],
  },
  {
    icon: video4,
    title: "Explainer Videos",
    desc: "Explainer videos simplify complex ideas into clear and engaging visuals. Perfect for startups and SaaS products to communicate value effectively.",
    tags: ["Animated Videos", "Product Explainers", "Demo Videos", "Motion Graphics", "Storytelling"],
  },
  {
    icon: video5,
    title: "Event & Interview Videos",
    desc: "We capture important moments through professional event coverage and interview videos that reflect authenticity and emotion.",
    tags: ["Event Coverage", "Interviews", "Testimonials", "Live Events", "Highlights"],
  },
  {
    icon: video6,
    title: "Creative Video Solutions",
    desc: "Every brand is unique. We provide customized video solutions with creative direction, scripting, and editing to match your business goals.",
    tags: ["Custom Videos", "Creative Direction", "Video Editing", "Visual Effects", "Unique Concepts"],
  },
];

function ServicesSection() {
  return (
    <section className="video-services-section">
      <h2 className="video-services-heading">
        Need for Video Production Services for your business
      </h2>

      <p className="video-services-subtext">
       We create high-quality video content that captures attention and tells your brand story effectively.  From promotional videos to corporate storytelling, our productions help engage your audience and boost brand visibility
      </p>

      <div className="video-services-grid">
        {services.map((service, index) => (
          <div className="video-service-card" key={index}>
            <div className="video-service-icon-wrap">
              <img src={service.icon} alt={service.title} className="video-service-icon" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="video-service-tags">
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