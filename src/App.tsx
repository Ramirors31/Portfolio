import "./App.scss";
import { Header } from "./components/header";
import { Landing } from "./components/Landing/Landing";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Carreer } from "./components/Carreer/Carreer";
import { Contact } from "./components/Contact/Contact";
import { MyProyects } from "./components/Proyects/MyProyects";
import { useEffect } from "react";
function App() {
  const hideSectionTimers:any = {};
  useEffect(() => {
    const documentSections:NodeListOf<HTMLElement> = document.querySelectorAll("section");
    const handleScroll = () => {
      documentSections.forEach((section: HTMLElement, index: number) => {
        const top = window.scrollY;
        const offset = section.offsetTop-100;
        const height = section.offsetHeight;
        if (top >= offset && top < offset + height) {
          section.classList.add("show-animate");
          if (hideSectionTimers[index]) {
            clearTimeout(hideSectionTimers[index]);
            hideSectionTimers[index] = null;
          }
          // console.log("enseñar enseñear")
        } else {
          if (!hideSectionTimers[index]) {
            hideSectionTimers[index] = setTimeout(() => {
              section.classList.remove("show-animate");
            }, 30000)
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  // window.onscroll = () => {
  //   documentSections.forEach((section) => {
  //     const top = window.scrollY;
  //     const offset = section.offsetTop;
  //     const height = section.offsetHeight;
  //     if (top >= offset && top < offset + height) {
  //       section.classList.add("show-animate");
  //     } else {
  //       section.classList.remove("show-animate");
  //     }
  //   });
  // };
  return (
    <div className="App">
      <div className="holeContent">
        {/* <section> */}
        <Header />
        {/* </section> */}
        <section className="section1 show-animate">
          <Landing />
        </section>
        <section className="section2">
          <AboutMe />
        </section>
        <section className="section3">
          <Carreer />
        </section>
        <section className="section4">
          <MyProyects />
        </section>
        <section className="section5">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
