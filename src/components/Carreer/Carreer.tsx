import './Carreer.css';
export const Carreer = () => {
    const jobs = [
      {
        "title": "Fullstack Intern",
        "company": "Pertendo",
        "date": "December 2020- May 2021",
        "description": [
          "Frontend development using angular and react",
          "Backend development with node",
          "Firebase",
          "SCRUM"
        ]
      },
      {
        "title": "Fullstack Developer",
        "company": "Pertendo",
        "date": "May 2021 - Actually",
        "description": [
          "Frontend Development with angular and react",
          "Backend development with node",
          "Firebase",
          "Supase",
          "Interface and software requierments design",
          "SCRUM"
        ]
      },
    ]
    return(
        <div id="carreerContainer">
        <h2 style={{"color": "#edef70",  "borderBottom": "2px solid #edef70", "width": "100%", "paddingBottom": "10px"}}>Carrer </h2>
        {
          jobs.map((job, index) => {
            return (
              <div className="carreerCard">
                <h3 style={{"margin": "0 0 10px 0"}}>{job.title}</h3>
                <h4 style={{"margin": "0 0 10px 0"}}>{job.company}</h4>
                <h5 style={{"margin": "0 0 10px 0"}}>{job.date}</h5>
                <ul key={index}>
                  {job.description.map((descVal, index) => <li key={index}>{descVal}</li>)}
                </ul>
              </div>
            )
          })
        }
      </div>
    )
}