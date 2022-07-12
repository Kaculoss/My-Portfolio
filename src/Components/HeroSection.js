import React from "react";
import MyButton from "./MyButton";
import Ptext from "./Ptext";
import SocialMediaIcons from "./SocialMediaIcons";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero-heading">
          <span>Hello, I am</span>
          <span className="hero-name">Sani Alhassan</span>
        </h1>
        <div className="hero-img">
          <img src="./images/Sani crop.jpg" alt="Sani Alhassan" />
        </div>
        <div className="hero-info">
          <Ptext>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            fugit quidem quae, aspernatur impedit esse cum ipsum assumenda
            ducimus expedita! Iusto odit recusandae aperiam sint!
          </Ptext>
          <MyButton btnLink="/projects" btnText="see my works" />
          <SocialMediaIcons drow />
        </div>
      </div>
    </div>
  );
}
