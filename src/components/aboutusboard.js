import React from "react";
import "../Style/aboutusboard.css";

// import your images
import board1 from "../assets/teams.png";
import board2 from "../assets/teams.png";
import board3 from "../assets/teams.png";
import board4 from "../assets/teams.png";

const boardMembers = [
  {
    img: board1,
    name: "Name",
    role: "Management",
  },
  {
    img: board2,
    name: "Name",
    role: "Management",
  },
  {
    img: board3,
    name: "Name",
    role: "Management",
  },
  {
    img: board4,
    name: "Name",
    role: "Management",
  },
];

const AboutUsBoard = () => {
  return (
    <section className="board-section">
      <h2 className="board-title">Board members</h2>

      <div className="board-grid">
        {boardMembers.map((member, index) => (
          <div className="board-card" key={index}>
            <div className="board-img-wrapper">
              <img src={member.img} alt="board member" />
            </div>

            <h3 className="board-name">{member.name}</h3>
            <p className="board-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsBoard;