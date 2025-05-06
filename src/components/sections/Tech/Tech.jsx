import { Heading } from "../../styles/typography/Heading";
import { Paragraph } from "../../styles/typography/Paragraph";
import "./Tech.scss";

export const Tech = () => {
  const techStack =
    "Laravel,PHP, React,React Hooks,Redux, JavaScript, Typescript,Mongo DB, mysql, RestAPIs,HTML, CSS, Flexbox, Grids, TailwindCSS, ES6, JSX, mob-programming, pair-programming, GitHub, Agile, Wordpress.";
  return (
    <section className="tech-section">
      <div className="tech-container">
        <Heading level={2} text={"Tech"} />

        <div className="tech-skills">
          <Paragraph text={techStack} className={"tech-p"} />
        </div>
      </div>
    </section>
  );
};
