// GifSection.js

import React from "react";
import "../Style/videogif.css";

import demoGif from "../assets/demo.gif"; // your gif file

const GifSection = () => {
  return (
    <section className="gifshowcase-section">
      <div className="gifshowcase-container">

        <div className="gifshowcase-card">
          <img
            src={demoGif}
            alt="GIF Preview"
            className="gifshowcase-image"
          />
        </div>

      </div>
    </section>
  );
};

export default GifSection;