import { TextField, Button } from "@mui/material";
import "./Contact.scss";
import otaconGif from "../../assets/metal-gear-solid-otacon.gif";
import { ThemeProvider } from "@mui/material";
import personalTheme from "../../services/themeProvider";
export const Contact = () => {
  return (
    <div className="animate">
      <ThemeProvider theme={personalTheme}>
        <h2 className="title"> Contact</h2>
        <div id="contactContainer">
          <div className="formContainer">
            <div className="formCard">
              <TextField
                sx={{color: "whitesmoke !important"}}
                className="input"
                focused
                label="Name"
              />
              <TextField
                className="input"
                focused
                label="Email"
              />
              <TextField
                className="input"
                focused
                label="Message"
              />
              <Button variant="contained">Send</Button>
            </div>
          </div>
          <div className="imageContainer">
            <img src={otaconGif} alt="otacon.gif" />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};
