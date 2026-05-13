import React from "react";
import "../Style/videoprovide.css";

import trapLeft from "../assets/left-corner.png";
import trapRight from "../assets/right-corner.png";

import corporate from "../assets/corporates.png";
import motion from "../assets/motion.png";
import pharma from "../assets/pharma.png";
import digital from "../assets/digital.png";
import cinematic from "../assets/cinematic.png";
import video360 from "../assets/360 video.png";
import social from "../assets/social.png";

import live from "../assets/live.png";
import documentary from "../assets/documentary.png";
import promo from "../assets/promo.png";
import animation from "../assets/animation.png";
import educational from "../assets/educational.png";
import realestate from "../assets/real estate.png";
import music from "../assets/music.png";

import fashion from "../assets/fashion.png";
import healthcare from "../assets/health.png";
import ads from "../assets/commercial.png";
import manufacturing from "../assets/manufacturing.png";
import startup from "../assets/startups.png";

import elearning from "../assets/elearn.png";
import editing from "../assets/videoedit.png";
import explainer from "../assets/explainer.png";
import training from "../assets/training.png";

const row1 = [
  { title: "Corporate Videos", image: corporate },
  { title: "Motion Graphics", image: motion },
  { title: "Pharma Videos", image: pharma },
  { title: "Digital Videos", image: digital },
  { title: "Cinematic Videos", image: cinematic },
  { title: "360 Videos", image: video360 },
  { title: "Social Media Videos", image: social },
];

const row2 = [
  { title: "Live Action Videos", image: live },
  { title: "Documentary Videos", image: documentary },
  { title: "Promo Videos", image: promo },
  { title: "Animation Videos", image: animation },
  { title: "Educational Videos", image: educational },
  { title: "Real Estate Videos", image: realestate },
  { title: "Music Videos", image: music },
];

const row3 = [
  { title: "Fashion Videos", image: fashion },
  { title: "Healthcare Videos", image: healthcare },
  { title: "Commercial/ TV Ads", image: ads },
  { title: "Manufacturing Videos", image: manufacturing },
  { title: "Start ups Videos", image: startup },
];

const row4 = [
  { title: "E-learning Video", image: elearning },
  { title: "Video Editing", image: editing },
  { title: "Explainer Video", image: explainer },
  { title: "Training Video", image: training },
];

const ServiceCard = ({ item }) => (
  <div className="videoprovide-card">
    <img
      src={item.image}
      alt={item.title}
      className="videoprovide-icon"
    />

    <p className="videoprovide-card-title">
      {item.title}
    </p>
  </div>
);

const VideoProvide = () => {
  return (
    <section className="videoprovide-section">

      <img src={trapLeft} alt="" className="videoprovide-left-shape" />
      <img src={trapRight} alt="" className="videoprovide-right-shape" />

      <div className="videoprovide-container">

        <h2 className="videoprovide-title">
          Services we provide
        </h2>

        {/* ROW 1 */}
        <div className="videoprovide-grid videoprovide-grid-7">
          {row1.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>

        <div className="videoprovide-divider"></div>

        {/* ROW 2 */}
        <div className="videoprovide-grid videoprovide-grid-7">
          {row2.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>

        <div className="videoprovide-divider videoprovide-divider-small"></div>

        {/* ROW 3 */}
        <div className="videoprovide-grid videoprovide-grid-5">
          {row3.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>

        <div className="videoprovide-divider videoprovide-divider-mini"></div>

        {/* ROW 4 */}
        <div className="videoprovide-grid videoprovide-grid-4">
          {row4.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoProvide;