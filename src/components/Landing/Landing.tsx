import otacon from '../../assets/MGSOtaconPP.webp'
import gitLogo from '../../assets/Octicons-mark-github.svg.png';
import linkedinLogo from '../../assets/LinkedIn_icon.svg.png';
import './Landing.css'
export const Landing = () => {
    return(
        <div className='presentationContainer'>
            {/* <div className='landingCardContainer'> */}
                <div id="landingTextContainer">
                    <p className='helloWorld pageYellowText'>Hello friend, my name is </p>
                    <h1 style={{"margin": "8px 0 0 0", "color": "whitesmoke"}}>Ramiro Ramírez</h1>
                    <p style={{"color": "whitesmoke", "margin": "8px 0 0 0"}}>
                    <span className="auto-type"></span>
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