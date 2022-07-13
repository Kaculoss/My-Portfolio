import React from "react";
import MyButton from "./MyButton";
import Ptext from "./Ptext";
import SocialMediaIcons from "./SocialMediaIcons";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-top">
          <div className="hero-img">
            <img src="./images/Sani Alhassan.jpg" alt="Sani Alhassan" />
          </div>
          <div className="hero-info">
            <h1 className="hero-heading">
              <span>Hello, I am</span>
              <span className="hero-name">Sani Alhassan</span>
            </h1>
            <Ptext>
              I am a final year BSc Construction Technology and Management
              student at the Kwame Nkrumah University of Science and Technology
              (KNUST) who also has very high interest and skill in web
              development and design. With my 3 years of experience with lots of
              practices in the field, I am confident to call my self a freelance
              web designer and developer. I love to design and make new web
              experience for people.
            </Ptext>
            <MyButton btnLink="/projects" btnText="see my works" />
          </div>
        </div>
        <SocialMediaIcons drow />
      </div>
    </div>
  );
}
