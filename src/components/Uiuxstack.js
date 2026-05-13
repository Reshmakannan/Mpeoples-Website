import "../Style/Uiuxstack.css";

import figmaImg   from "../assets/figma.png";
import adobeImg   from "../assets/adobe.png";
import psImg      from "../assets/ps.png";
import aiImg      from "../assets/ai.png";
import xdImg      from "../assets/xd.png";
import sketchImg  from "../assets/sketch.png";
import miroImg    from "../assets/miro.png";
import framerImg  from "../assets/framer.png";
import pieImg     from "../assets/pie.png";

const tools = [
  { src: sketchImg, alt: "Sketch" },
  { src: miroImg, alt: "Miro" },
  { src: framerImg, alt: "Framer" },
  { src: figmaImg, alt: "Figma" },
  { src: xdImg, alt: "Adobe XD" },
  { src: psImg, alt: "Photoshop" },
  { src: aiImg, alt: "Illustrator" },
  { src: adobeImg, alt: "Adobe" },
];

export default function UiuxStack() {
  const items = [...tools, ...tools];

  return (
    <section className="uiux-stack-section">

      <h2 className="uiux-stack-title">
        Our UI/UX Design Tech Stack
      </h2>

      <div className="uiux-stack-info">
        <div className="uiux-stack-info-left">
          <h3 className="uiux-stack-info-heading">
            Our Design Technology Stack
          </h3>

          <p className="uiux-stack-info-desc">
            Using modern design tools and proven workflows,
            <br />
            we craft seamless and scalable UI/UX experiences
            that deliver quality and performance.
          </p>
        </div>

        <div className="uiux-stack-info-right">
          <img
            src={pieImg}
            alt="Tech stack chart"
            className="uiux-stack-pie"
          />
        </div>
      </div>

      <div className="uiux-stack-marquee-outer">
        <div className="uiux-stack-marquee-track">
          {items.map((tool, i) => (
            <div className="uiux-stack-cell" key={i}>
              <span className="uiux-stack-divider" />

              <img
                src={tool.src}
                alt={tool.alt}
                className="uiux-stack-icon"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}