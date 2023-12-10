import React, { useState } from "react";
import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const technicalSkills = {
    languages: ["C++", "JavaScript", "Python", "SQL"],
    databaseSystems: ["MongoDB", "PostgreSQL", "AWS Redshift", "Azure SQL Database", "MySQL"],
    frameworks: ["Node.js", "Express.js", "Flask", "React.js"],
    toolsAndTechnologies: [
      "Git/GitHub",
      "Netlify",
      "Docker",
      "Postman",
      "Jira",
      "AWS (S3, Lambda, EC2)",
      "Azure",
      "ElasticSearch",
    ],
  };

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">Here are some of my projects...</p>
      </div>
      <div className="pl-list">
        {projects.slice(0, visibleProjects).map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      {visibleProjects < projects.length && (
        <button className="show-more-btn" onClick={showMoreProjects}>
          Show More Projects
        </button>
      )}

      {/* Technical Skills Section */}
      <div className="technical-skills">
      
        <h2 className="skills-title">Technical Skills</h2>
        <p className="pl-desc">Gained Practical expertise with hands-on experience across these diverse tools and technologies..</p>
        <div className="skills-box">
          <div className="skills-category">
            <strong>Languages</strong>
            <div className="skills-items">{technicalSkills.languages.join(" | ")}</div>
          </div>
          <div className="skills-category">
            <strong>Database Systems</strong>
            <div className="skills-items">{technicalSkills.databaseSystems.join(" | ")}</div>
          </div>
          <div className="skills-category">
            <strong>Frameworks</strong>
            <div className="skills-items">{technicalSkills.frameworks.join(" | ")}</div>
          </div>
          <div className="skills-category">
            <strong>Tools and Technologies</strong>
            <div className="skills-items">{technicalSkills.toolsAndTechnologies.join(" | ")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
