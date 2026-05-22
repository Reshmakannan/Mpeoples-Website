import React, { useState } from "react";
import "../Style/aboutwork.css";


import planImg from "../assets/Plan.png";
import ideaImg from "../assets/Idea.png";
import strategyImg from "../assets/Strategy.png";
import processImg from "../assets/Process.png";

import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";
import thumb4 from "../assets/thumb4.png";

function AboutWork() {

  const [aboutWorkActiveCard, setAboutWorkActiveCard] = useState(null);

  const aboutWorkCards = [
    {
      title: "Plan",
      step: "Step-1",
      quote: '"What are we really building - and why?"',
      image: planImg,
      backImage: thumb1,
    },
    {
      title: "Idea",
      step: "Step-2",
      quote: `"Let's solve the right problem..."`,
      image: ideaImg,
      backImage: thumb4,
    },
    {
      title: "Strategy",
      step: "Step-3",
      quote: '"Looks good is not enough. It must work."',
      image: strategyImg,
      backImage: thumb3,
    },
    {
      title: "Process",
      step: "Step-4",
      quote: '"We build, test, refine, and grow..."',
      image: processImg,
      backImage: thumb2,
    },
  ];

  return (

    <section className="aboutwork-section-main">

      <h2 className="aboutwork-main-title">
        How We Work?
      </h2>

      {/* Intro */}
      <div className="aboutwork-intro-wrapper">

        <div className="aboutwork-intro-text">

          <h3>
            From Thought to Impact - Our Way
          </h3>

          <p>
            Every great product starts as a thought.
          </p>

          <p>
            We help that thought grow, evolve,
            and turn into something people
            actually love to use.
          </p>

        </div>

        <div className="aboutwork-logo-container">

        </div>

      </div>

      {/* Cards */}
      <div className="aboutwork-cards-wrapper">

        {aboutWorkCards.map((card, index) => (

          <div
            className="aboutwork-single-card"
            key={index}
            onMouseEnter={() => setAboutWorkActiveCard(index)}
            onMouseLeave={() => setAboutWorkActiveCard(null)}
          >

            <div className="aboutwork-image-container">

              {/* Front */}
              <div
                className={`aboutwork-front-card ${
                  aboutWorkActiveCard === index
                    ? "aboutwork-hide-front"
                    : ""
                }`}
              >

                <img
                  src={card.image}
                  alt={card.title}
                  className="aboutwork-card-image"
                />

                <div className="aboutwork-dark-overlay"></div>

                <p className="aboutwork-card-quote">
                  {card.quote}
                </p>

              </div>

              {/* Back */}
              <div
                className={`aboutwork-back-card ${
                  aboutWorkActiveCard === index
                    ? "aboutwork-show-back"
                    : ""
                }`}
              >

                <img
                  src={card.backImage}
                  alt="back"
                  className="aboutwork-card-image"
                />

              </div>

            </div>

            <h4 className="aboutwork-card-title">
              {card.title}
            </h4>

            <span className="aboutwork-card-step">
              {card.step}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default AboutWork;