import "../Style/teammatter.css";

import coffeeIcon from "../assets/coffee.png";
import lunchIcon from "../assets/lunch.png";
import designIcon from "../assets/des.png";
import funIcon from "../assets/fun.png";

const moments = [
  {
    id: 1,
    icon: coffeeIcon,
    count: "536",
    title: "Coffee & Conversations",
  },
  {
    id: 2,
    icon: lunchIcon,
    count: "6427",
    title: "Lunch Together",
  },
  {
    id: 3,
    icon: designIcon,
    count: "8635+",
    title: "Design, Code\nReviews & Learning",
  },
  {
    id: 4,
    icon: funIcon,
    count: "106+",
    title: "Friday Fun",
  },
];

export default function Teammatter() {
  return (
    <section className="teammatter-section">

      <div className="teammatter-container">

        {/* HEADING */}
        <h2 className="teammatter-heading">
          MPeoples Daily Moments That Matter
        </h2>

        {/* ITEMS */}
        <div className="teammatter-grid">

          {moments.map((item) => (
            <div className="teammatter-card" key={item.id}>

              <div className="teammatter-icon-wrap">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="teammatter-icon"
                />
              </div>

              <h3 className="teammatter-count">
                {item.count}
              </h3>

              <p className="teammatter-title">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* RIGHT CORNER DESIGN */}
      <div className="teammatter-corner">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
}