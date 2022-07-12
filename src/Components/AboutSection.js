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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            veritatis temporibus nihil quam error molestiae iusto deserunt
            quibusdam fugiat quae impedit ea vel nulla, ullam illo aperiam
            accusantium cupiditate animi!
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
