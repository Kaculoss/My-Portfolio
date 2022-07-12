import React from "react";

export default function ProjectItem({
  img = "/images/tours.png",
  title = "Project Name",
  desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,vitae!",
  linkToWeb = "/",
  linkToCode = "/",
}) {
  return (
    <div className="projectItem">
      <a
        href={linkToWeb}
        target="_blank"
        rel="noreferrer"
        className="projectItem-img"
      >
        <img src={img} alt="project" />
      </a>
      <div className="projectItem-info">
        <a href={linkToWeb} target="_blank" rel="noreferrer">
          <h3 className="projectItem-title">{title}</h3>
        </a>
        <p className="projectItem-desc">{desc}</p>
        <div className="source-code">
          <a
            href={linkToCode}
            target="_blank"
            rel="noreferrer"
            className="source-code"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
