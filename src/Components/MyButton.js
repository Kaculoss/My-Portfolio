import React from "react";
import { Link } from "react-router-dom";

export default function MyButton({
  btnLink = "Test",
  btnText = "Test",
  outline = false,
  dload = false,
}) {
  return (
    <div className="MyButton">
      {dload ? (
        <Link
          to={btnLink}
          className={
            outline ? "outline-link-button link-button" : "link-button"
          }
          data={btnText}
          target="_blank"
          download
        >
          {outline ? "" : btnText}
        </Link>
      ) : (
        <Link
          to={btnLink}
          className={
            outline ? "outline-link-button link-button" : "link-button"
          }
          data={btnText}
        >
          {outline ? "" : btnText}
        </Link>
      )}
    </div>
  );
}
