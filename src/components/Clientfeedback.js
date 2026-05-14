import React, { useState, useRef } from "react";
import "../Style/Clientfeedback.css";
import avatarIcon from "../assets/avatar.png";
import reactionIcon from "../assets/reaction.png";

const feedbacks = [
  {
    name: "Arjun Kannan",
    handle: "@Seoways",
    message:
      "The website redesign exceeded our expectations....... Clean UI, faster loading, and better conversions within weeks!",
    reply:
      "That means a lot, Arjun! 🚀\n  Loved working on your project  excited to see your brand grow!",
  },
  {
    name: "Arjun Kannan",
    handle: "@Seoways",
    message:
      "The website redesign exceeded our expectations....... Clean UI, faster loading, and better conversions within weeks!",
    reply:
      "That means a lot, Arjun! 🚀\n  Loved working on your project  excited to see your brand grow!",
  },
  {
    name: "Arjun Kannan",
    handle: "@Seoways",
    message:
      "The website redesign exceeded our expectations....... Clean UI, faster loading, and better conversions within weeks!",
    reply:
      "That means a lot, Arjun! 🚀\n  Loved working on your project  excited to see your brand grow!",
  },
  {
    name: "Arjun Kannan",
    handle: "@Seoways",
    message:
      "The website redesign exceeded our expectations....... Clean UI, faster loading, and better conversions within weeks!",
    reply:
      "That means a lot, Arjun! 🚀\n  Loved working on your project  excited to see your brand grow!",
  },
  {
    name: "Arjun Kannan",
    handle: "@Seoways",
    message:
      "The website redesign exceeded our expectations....... Clean UI, faster loading, and better conversions within weeks!",
    reply:
      "That means a lot, Arjun! 🚀\n  Loved working on your project  excited to see your brand grow!",
  },
];

const VISIBLE = 3;

const ClientFeedback = () => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState(""); // "left" or "right"

  const animate = (dir, newIndex) => {
    setSlideDir(dir);
    setSliding(true);
    setTimeout(() => {
      setCurrent(newIndex);
      setSliding(false);
      setSlideDir("");
    }, 350); // matches CSS transition duration
  };

  const prev = () => {
    if (current === 0 || sliding) return;
    animate("right", current - 1);
  };

  const next = () => {
    if (current >= feedbacks.length - VISIBLE || sliding) return;
    animate("left", current + 1);
  };

  const visible = feedbacks.slice(current, current + VISIBLE);

  return (
    <section className="cf-section">
      <h2 className="cf-heading">Client Feedback!</h2>

      <div className="cf-nav">
        <button className="cf-btn" onClick={prev} disabled={current === 0}>
          &#8249;
        </button>
        <button
          className="cf-btn cf-btn-active"
          onClick={next}
          disabled={current >= feedbacks.length - VISIBLE}
        >
          &#8250;
        </button>
      </div>

      <div
        className={`cf-cards${sliding ? ` cf-slide-${slideDir}` : ""}`}
      >
        {visible.map((f, i) => (
          <div className="cf-card" key={current + i}>
            {/* Name at top */}
            <p className="cf-card-name">{f.name}</p>

            {/* Message bubble — tail bottom left */}
            <div className="cf-bubble cf-bubble-left">
              <p className="cf-bubble-text">{f.message}</p>
            </div>

            {/* Reaction image */}
            <div className="cf-reaction-wrap">
              <img
                src={reactionIcon}
                alt="reaction"
                className="cf-reaction-img"
              />
            </div>

            {/* Reply bubble — tail bottom right */}
            <div className="cf-bubble cf-bubble-right">
              <p className="cf-bubble-text" style={{ whiteSpace: "pre-line" }}>
                {f.reply}
              </p>
            </div>

            {/* Footer */}
            <div className="cf-footer">
              <img src={avatarIcon} alt={f.name} className="cf-avatar" />
              <div className="cf-footer-info">
                <span className="cf-footer-name">{f.name}</span>
                <span className="cf-footer-handle">{f.handle}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="cf-quote">
        "Every great product starts as a thought. We help that thought grow,
        evolve, and turn into something people actually love to use."
      </p>
    </section>
  );
};

export default ClientFeedback;