import './Proyects.scss'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import { GitHub } from '@mui/icons-material'
import nutriliosAppImg from '../../assets/nutrilios.png';
import psychappImg from '../../assets/psychapp.png';
import { ThemeProvider } from '@mui/material';
import personalTheme from '../../services/themeProvider';

export const MyProyects = () => {
    return(
        <div id="myProyectsContainer">
            <h2 className='title'>My Proyects </h2>      
            <DevelopedProyects/>
        </div>
    )
}

const proyects: any = [
    {
        title: 'Nutrilios App', 
        description: 'POS app developed por a store in nutrition school.', 
        image: nutriliosAppImg,
        labels: ['SCSS', 'Angular', 'TypeScript', 'MySQL', 'Node']
    },
    {
        title: 'Psychapp',
        description: 'App for a psychologist to manage his patients.',
        image: psychappImg,
        labels: ['SCSS', 'Angular', 'TypeScript', 'PostreSQL', 'Node']
    }
]

const ProyectCard = ({index, proyect}: any) => {
    return(
        <Card className='proyectCard' key={index} sx={{width: 345, backgroundColor: '#1a1a1a', color: 'whitesmoke'}}>
        <CardMedia component='img' image={proyect.image} sx={{height:140}}  alt='nutriliosapp'/>
        <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
                {proyect.title}
            </Typography>
            <Typography variant='body2' sx={{color:'whitesmoke'}}>
                {proyect.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button sx={{width:'100%'}} endIcon={<GitHub/>} size='large'>
                See Repo
            </Button>
        </CardActions>
    </Card> 
    )
}

const DevelopedProyects = () => {
    return(
        <div className='developedProyects'>
            <ThemeProvider theme={personalTheme}>
                {
                    proyects.map((proyect: any, index: number) => {
                        return(
                            <ProyectCard index={index} proyect={proyect}/>
                        )
                    })
                }
            </ThemeProvider>

    </div>
    )
}