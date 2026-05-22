import "../Style/teampic.css";

import mainImg from "../assets/team-main.png";

import thumb1 from "../assets/team-thumb1.png";
import thumb2 from "../assets/team-thumb2.png";
import thumb3 from "../assets/team-thumb3.png";

export default function Teampic() {
  return (
    <section className="teampic-section">
      <div className="teampic-container">

        {/* MAIN IMAGE */}
        <div className="teampic-main-wrapper">
          <img
            src={mainImg}
            alt="Team"
            className="teampic-main-image"
          />

          {/* DARK OVERLAY */}
          <div className="teampic-overlay"></div>

          {/* CENTER TEXT */}
          <div className="teampic-content">
            <h2 className="teampic-title">
              Celebrating Every
              <br />
              Moment
            </h2>
          </div>

          {/* BOTTOM THUMBNAILS */}
          <div className="teampic-thumbnails">

            <div className="teampic-thumb-card">
              <img
                src={thumb1}
                alt="thumb1"
                className="teampic-thumb-image"
              />
            </div>

            <div className="teampic-thumb-card">
              <img
                src={thumb2}
                alt="thumb2"
                className="teampic-thumb-image"
              />
            </div>

            <div className="teampic-thumb-card">
              <img
                src={thumb3}
                alt="thumb3"
                className="teampic-thumb-image"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}