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
                Mathematics has always been my favorite since I was first
                introduced to the subject. As a young boy from Koforidua in the
                eastern region of Ghana, my mates called me "the mathematician".
                As a result, taking on challenges with complex logical problems
                has always been something of joy to me. I am also a naturally
                gifted artist who loves to design stuffs for the audience to
                appreciate my unique point of view. I also love to create things
                that can benefits others.
                <br />
                <br />
                Fortunately for me, my educational path has been the best,
                because it satisfies my foundamental interests. General Science
                with Technical Drawing (TD) replacing Biology as an elective in
                senior high and currently, a BSc. Construction Technology and
                Management (CTM) student in varsity. These courses allows me to
                build on my interests in mathematics and art. I became acquinted
                with coding in my first year at KNUST and I have loved the
                concept ever since. I decided not to let my course in
                construction technology stand in my way of also becoming a
                programmer so I started my first "Hello World!" course on
                YouTube right away.
                <br />
                <br />
                Aside the logical aspect of coding, it is also an art in its own
                way for me. It has always been a challenge, taking side coding
                courses online for my 4 years in university along with my main
                course in construction technology, but it is worth it. I love
                coding and now I have the opportunity to design along with it. I
                find it very interesting and I enjoy every process of it.
                Helping to make the world a better place in any way I can, is my
                vision. And as the world is becoming better every day with
                technology, it is now time to put my programming skills to work.
              </Ptext>
            </div>
            <MyButton
              btnText="Download Resume"
              btnLink="/files/Sani Alhassan - Resume.pdf"
              dload={true}
            />
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
