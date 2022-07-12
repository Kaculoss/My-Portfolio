import React from "react";

export default function SectionTitle({
  subheading = "This is sub heading",
  heading = "This is heading",
}) {
  return (
    <div className="sectionTitle">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </div>
  );
}
