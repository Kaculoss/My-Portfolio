import React from "react";
import { IconContext } from "react-icons";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { projectData } from "../projectData";

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function SocialMediaIcons({ drow = true }) {
  return (
    <IconContext.Provider value={{ size: "2em", margin: "0", padding: "0" }}>
      <div className="social-media-icons">
        <ul className={drow ? "drow" : "dcolumn"}>
          <li onClick={() => openInNewTab(projectData.profiles.github)}>
            <FaGithubSquare className="gh" />
            <span>GitHub</span>
          </li>
          <li onClick={() => openInNewTab(projectData.profiles.linkedin)}>
            <FaLinkedin className="li" />
            <span>LinkedIn</span>
          </li>
          <li onClick={() => openInNewTab(projectData.profiles.twitter)}>
            <FaTwitterSquare className="tt" />
            <span>Twitter</span>
          </li>
          <li onClick={() => openInNewTab(projectData.profiles.instagram)}>
            <FaInstagramSquare className="ig" />
            <span>Instagram</span>
          </li>
          <li onClick={() => openInNewTab(projectData.profiles.twitter)}>
            <FaFacebookSquare className="fb" />
            <span>Facebook</span>
          </li>
        </ul>
      </div>
    </IconContext.Provider>
  );
}
