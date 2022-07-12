import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { projectData } from "../projectData";
import ProjectItem from "./ProjectItem";
import SectionTitle from "./SectionTitle";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import MyRadioButton from "./MyRadioButton";
import { CSSTransition, SwitchTransition } from "react-transition-group";

SwiperCore.use([Navigation]);

export default function ProjectSection() {
  const [category, setCategory] = useState("Basic");
  const [viewProjects, setViewProjects] = useState(projectData.allProjects[0]);
  const theProjects = {
    Basic: projectData.allProjects[0],
    Medium_Class: projectData.allProjects[1],
    Large_Scale: projectData.allProjects[2],
  };

  useEffect(() => {
    if (category === "Basic") {
      setViewProjects(theProjects.Basic);
    } else if (category === "Medium Class") {
      setViewProjects(theProjects.Medium_Class);
    } else {
      setViewProjects(theProjects.Large_Scale);
    }
  }, [
    category,
    theProjects.Basic,
    theProjects.Medium_Class,
    theProjects.Large_Scale,
  ]);

  return (
    <div className="projectSection">
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my projects" />
        <div className="projects-allitems">
          <MyRadioButton
            showAll={false}
            category={category}
            setCategory={setCategory}
          />
          <SwitchTransition>
            <CSSTransition key={category} timeout={600} classNames="fade">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
              >
                {viewProjects.projects.map((project) => {
                  return (
                    <SwiperSlide key={project.id}>
                      <ProjectItem img={project.img} title={project.name} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </div>
  );
}
