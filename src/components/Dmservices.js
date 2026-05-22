import React from "react";
import "../Style/Dmservices.css";

import dm1 from "../assets/icon1.png";
import dm2 from "../assets/icon2.png";
import dm3 from "../assets/icon3.png";
import dm4 from "../assets/icon4.png";
import dm5 from "../assets/icon5.png";
import dm6 from "../assets/icon6.png";

const services = [
  {
    icon: dm1,
    title: "Search Engine Optimization (SEO)",
    desc: "We improve your website’s ranking on search engines like Google to increase visibility and drive organic traffic.",
    tags: [
      "SEO Strategy",
      "Keyword Research",
      "On-Page SEO",
      "Link Building",
      "Organic Traffic",
    ],
  },
  {
    icon: dm2,
    title: "Pay-Per-Click Advertising (PPC)",
    desc: "Our PPC campaigns help your business reach the right audience instantly through targeted ads on Google Ads, driving quick traffic and conversions.",
    tags: [
      "PPC Campaigns",
      "Targeted Ads",
      "Paid Advertising",
      "Conversion Optimization",
    ],
  },
  {
    icon: dm3,
    title: "Social Media Marketing",
    desc: "We help brands grow through creative campaigns on Instagram, Facebook, and LinkedIn, building engagement and brand awareness.",
    tags: [
      "Social Media Strategy",
      "Brand Engagement",
      "Creative Campaigns",
      "Audience Growth",
    ],
  },
  {
    icon: dm4,
    title: "Google My Business (GMB) Optimization",
    desc: "We optimize your business profile on Google Business Profile to improve local search visibility. This helps attract more calls, website visits, and customers from nearby locations.",
    tags: [
      "Local SEO",
      "Google Maps Ranking",
      "Customer Reviews",
      "Business Listings",
    ],
  },
  {
    icon: dm5,
    title: "Email Marketing",
    desc: "We create targeted email campaigns with newsletters and promotions to connect with your audience and increase conversions.",
    tags: [
      "Email Campaigns",
      "Newsletter Marketing",
      "Lead Nurturing",
      "Customer Engagement",
    ],
  },
  {
    icon: dm6,
    title: "Content Marketing",
    desc: "Our content marketing strategies deliver valuable content that engages audiences and strengthens your brand.",
    tags: [
      "Content Strategy",
      "Blog Marketing",
      "SEO Content",
      "Brand Storytelling",
    ],
  },
];

function ServicesSection() {
  return (
    <section className="dm-services-section">
      <h2 className="dm-services-heading">
        Need for Digital Marketing Services for Your Business
      </h2>

      <p className="dm-services-subtext">
        We create result-driven digital marketing campaigns that help businesses
        grow their online presence. Our strategies increase brand visibility,
        drive quality traffic, and generate more leads.
      </p>

      <div className="dm-services-grid">
        {services.map((service, index) => (
          <div className="dm-service-card" key={index}>
            <div className="dm-service-icon-wrap">
              <img
                src={service.icon}
                alt={service.title}
                className="dm-service-icon"
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="dm-service-tags">
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
