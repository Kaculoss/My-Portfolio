import React from "react";
import AboutInfoItem from "../Components/AboutInfoItem";
import ContactSection from "../Components/ContactSection";
import MyButton from "../Components/MyButton";
import Ptext from "../Components/Ptext";
import { projectData } from "../projectData";

export default function About() {
  return (
    <div className="aboutPage">
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about-subheading">
              Hi, I am <span>Sani Alhassan</span>
            </p>
            <h2 className="about-heading">A freelance Web Developer</h2>
            <div className="about-info">
              <Ptext>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus nostrum unde perspiciatis nesciunt quaerat laudantium
                ipsum voluptatem facere debitis numquam iure eum corrupti,
                minima hic nisi. Vel, fugit dignissimos nemo nulla autem eaque
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem provident earum nihil sit cumque quos, aut
                excepturi veritatis numquam? Saepe, repellendus reprehenderit?
                Iste tempore itaque sequi quam deserunt iusto, voluptatum harum
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                optio doloribus vel quisquam in. Dolorem exercitationem
                adipisci, commodi quis aliquam reiciendis iusto beatae enim
                dicta neque praesentium vel eaque impedit accusantium iure
              </Ptext>
            </div>
            <MyButton btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src="/images/Sani Red.jpg" alt="Sani" />
          </div>
        </div>
        <div className="about-info-items">
          <div className="about-info-item">
            <h1 className="about-info-heading">Education</h1>
            {projectData.aboutMe.education.map((item) => {
              const { stage, school } = item;
              return (
                <AboutInfoItem key={stage} title={stage} items={[school]} />
              );
            })}
          </div>
          <div className="about-info-item">
            <h1 className="about-info-heading">My Skills</h1>
            {projectData.aboutMe.skill.map((item) => {
              const { type, skills } = item;
              return <AboutInfoItem key={type} title={type} items={skills} />;
            })}
          </div>
          <div className="about-info-item">
            <h1 className="about-info-heading">Experiences</h1>
            {projectData.aboutMe.experience.map((item) => {
              const { year, work } = item;
              return <AboutInfoItem key={year} title={year} items={work} />;
            })}
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
