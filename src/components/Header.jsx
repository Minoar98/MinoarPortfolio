import React from "react";

const Header = () => {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "2rem",
        background: "#0f172a",
        color: "#38bdf8",
      }}
    >
      <h1>Syed Minoar Hasan</h1>
      <p style={{ color: "#f1f5f9" }}>
        Frontend Developer | React | JavaScript | Tailwind CSS
      </p>
      <nav style={{ marginTop: "1rem" }}>
        <a
          href="#about"
          style={{ margin: "0 1rem", color: "#f1f5f9", textDecoration: "none" }}
        >
          About
        </a>
        <a
          href="#skills"
          style={{ margin: "0 1rem", color: "#f1f5f9", textDecoration: "none" }}
        >
          Skills
        </a>
        <a
          href="#projects"
          style={{ margin: "0 1rem", color: "#f1f5f9", textDecoration: "none" }}
        >
          Projects
        </a>
        <a
          href="#contact"
          style={{ margin: "0 1rem", color: "#f1f5f9", textDecoration: "none" }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
