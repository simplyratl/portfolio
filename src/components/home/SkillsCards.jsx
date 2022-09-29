import React from "react";
import skills from "../skills.json";

const SkillsCards = () => {
  const calculateCardSize = (size) => {
    switch (size) {
      case 1:
        return "";
      case 2:
        return "grid-span-2";
      case 3:
        return "grid-3";
    }
  };

  return (
    <section className="skills-cards-container">
      <div className="skills-cards-wrapper">
        {skills.map((skill, index) => (
          <div
            className={`card ${calculateCardSize(skill.block_size)}`}
            style={{ "--background": skill.background }}
            key={index}
          >
            <span>{skill.title}</span>
            <div className="card-wrapper">
              <div className="animation">
                <img src={skill.animation} alt={skill.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCards;
