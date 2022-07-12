import { projectData } from "../projectData";
import { IconContext } from "react-icons";
import { FaFileCode } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import SocialMediaIcons from "../Components/SocialMediaIcons";
import MyButton from "../Components/MyButton";
import ContactSection from "../Components/ContactSection";
import Ptext from "../Components/Ptext";
import MyRadioButton from "../Components/MyRadioButton";
import ProjectGroup from "../Components/ProjectGroup";
import { useEffect, useState } from "react";

function Projects() {
  const [category, setCategory] = useState("All");
  const [viewProjects, setViewProjects] = useState(projectData.allProjects);
  const [searchText, setSearchText] = useState("");

  const theProjects = {
    Basic: projectData.allProjects[0],
    Medium_Class: projectData.allProjects[1],
    Large_Scale: projectData.allProjects[2],
    All: projectData.allProjects,
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      if (category === "Basic") {
        setViewProjects([theProjects.Basic]);
      } else if (category === "Medium Class") {
        setViewProjects([theProjects.Medium_Class]);
      } else if (category === "Large-scale") {
        setViewProjects([theProjects.Large_Scale]);
      } else {
        setViewProjects(theProjects.All);
      }
    }
  };

  useEffect(() => {
    if (searchText === "") {
      return;
    } else {
      if (category === "Basic") {
        const filtered = theProjects.Basic.projects.filter((item) =>
          item.name.toLowerCase().match(searchText.toLowerCase())
        );
        setViewProjects([{ name: "basic", projects: filtered }]);
      }
      if (category === "Medium Class") {
        const filtered = theProjects.Medium_Class.projects.filter((item) =>
          item.name.toLowerCase().match(searchText.toLowerCase())
        );
        setViewProjects([{ name: "medium class", projects: filtered }]);
      }
      if (category === "Large-scale") {
        const filtered = theProjects.Large_Scale.projects.filter((item) =>
          item.name.toLowerCase().match(searchText.toLowerCase())
        );
        setViewProjects([{ name: "large-scale", projects: filtered }]);
      }
      if (category === "All") {
        const filtered1 = theProjects.Basic.projects.filter((item) =>
          item.name.toLowerCase().match(searchText.toLowerCase())
        );

        const filtered2 = theProjects.Medium_Class.projects.filter((item) =>
          item.name.toLowerCase().match(searchText.toLowerCase())
        );

        const filtered3 = theProjects.Large_Scale.projects.filter((item) =>
          item.name.toLowerCase().match(searchText.toLowerCase())
        );
        setViewProjects([
          { name: "basic", projects: filtered1 },
          { name: "medium class", projects: filtered2 },
          { name: "large-scale", projects: filtered3 },
        ]);
      }
    }
  }, [
    searchText,
    category,
    theProjects.Basic,
    theProjects.Medium_Class,
    theProjects.Large_Scale,
    theProjects.All,
  ]);

  useEffect(() => {
    if (category === "Basic") {
      setViewProjects([theProjects.Basic]);
    } else if (category === "Medium Class") {
      setViewProjects([theProjects.Medium_Class]);
    } else if (category === "Large-scale") {
      setViewProjects([theProjects.Large_Scale]);
    } else {
      setViewProjects(theProjects.All);
    }
  }, [
    category,
    theProjects.Basic,
    theProjects.Medium_Class,
    theProjects.Large_Scale,
    theProjects.All,
  ]);

  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <div className="projectPage">
        <div className="projectPage-header">
          <div className="info">
            <SocialMediaIcons drow />
            <div className="personal-info">
              <h1>Sani's Projects</h1>
              <Ptext>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                neque inventore voluptatum officiis? Laudantium amet iure
                tenetur. Delectus doloremque quos earum, sunt adipisci ex
                recusandae, hic impedit deserunt autem non.
              </Ptext>
            </div>
            <MyButton
              btnLink="/"
              btnText={
                <>
                  <FaFileCode size="1.5em" />
                  <span>Portfolio's Source Codes</span>
                </>
              }
            />
          </div>
          <div className="projectPage-img">
            <img src="./images/head.webp" alt="head" />
          </div>
        </div>
        <div className="container">
          <main className="projects-main">
            <div className="projects-main-up">
              <MyRadioButton
                showAll
                category={category}
                setCategory={setCategory}
              />
              <div className="projects-searchBar">
                <form>
                  <input
                    type="text"
                    value={searchText}
                    onChange={handleChange}
                    placeholder="Project Name"
                  />
                  <MdSearch className="searchIcon" />
                </form>
              </div>
            </div>
            {viewProjects.map((project) => (
              <ProjectGroup key={project.name} projects={project} />
            ))}
          </main>
          <ContactSection />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Projects;
