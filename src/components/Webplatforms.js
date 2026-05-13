import React from "react";
import "../Style/Webplatform.css";

// Import PNG images
import fintech from "../assets/fintech.png";
import garments from "../assets/garments.png";
import jobportal from "../assets/jobportal.png";
import it from "../assets/it.png";
import automotive from "../assets/automotive.png";
import ecommerce from "../assets/ecommerce.png";
import entertainment from "../assets/entertainment.png";
import b2b from "../assets/b2b.png";

const data = [
  {
    img: fintech,
    title: "FinTech",
    desc: "Secure fintech websites with payment gateways, transaction systems, and strong data security.",
  },
  {
    img: garments,
    title: "Garments",
    desc: "Modern websites for fashion and garment brands to showcase collections and manage bulk orders.",
  },
  {
    img: jobportal,
    title: "Job Portal",
    desc: "Smart job portal platforms with job listings, candidate profiles, and recruitment management.",
  },
  {
    img: it,
    title: "IT",
    desc: "Professional IT websites to highlight services, portfolios, and technology expertise.",
  },
  {
    img: automotive,
    title: "Automotive",
    desc: "Feature-rich automotive websites to showcase vehicles, specifications, and booking options.",
  },
  {
    img: ecommerce,
    title: "E-Commerce",
    desc: "High-performance online stores with product catalogs, secure payments, and order management.",
  },
  {
    img: entertainment,
    title: "Entertainment",
    desc: "Engaging platforms for media, events, and content streaming experiences.",
  },
  {
    img: b2b,
    title: "B2B",
    desc: "Powerful B2B platforms to connect businesses, manage bulk orders, and generate leads.",
  },
];

function Webplatform() {
  return (
    <section className="webplatform">
      <h2 className="webplatform-title">
        Web Development Services & Various Platforms
      </h2>

      <div className="webplatform-grid">
        {data.map((item, index) => (
          <div className="webplatform-card" key={index}>
            <div className="webplatform-img-wrapper">
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Webplatform;