import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectGroup({ projects }) {
  return (
    <div className="projectGroup">
      <div className="main-title">
        <h2>{projects.name} Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="main-projects">
        {projects.projects.map((project) => {
          return <ProjectItem key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
}
