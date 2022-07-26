import React, { useState } from "react";

export default function ProjectItem({
  img,
  name,
  description,
  webURL,
  githubURL,
}) {
  const [readMore, setReadMore] = useState(true);

  return (
    <div className="projectItem">
      <a
        href={webURL}
        target="_blank"
        rel="noreferrer"
        className="projectItem-img"
      >
        <img src={img} alt="project" />
      </a>
      <div className="projectItem-info">
        <a href={webURL} target="_blank" rel="noreferrer">
          <h3 className="projectItem-title">{name}</h3>
        </a>
        {description.length < 100 ? (
          <p className="projectItem-desc">{description}</p>
        ) : (
          <p className="projectItem-desc">
            {readMore ? description.slice(0, 100) : description}
            <span
              onClick={() => setReadMore(!readMore)}
              className="read-or-hide"
            >
              {readMore ? "...read more" : " show less"}
            </span>
          </p>
        )}
        <div className="source-code">
          {githubURL && (
            <a
              href={githubURL}
              target="_blank"
              rel="noreferrer"
              className="source-code"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
