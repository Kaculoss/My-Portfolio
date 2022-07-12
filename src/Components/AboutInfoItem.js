import React from "react";
import Ptext from "./Ptext";

export default function AboutInfoItem({
  title = "This is Title",
  items = ["HTML", "CSS", "JS"],
}) {
  return (
    <div className="AboutInfoItem">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <Ptext>{item}</Ptext>
          </div>
        ))}
      </div>
    </div>
  );
}
