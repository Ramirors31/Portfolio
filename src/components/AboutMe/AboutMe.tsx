import "./AboutMe.scss";
import yop from "../../assets/yop.jpg";
import { PictureAsPdf } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import personalTheme from "../../services/themeProvider";
const cv = require("../../assets/files/CVRJ.pdf");

export const AboutMe = () => {
  const cvDownload = () => {
    const filePath = cv;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "CVRJ.pdf";
    link.click();
  };
  return (
    <div id="aboutMeContainer">
      <div>
        <h2 className="title">About me </h2>
        <div id="contentContainer">
          <img className="exampleProfPic" src={yop} alt="profilePic" />
          <div className="descriptionContainer">
            <p style={{ color: "whitesmoke", fontSize: "1.2rem" }}>
              Fullstack web developer with a special focus on design and user
              experience. Always looking for the balance between technical
              functionality and aesthetics to create surprising functional web
              projects. Passionate about the visual, auditory and lyrical arts,
              which enrich my creativity and perspective.
            </p>
            <p style={{ color: "whitesmoke", fontSize: "1.2rem" }}>
              Take a look at my portfolio and discover how I transform ideas
              into memorable web experiences. I hope to collaborate with you
              soon!
            </p>
            <ThemeProvider theme={personalTheme}>
              <Button
                className="cvButton"
                onClick={cvDownload}
                endIcon={<PictureAsPdf />}
                variant="outlined"
              >
                Download CV
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};
