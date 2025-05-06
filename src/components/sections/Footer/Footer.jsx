import "./Footer.scss";
import { Heading } from "../../styles/typography/Heading";
import { Image } from "../../styles/images/Image";

export const Footer = () => {
  return (
    <footer className="contact-container">
      <div className="contact-wrapper">
        <Heading
          level={2}
          text="Let's talk"
          aria-label="This is the main heading"
          className="contact-heading"
        />
        <Image
          sectionClassName={"profile-img"}
          elementClassName={"circle-img"}
          link={"/assets/profile.jpeg"}
          ImageAltText={"Profile Image of Filza"}
        />
        <div className="contact-info">
          <Heading level={4} text={"Filza Saleem"} />
          <a href="tel:+730300766">
            <Heading level={4} text={"+46(0)70817 21 48"} />
          </a>
          <a href="mailto:hey@filzasaleem.se">
            <Heading level={4} text={"hey@filzasaleem.se"} />
          </a>
        </div>
        <div className="icons">
          <a href="https://www.linkedin.com/in/filza-saleem-171ba9131/">
            <Image
              sectionClassName={"icon-box"}
              elementClassName={"icon"}
              link={"/assets/icons/linkedin.svg"}
              ImageAltText={"Link to LinkedIn"}
            />
          </a>
          <a href="https://github.com/filzasaleem">
            <Image
              sectionClassName={"icon-box"}
              elementClassName={"icon"}
              link={"/assets/icons/github.svg"}
              ImageAltText={"Link to GitHub"}
            />
          </a>
          <a href="https://stackoverflowteams.com/c/technigo/users/578/">
            <Image
              sectionClassName={"icon-box"}
              elementClassName={"icon"}
              link={"/assets/icons/stackoverflow.svg"}
              ImageAltText={"Link to StackOverflow"}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
