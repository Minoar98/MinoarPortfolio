import React from "react";

const projects = [
  {
    name: "MobileCart",
    desc: "React app forMobileCart with Tailwind CSS styling.",
    link: "https://github.com/Minoar98/MobileCart",
  },
  {
    name: "Grocery App",
    desc: "CRUD React app for managing daily grocery items.",
    link: "https://github.com/Minoar98/GroceryBud",
  },
  {
    name: "FoodMenuApp",
    desc: "CRUD React app for managing daily grocery items.",
    link: "https://github.com/Minoar98/FoodMenuApp",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{ padding: "3rem 1rem", maxWidth: "800px", margin: "auto" }}
    >
      <h2 style={{ color: "#38bdf8", textAlign: "center" }}>Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            style={{
              background: "#1e293b",
              color: "#f1f5f9",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ color: "#38bdf8" }}>{project.name}</h3>
            <p>{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#38bdf8", textDecoration: "none" }}
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
