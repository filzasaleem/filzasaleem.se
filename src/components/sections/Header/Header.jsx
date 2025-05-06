import "./Header.scss";
import { ArrowDownIcon } from "../../../assets/Icons";
import { Paragraph } from "../../styles/typography/Paragraph";
import { Heading } from "../../styles/typography/Heading";
import { Image } from "../../styles/images/Image";

export const Header = () => {
  const introText =
    "I am a Full Stack Developer with previous academic background in embedded systems. The coding logic comes easy for me and I can easily learn new tech stacks. I’m ready to take on greater responsibilities in web development at a company that values dedication and fosters professional development.";

  return (
    <header tabIndex="0">
      <div className="introduction">
        <Image
          sectionClassName={"profile-img"}
          elementClassName={"circle-img"}
          link={"/assets/profile1.jpg"}
          ImageAltText={"Profile Image of Filza"}
        />

        <div className="headings">
          <Heading
            level={4}
            text={"Hi, I'm Filza Saleem"}
            arial-label={"Developer greeing"}
            className={"intro-text"}
          />

          <Heading
            level={1}
            text={"Full Stack Developer"}
            arial-label={"Full Stack Developer"}
            className={"job-title"}
          />
        </div>

        <div className="intro-text">
          <Paragraph text={introText} />
        </div>
      </div>
      <div className="arrow-down bounce">
        <ArrowDownIcon />
      </div>
    </header>
  );
};
