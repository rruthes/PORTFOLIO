import React from "react";

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link}>
      <img className="hover" src={src} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
