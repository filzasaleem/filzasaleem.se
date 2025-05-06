import "./Projects.scss";

import { useState, useEffect } from "react";
import { Heading } from "../../styles/typography/Heading";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {



  return (
    <section className="project-section">
      <div className="project-container">
        <Heading
          level={2}
          text={"Featured Projects"}
          className={"project-title"}
        />

        <ProjectCard  />
      </div>
    </section>
  );
};
