import React from "react";
import { MdDesktopMac } from "react-icons/md";
import Ptext from "./Ptext";
import { IconContext } from "react-icons";

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = "web design",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore rerum repellat esse voluptates reprehenderit officiis, absint ipsam eaque.",
}) {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <div className="servicesItem">
        <div className="servicesItem-icon">{icon}</div>
        <p className="servicesItem-title">{title}</p>
        <Ptext>{desc}</Ptext>
      </div>
    </IconContext.Provider>
  );
}
