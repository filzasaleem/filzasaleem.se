import { Heading } from "../../styles/typography/Heading";
import { Paragraph } from "../../styles/typography/Paragraph";
import "./Tech.scss";

export const Tech = () => {
  const techStack =
    "HTML, CSS, Flexbox, Grids, TailwindCSS, JavaScript, Typescript, ES6, JSX, React.js, React Hooks, Node.js, Mongo DB, Express, PHP, Laravel, Alpin.js, Livewire, Web Accessibility, RestAPIs, mob-programming, pair-programming, GitHub, Agile, UI, Wordpress.";
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
