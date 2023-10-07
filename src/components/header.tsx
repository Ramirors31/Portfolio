import "../styles/Header.scss";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, ThemeProvider } from "@mui/material";
import personalTheme from "../services/themeProvider";
export const Header = () => {
  const [prevScrollPostion, setPrevScrollPostion] = useState(0);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [mobilie, setMobile] = useState("desktop");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPostion]);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    if (
      prevScrollPostion < currentScrollPosition &&
      currentScrollPosition > 180
    ) {
      setHeaderVisible(false);
    } else if (prevScrollPostion > currentScrollPosition)
      setHeaderVisible(true);
    setPrevScrollPostion(currentScrollPosition);
  };
  return (
    <div
      id="appHeaderContainer"
      className={isHeaderVisible ? "showHeader" : "hideHeader"}
    >
      <p id="headerName">ramirobskis.dev{"</>"}</p>
      <AppMenu />
      {/* <table id="headerTabsMenu" className={mobilie}>
        <tbody>
          <tr>
            <td className="menuOption">Home</td>
            <td className="menuOption">About me </td>
            <td className="menuOption">Carreer</td>
            <td className="menuOption">Projects</td>
            <td className="menuOption">Contact</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

const AppMenu = () => {
  const menuOptions = ["Home", "About me", "Carreer", "Projects", "Contact"];
  return (
    <div id="menuContainer">
      <div className="hideWhenNarrow" style={{ width: "fit-content" }}>
        {menuOptions.map((option, index) => (
          <button key={index} className="menuOption">{option}</button>
        ))}
      </div>
      <div className="hideWhenWide" style={{width:"fit-content"}}>
        <ThemeProvider theme={personalTheme}>
          <Button>
            <MenuIcon />
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};
