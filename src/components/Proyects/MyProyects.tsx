import "./Proyects.scss";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import westCutsImg from "../../assets/imgs/westCuts.jpg";
import osoGuidesImg from "../../assets/imgs/osoGuides.jpg";
import logisticsImg from "../../assets/imgs/logistics.jpg";
import myPortolioImg from "../../assets/imgs/myPortfolio.png";
import sisEduImg from "../../assets/imgs/sisEdu.jpg";
import { ThemeProvider } from "@mui/material";
import personalTheme from "../../services/themeProvider";

export const MyProyects = () => {
  return (
    <div className="animate" id="myProyectsContainer">
      <h2 className="title">My Proyects </h2>
      <DevelopedProyects />
    </div>
  );
};

const proyects: any = [
  {
    title: "This Portfolio",
    description: "My very own personal portfolio.",
    image: myPortolioImg,
    labels: ["React", "SCSS", "TypeScript"],
    link: "https://github.com/Ramirors31/Portfolio",
  },
  {
    title: "West Cuts",
    description:
      "Native android app for a local barber shop, for information and appointments.",
    image: westCutsImg,
    labels: ["Kotlin", "Firebase", "Android Studio"],
    link: "https://github.com/Ramirors31/WestCutsBarberShop",
  },
  {
    title: "Oso Guides",
    description:
      "Prototype social network developed using React Native and firebase, for students where they can meet other students to help them out in their projects or to share there one projects in a Tinder Like section.",
    image: osoGuidesImg,
    labels: ["React", "CSS", "Firebase"],
    link: "https://github.com/Ramirors31/OsoGuides",
  },
  {
    title: "Logistics",
    description:
      "Logistics is a currently in development project that Iconsists of a logistics system to control an inventory, distributors, sales and product shipments.",
    image: logisticsImg,
    labels: ["Python", "React", "HTML", "CSS", '"SQL'],
    link: "https://github.com/Ramirors31/LogisTICS/tree/main",
  },
  {
    title: "SisEdu",
    description:
      "React Web Site for elementary school teachers so they can administrate their groups and the homeworks students send.",
    image: sisEduImg,
    labels: ["React", "CSS", "Firebase"],
    link: "https://github.com/Ramirors31/SisEdu",
  },
];

const ProyectCard = ({ index, proyect }: any) => {
  return (
    <Card
      className="proyectCard"
      key={index}
      sx={{ width: 345, backgroundColor: "#1a1a1a", color: "whitesmoke", display: "flex", flexDirection: "column" }}
    >
      <CardMedia
        component="img"
        image={proyect.image}
        sx={{ height: 140 }}
        alt="nutriliosapp"
      />
      <CardContent>
        {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
          <Typography gutterBottom variant="h5" component="div">
            {proyect.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "whitesmoke" }}>
            {proyect.description}
          </Typography>
        {/* </div> */}
      </CardContent>
      <CardActions sx={{marginTop: "auto"}} style={{marginTop: "auto"}}>
          <Button
            target="_blank"
            href={proyect.link}
            sx={{ width: "100%" }}
            endIcon={<GitHub />}
            size="large"
          >
            See Repo
          </Button>
      </CardActions>
    </Card>
  );
};

const DevelopedProyects = () => {
  return (
    <div className="developedProyects">
      <ThemeProvider theme={personalTheme}>
        {proyects.map((proyect: any, index: number) => {
          return <ProyectCard key={index} index={index} proyect={proyect} />;
        })}
      </ThemeProvider>
    </div>
  );
};
