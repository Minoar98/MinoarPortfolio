import React from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "Tailwind CSS",
  "Git & GitHub",
  "Responsive Design",
];

const Skills = () => {
  return (
    <section
      id="skills"
      style={{ padding: "3rem 1rem", maxWidth: "800px", margin: "auto" }}
    >
      <h2 style={{ color: "#38bdf8", textAlign: "center" }}>Skills</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            style={{
              background: "#1e293b",
              color: "#f1f5f9",
              padding: "1rem",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
