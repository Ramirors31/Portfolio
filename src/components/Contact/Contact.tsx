import {TextField, Button} from '@mui/material'
import './Contact.scss';
import otaconGif from '../../assets/metal-gear-solid-otacon.gif';
export const Contact = () => {
    return (
        <div>
            <h2 className="title"> Contact</h2>
            <div id="contactContainer">
                <div className="formContainer">
                    <div className="formCard">
                        <TextField style={{borderColor: 'red'}} className='input' focused label="Name" defaultValue="..." />
                        <TextField className='input' focused label="Email" defaultValue="example@gmail.com"/>
                        <TextField className='input' focused label="Message" defaultValue="Escribe tu mensaje aqui..."/>  
                        <Button variant='contained'>Send</Button>
                    </div>
                </div>
                <div className='imageContainer'>
                    <img src={otaconGif} alt="otacon.gif" />
                </div>

            </div>
        </div>
    )
}