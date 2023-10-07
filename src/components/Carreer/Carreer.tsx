import "./Carreer.scss";
import BoltIcon from '@mui/icons-material/Bolt';
export const Carreer = () => {
  return (
    <div id="carreerContainer">
      <h2 className="title">Carrer </h2>
      <div id="carreers">
        <div className="carreerCardsContainer">
          <JobCard job={jobs[0]} index={0} key={0} />
        </div>
        <div className="carreerCardsContainer">
          <JobCard job={jobs[1]} index={1} key={1} />
        </div>
      </div>
    </div>
  );
};

const JobCard = (props: any) => {
  return (
    <div className={"carreerCard"+props.index + " carreerCard"}>
      <BoltIcon className={"boltIcon " + "boltIcon"+ props.index}/>
      <div style={{ position: "relative" }}>
        {/* <div className="cardPopover"></div> */}
        <h3>{props.job.title}</h3>
        <h4>{props.job.company}</h4>
        <h5>{props.job.date}</h5>
        <ul key={props.index}>
          {props.job.description.map((descVal: any, index: any) => (
            <li key={index}>{descVal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const jobs = [
  {
    title: "Fullstack Intern",
    company: "Pertendo",
    date: "December 2020- May 2021",
    description: [
      "Frontend development using angular and react",
      "Backend development with node",
      "Firebase",
      "SCRUM",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Pertendo",
    date: "May 2021 - Actually",
    description: [
      "Frontend Development with angular and react",
      "Backend development with node",
      "Firebase",
      "Supase",
      "Interface and software requierments design",
      "SCRUM",
    ],
  },
];
