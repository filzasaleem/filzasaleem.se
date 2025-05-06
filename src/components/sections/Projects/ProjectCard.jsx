import "./Projects.scss";
// import newsImage from "/assets/project-img/news.png";
import { GitHubBlackIcon, GlobeBlackIcon } from "../../../assets/Icons";
import { useState } from "react";
import { projects } from "./repo-data.json";
import { Tag } from "/src/components/styles/typography/Tag.jsx";
import { Paragraph } from "../../styles/typography/Paragraph";
import { Heading } from "../../styles/typography/Heading";
import {Button} from "../../styles/button/Button";

export const ProjectCard = ({ projectsData }) => {
  // State to track the number fo cards to display
  const [visibleRepos, setVisibleRepos] = useState(5);

  const toggleVisibleCards = () => {
    // Show 5 cards or all cards based on current state
    setVisibleRepos((prevVisibleCards) =>
      prevVisibleCards === 5 ? projects.length : 5
    );
  };

  const showMoreLessLabel = visibleRepos === 5 ? "Show more" : "Show less";

  return (
    <div className="project-list">

    {projects.slice(0, visibleRepos).map((project) =>{

        return (
          <article className="project-item" key={project.id}>
             <img
              src={project.imageUrl}
              alt="reshare Application"
              className="project-image"
              onError={(e) => console.error("Image failed to load:", e)}
            />
            <div className="project-details">
              <div className="project-description">
                  <Heading level={3} text={project.publicName} />
                  <Paragraph text={project.description} />
              </div>
              <div className="skill-tags">
                {project.techStacks.map((topic, index) => (
                  <Tag key={index} tagText={topic} />
                ))}
              </div>
              <div className="button-wrapper">
                <Button
                  icon={<GlobeBlackIcon />}
                  label="Live demo"
                  link={project.link}
                  className="netlify-btn"
                />
                <Button
                  icon={<GitHubBlackIcon />}
                  label="View the code"
                  link={project.gitLink}
                  className="github-btn"
                />
              </div>

            </div>

          </article>
        );
      })}

      <div className="tn-wrapper">
        <Button
          label={showMoreLessLabel}
          className="show-more-btn"
          onClick={toggleVisibleCards}
          ariaLabel={showMoreLessLabel}
        />
      </div>
    </div>
  );
};
