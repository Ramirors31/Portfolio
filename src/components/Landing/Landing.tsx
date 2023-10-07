import otacon from "../../assets/MGSOtaconPP.webp";
import { ThemeProvider } from "@mui/material";
import "./Landing.scss";
import { GitHub, LinkedIn } from "@mui/icons-material";
import personalTheme from "../../services/themeProvider";
import node from "../../assets/stackIcon/node.png";
import react from "../../assets/stackIcon/React-icon.svg.png";
import postgresql from "../../assets/stackIcon/Postgresql_elephant.svg.png";
import js from "../../assets/stackIcon/Unofficial_JavaScript_logo_2.svg.png";
import html from "../../assets/stackIcon/html.png";
import css from "../../assets/stackIcon/css.png";
import angular from "../../assets/stackIcon/angular.png";
export const Landing = () => {
  return (
    <div className="generalContainer animate">
      <div className="presentationContainer">
        {/* <div className='landingCardContainer'> */}
        <div id="landingTextContainer">
          <p className="helloWorld pageYellowText">Hello friend, my name is </p>
          <h1 style={{ margin: "8px 0 0 0", color: "whitesmoke" }}>
            Ramiro Ramírez
          </h1>
          <p
            style={{
              color: "whitesmoke",
              margin: "8px 0 0 0",
              fontSize: "1.2rem",
            }}
          >
            <span>
              Software Engineer.
              {/* <Typewriter options={{
                                strings: ['Software Engeener.', 'Frontend Developer.', 'Backend Developer.', 'uwu.'],
                                autoStart: true,
                                loop: true,
                            }} />   */}
            </span>
          </p>
          <div className="iconsContainer">
            <ThemeProvider theme={personalTheme}>
              <a
                target="_blank"
                href="https://github.com/Ramirors31"
                rel="noreferrer"
              >
                <GitHub className="themeIcon" color="primary" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ramiro-jos%C3%A9-ram%C3%ADrez-siqueiros-240038220"
                rel="noreferrer"
              >
                <LinkedIn className="themeIcon" color="primary" />
              </a>
            </ThemeProvider>
          </div>
        </div>
        <img className="exampleProfPic" src={otacon} alt="otacon" />
        {/* </div> */}
      </div>
      <div className="myStackContainer">
        <p style={{ color: "whitesmoke" }}>My stack</p>
        <img src={react} alt="reactLogo" />
        <img src={angular} alt="reactLogo" />
        <img src={node} alt="reactLogo" />
        <img src={html} alt="reactLogo" />
        <img src={css} alt="reactLogo" />
        <img src={js} alt="reactLogo" />
        <img src={postgresql} alt="reactLogo" />
      </div>
    </div>
  );
};
