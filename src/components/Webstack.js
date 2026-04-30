import "../Style/Uiuxstack.css";

import figmaImg   from "../assets/figma.png";
import adobeImg   from "../assets/adobe.png";
import psImg      from "../assets/ps.png";
import aiImg      from "../assets/ai.png";
import xdImg      from "../assets/xd.png";
import sketchImg  from "../assets/sketch.png";
import miroImg    from "../assets/miro.png";
import framerImg  from "../assets/framer.png";
import pieImg     from "../assets/control.png";

const tools = [
  { src: sketchImg, alt: "Sketch"      },
  { src: miroImg,   alt: "Miro"        },
  { src: framerImg, alt: "Framer"      },
  { src: figmaImg,  alt: "Figma"       },
  { src: xdImg,     alt: "Adobe XD"    },
  { src: psImg,     alt: "Photoshop"   },
  { src: aiImg,     alt: "Illustrator" },
  { src: adobeImg,  alt: "Adobe"       },
];

export default function UiuxStack() {
  // Duplicate for seamless loop
  const items = [...tools, ...tools];

  return (
    <section className="stack-section">

      <h2 className="stack-title">Our Web Development Technology Stack</h2>

      <div className="stack-info">
        <div className="stack-info-left">
          <h3 className="stack-info-heading">Our Web Technology Stack</h3>
          <p className="stack-info-desc">
            We use modern technologies and powerful frameworks to build secure, <br />
            scalable, and high-performance websites that deliver seamless digital experiences.
          </p>
        </div>
        <div className="stack-info-right">
          <img src={pieImg} alt="Tech stack chart" className="stack-pie" />
        </div>
      </div>

      <div className="stack-marquee-outer">
        <div className="stack-marquee-track">
          {items.map((tool, i) => (
            <div className="stack-cell" key={i}>
              <span className="stack-divider" />
              <img src={tool.src} alt={tool.alt} className="stack-icon" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}