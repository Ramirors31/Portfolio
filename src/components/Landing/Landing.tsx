import otacon from '../../assets/MGSOtaconPP.webp'
import gitLogo from '../../assets/Octicons-mark-github.svg.png';
import linkedinLogo from '../../assets/LinkedIn_icon.svg.png';
import './Landing.scss'
import Typewriter from 'typewriter-effect';
export const Landing = () => {
    return(
        <div className='presentationContainer'>
            {/* <div className='landingCardContainer'> */}
                <div id="landingTextContainer">
                    <p className='helloWorld pageYellowText'>Hello friend, my name is </p>
                    <h1 style={{"margin": "8px 0 0 0", "color": "whitesmoke"}}>Ramiro Ramírez</h1>
                    <p style={{"color": "whitesmoke", "margin": "8px 0 0 0", "fontSize": "1.2rem"}}>
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
                        <img className="iconImage" src={gitLogo} alt="git"/>
                        <img className="iconImage" src={linkedinLogo} alt="linkedin"/>
                    </div>
                </div>
                <img className='exampleProfPic' src={otacon} alt="otacon" />
            {/* </div> */}
        </div>
    )
}