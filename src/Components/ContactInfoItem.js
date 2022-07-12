import React from "react";
import Ptext from "./Ptext";
import { MdPlace } from "react-icons/md";

export default function ContactInfoItem({
  icon = <MdPlace size={"2.5rem"} />,
  text = "I need text",
}) {
  return (
    <div className="contactInfoItem">
      <div className="icon">{icon}</div>
      <div className="info">
        <Ptext>{text}</Ptext>
      </div>
    </div>
  );
}
