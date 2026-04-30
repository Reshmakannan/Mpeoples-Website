import React from "react";
import "../Style/Websoftware.css";

import card1Corner from "../assets/card1-corner.png";
import card2Corner from "../assets/card2-corner.png";
import card3Corner from "../assets/card3-corner.png";

const cardData = [
  {
    id: "01",
    title: "Custom Website Development",
    text: "Enhance your user interface with our constraint layout to ensure responsiveness. Our team creates an efficient navigation system for a seamless user experience. We skilfully design notification windows for enhanced user engagement.",
    cornerImg: card1Corner,
  },
  {
    id: "02",
    title: "Smart Predication",
    text: "By leveraging our design expertise, you can enhance the online shopping experience of your ecommerce website. Through clear navigation and seamless transactions, we help you drive more conversions. Our aim is to optimize the overall user journey and enhance an effective shopping process.",
    cornerImg: card2Corner,
  },
  {
    id: "03",
    title: "Quality Coding",
    text: "In creating intuitive and visually appealing website interfaces, we place a strong emphasis on responsive design and cross-browser compatibility, ensuring that your users' needs are met. Our client-centric approach is at the core of our process, delivering effective designs tailored to your specific requirements.",
    cornerImg: card3Corner,
  },
];

function Websoftware() {
  return (
    <section className="ws-section">
      <div className="ws-container">

        <h2 className="ws-title">Your Software Product Our Responsibility</h2>
        <p className="ws-subtitle">Modern Development. Scalable Solutions. Strong Performance.</p>

        <div className="ws-cards">
          {cardData.map((card, index) => (
            <div className="ws-outer" key={index}>

              {/* dot on top border, centered by flexbox */}
              <div className="ws-dot" />

              {/* corner image inside outer, top-right */}
              <img src={card.cornerImg} alt="" className="ws-corner-img" />

              {/* white inner card */}
              <div className="ws-inner">
                <span className="ws-num">{card.id}</span>
                <h3 className="ws-card-title">{card.title}</h3>
                <p className="ws-card-text">{card.text}</p>
              </div>

            </div>
          ))}
        </div>

        <div className="ws-footer">
          <button className="ws-btn">Let's Build Together ↗</button>
          <div className="ws-consult">
            <span>Free consultation</span>
            <div className="ws-arrow">↗</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Websoftware;