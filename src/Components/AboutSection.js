import React from "react";
import MyButton from "./MyButton";
import MyImages from "./MyImages";
import Ptext from "./Ptext";
import SectionTitle from "./SectionTitle";

export default function AboutSection() {
  return (
    <div className="aboutSection">
      <div className="container">
        <div className="aboutSection-left">
          <SectionTitle
            // className="section-title"
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <Ptext>
            As a freelance web designer and developer from Ghana, I create
            professional and high performance websites for my clients. I always
            try to show unique views to the audience through my design because I
            love art. And with my love for critical thinking, I always welcome
            new challenging tasks.
          </Ptext>
          <div className="aboutSection-btns">
            <MyButton btnLink="/projects" btnText="Works" />
            <MyButton btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection-right">
          <MyImages />
        </div>
      </div>
    </div>
  );
}
