import './AboutMe.scss';
import yop from '../../assets/yop.jpg';
import {PictureAsPdf} from '@mui/icons-material'
// import Button from '@mui/material/Button';
import {Button} from '@mui/material';
export const AboutMe = () => {
    return(
        <div id="aboutMeContainer">
            <div>
            <h2 className='title'>About me </h2>
            <div id="contentContainer">
                <img className="exampleProfPic" src={yop} alt="profilePic"/>
                <div className="descriptionContainer">
                    <p style={{"color": "whitesmoke", "fontSize": "1.2rem"}}>Fullstack web developer with a special focus on design and user experience. Always looking for the balance between technical functionality and aesthetics to create surprising functional web projects. Passionate about the visual, auditory and lyrical arts, which enrich my creativity and perspective.
                    </p>
                    <p style={{"color": "whitesmoke", "fontSize": "1.2rem"}}>
                    Take a look at my portfolio and discover how I transform ideas into memorable web experiences. I hope to collaborate with you soon!
                    </p>
                    <Button endIcon={<PictureAsPdf/>} variant='outlined' style={{"width": "40%", "marginLeft": "auto"}}>Download CV</Button>
                </div>
            </div>
            </div>
        </div>
    )
}