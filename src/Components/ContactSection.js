import React from "react";
import MyButton from "./MyButton";

export default function ContactSection() {
  return (
    <div className="contactSection">
      <div className="container">
        <h4>Have a project in mind?</h4>
        <h2>Let me help you</h2>
        <MyButton btnLink="/contact" btnText="Contact Now" />
      </div>
    </div>
  );
}
