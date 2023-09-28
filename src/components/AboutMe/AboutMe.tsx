import './AboutMe.css';
import yop from '../../assets/yop.jpg';
export const AboutMe = () => {
    return(
        <div id="aboutMeContainer">
            <div className="presentationCard">
            <img className="exampleProfPic" src={yop} alt="profilePic"/>
            <div id="myDescriptionContainer">
                <h2 style={{"color": "#edef70", "width": "100%", "paddingBottom": "10px"}}>About me </h2>
                <p style={{"color": "whitesmoke", "fontSize": "1.2rem"}}>Fullstack web developer with a special focus on design and user experience. Always looking for the balance between technical functionality and aesthetics to create surprising functional web projects. Passionate about the visual, auditory and lyrical arts, which enrich my creativity and perspective.
                </p>
                <p style={{"color": "whitesmoke", "fontSize": "1.2rem"}}>
                Take a look at my portfolio and discover how I transform ideas into memorable web experiences. I hope to collaborate with you soon!
                </p>
                <button style={{"width": "40%", "marginLeft": "auto"}} className="actionBtn">Download CV</button>
            </div>
            </div>
        </div>
    )
}