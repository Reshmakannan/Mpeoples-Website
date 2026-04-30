import { useState, useRef, useEffect } from "react";
import "../Style/Uiuxdesign.css";

import swotImage       from "../assets/swot.png";
import flowImage       from "../assets/flow.png";
import wireframesImage from "../assets/wireframes.png";
import dashboardImage  from "../assets/dashboard.png";
import uxUiImage       from "../assets/ui-ux.png";

const steps = [
  {
    label: "STEP  1",
    title: "User Research",
    description:
      "User acquisition and retention are key resonance on what users think of the product. a detailed research and best understanding of user behavior help us lay basic foundation for a great and interface.",
  },
  {
    label: "STEP  2",
    title: "Work and user flow",
    description:
      "A sequence of movements or actions of users is staged where the goal is to optimize users ability to accomplish a task with the least amount of effort. At this stage, Multiple such scenarios are Challenged and best possible solutions are devised.",
  },
  {
    label: "STEP  3",
    title: "Wireframing & Skinning",
    description:
      "Based on the finalized user flow and scenarios, the architecture of screens is created. At this step, the ideas are presented to the client and an intial understanding is established between UX, UI and development teams. The UI Team develops the final GUI for the finalized Screens.",
  },
  {
    label: "STEP  4",
    title: "Design & Prototyping",
    description:
      "Before the development and after the GUI, the designs are prototyped to look out for frictions, practical user tests. Appropriate feedback and results of users testing are implemented in the design.",
  },
  {
    label: "STEP  5",
    title: "Development",
    description:
      "The Finalized design are developed in HTML, Compatible with various devices and resolutions.",
  },
];

const allImages = [swotImage, flowImage, wireframesImage, dashboardImage, uxUiImage];
const TOTAL = steps.length;
const mod = (n, m) => ((n % m) + m) % m;

export default function UiuxDesignSection() {
  const [active, setActive]           = useState(0);
  const [slideDir, setSlideDir]       = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  const navigate = (dir) => {
    if (isAnimating) return;
    const next = dir === "next" ? mod(active + 1, TOTAL) : mod(active - 1, TOTAL);
    setSlideDir(dir);
    setIsAnimating(true);
    setActive(next);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsAnimating(false);
      setSlideDir("");
    }, 460);
  };

  const goTo = (idx) => {
    if (isAnimating || idx === active) return;
    const dir = idx > active ? "next" : "prev";
    setSlideDir(dir);
    setIsAnimating(true);
    setActive(idx);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsAnimating(false);
      setSlideDir("");
    }, 460);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const step  = steps[active];
  const img0  = allImages[mod(active,     TOTAL)];
  const img1  = allImages[mod(active + 1, TOTAL)];
  const img2  = allImages[mod(active + 2, TOTAL)];
  const animCls = isAnimating ? ` hwd-slide--${slideDir}` : "";

  return (
    <section className="hwd-section">

      {/* ── Header ── */}
      <div className="hwd-header">
        <h2 className="hwd-title">How We Design</h2>
        <p className="hwd-subtitle">Simple Design. Smart Experience. Strong Impact.</p>
      </div>

      {/* ── Body ── */}
      <div className="hwd-body">

        {/* Left: step copy */}
        <div className={`hwd-copy${isAnimating ? " hwd-copy--fade" : ""}`}>
          <span className="hwd-step-badge">{step.label}</span>
          <h3 className="hwd-step-title">{step.title}</h3>
          <p className="hwd-step-desc">{step.description}</p>
        </div>

        {/* Right: frames + controls */}
        <div className="hwd-right">
          <div className="hwd-stage">

            {/* ══ FRAME 3 — Furthest back (no buttons/notch) ══ */}
            <div className="hwd-frame hwd-frame--ghost">
              <div className="hwd-frame--ghost-inner">
                <img
                  key={`f3-${active}`}
                  src={img2}
                  alt=""
                  className={`hwd-screen-img${animCls}`}
                />
              </div>
            </div>

            {/* ══ FRAME 2 — Middle (no buttons/notch) ══ */}
            <div className="hwd-frame hwd-frame--flat">
              <div className="hwd-frame--flat-inner">
                <img
                  key={`f2-${active}`}
                  src={img1}
                  alt=""
                  className={`hwd-screen-img${animCls}`}
                />
              </div>
            </div>

            {/* ══ FRAME 1 — CSS Phone Shape (front) ══ */}
            <div className="hwd-frame hwd-frame--phone">
              <div className="hwd-phone-outer">
                <div className="hwd-phone-notch" />
                <div className="hwd-phone-screen">
                  <img
                    key={`f1-${active}`}
                    src={img0}
                    alt={step.title}
                    className={`hwd-screen-img${animCls}`}
                  />
                </div>
                <div className="hwd-phone-home" />
              </div>
            </div>

          </div>

          {/* ── Controls ── */}
          <div className="hwd-controls">
            <button className="hwd-arr" onClick={() => navigate("prev")} aria-label="Previous">‹</button>
            <div className="hwd-dots">
              {steps.map((_, i) => (
                <button
                  key={i}
                  className={`hwd-dot${i === active ? " hwd-dot--on" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Step ${i + 1}`}
                />
              ))}
            </div>
            <button className="hwd-arr" onClick={() => navigate("next")} aria-label="Next">›</button>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="hwd-cta">
        <button className="hwd-btn-primary">
          Let's Build Together <span className="hwd-icon-flat">↗</span>
        </button>
        <button className="hwd-btn-ghost">
          Free consultation <span className="hwd-icon-circle">↗</span>
        </button>
      </div>

    </section>
  );
}