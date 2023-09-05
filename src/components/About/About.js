import React, { useState, useEffect } from 'react'
import Aboutimg from './sinfondo.png'
import mobileImage from '../../assets/mobile3.jpg'

import './About.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Typography from '@mui/material/Typography';
import BalanceIcon from '@mui/icons-material/Balance';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ShieldIcon from '@mui/icons-material/Shield';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const About = () => {
  const [ isDesktop, setIsDesktop] = useState(window.innerWidth > 700);

  useEffect(() => {
    function hendleResize() {
      setIsDesktop(window.innerWidth > 768);
    }

    window.addEventListener('resize', hendleResize);
    return () => {
      window.removeEventListener('resize', hendleResize);
    }
  }, []);

  return (
    <div id="about" className='about__head'>
        <h2 className='title__news'>Conoceme</h2>
        <div className='about__body'>
        <div className='about__head-body'>
            <div className='about__head-body_img'>
                <img src={ isDesktop ? Aboutimg : mobileImage} alt=""></img>
            </div>
            <div className='about__head-body_text'>
              <p className='text0'>De corazon</p>
              <p className='text1'>Hola, soy</p>
              <p className='text2'>Jeraldin Vera</p>
                <p className='text3'>
                   Una mujer temerosa de Dios; independiente, que desde muy joven he tenido trazada mi vida alrededor de proyectos sociales y politicos, en favor de las comunidades mas vulnerables. 
                </p>

            </div>

        </div>
        <div id="experiencia" className='experience__head'>

      <div className="experience__main-body">

      <Timeline position="alternate">

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <AssessmentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Coordinadora Campaña Petro y Francia
          </Typography>
          <Typography>La Jagua - Cesar</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <AssignmentTurnedInIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Consejera Mun. y Dep. de Juventudes
          </Typography>
          <Typography>Cesar</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2020
          </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
          < AssignmentTurnedInIcon color='Magenta' sx={{ color:'Magenta' }} />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Consultoria Privada
          </Typography>
          <Typography>Sector Privado</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2019
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot color="secondary">
          < BalanceIcon  sx={{  }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Representante Legal
          </Typography>
          <Typography>JAVO - Asesoria Juridica</Typography>
        </TimelineContent>
      </TimelineItem>
 

    <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2019
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color="secondary">
          < AssuredWorkloadIcon  sx={{ color:''}} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Consejala
          </Typography>
          <Typography>La Jagua de Ibirico</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2018
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color="secondary">
          <ShieldIcon  sx={{  }}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Tribunal Administrativo del Cesar
          </Typography>
          <Typography>Tribunal Superior</Typography>
        </TimelineContent>
      </TimelineItem>

    <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2017
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color="secondary">
          <AccountBalanceWalletIcon sx={{  }}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Secretaria de Hacienda
          </Typography>
          <Typography>Oficina de Recaudo - Valledupar</Typography>
        </TimelineContent>
      </TimelineItem>

    <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2019
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color="secondary">
          < BalanceIcon  sx={{  }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Representante Legal
          </Typography>
          <Typography>JAVO - Asesoria Juridica</Typography>
        </TimelineContent>
      </TimelineItem>
      </Timeline>
  
        {/* <div className='experience__main-exp'>
        <ListItem alignItems="flex-start">

        <ListItemAvatar>
          <AssessmentIcon color='success' sx={{ fontSize: 50}}/>
        </ListItemAvatar>
        <ListItemText
          primary="Coordinadora Campana Petro y Francia"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                2022
              </Typography>
              {"  La Jagua - Cesar"}
            </React.Fragment>
          }
        />
      </ListItem>

        </div>

        <div className='experience__main-exp'>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Diversity3Icon color='primary' sx={{ fontSize: 50}}/>
        </ListItemAvatar>
        <ListItemText
          primary="Consejera Minicipal y Departamental de juventudes"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                2021
              </Typography>
              {" Cesar"}
            </React.Fragment>
          }
        />
      </ListItem>

        </div>
        
        <div className='experience__main-exp'>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
    < AssignmentTurnedInIcon color='Magenta' sx={{ fontSize: 50, color:'Magenta' }} />
        </ListItemAvatar>
        <ListItemText
          primary="Consultora Privada"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                2020
              </Typography>
              {" Empresas del sector privado"}
            </React.Fragment>
          }
        />
      </ListItem>

        </div>

        <div className='experience__main-exp'>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
        < BalanceIcon  sx={{ fontSize: 50, color:'Indigo' }} />
        </ListItemAvatar>
        <ListItemText
          primary="Representante Legal"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                2019
              </Typography>
              {" JAVO - Asesoria Juridica"}
            </React.Fragment>
          }
        />
      </ListItem>

        </div>

        <div className='experience__main-exp'>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
        < AssuredWorkloadIcon  sx={{ fontSize: 50, color:'Teal'}} />

        </ListItemAvatar>
        <ListItemText
          primary="Concejala"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                2019
              </Typography>
              {" La Jagua de Ibirico"}
            </React.Fragment>
          }
        />
      </ListItem>

        </div>

        <div className='experience__main-exp'>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <ShieldIcon  sx={{ fontSize: 50, color:'MediumSlateBlue'}}/>

        </ListItemAvatar>
        <ListItemText
          primary="Tribunal Administrativo del Cesar"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                2018
              </Typography>
              {" Tribunal Superior"}
            </React.Fragment>
          }
        />
      </ListItem>

        </div>

        <div className='experience__main-exp'>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <AccountBalanceWalletIcon sx={{ fontSize: 50, color:'DarkSlateGray' }}/>
        </ListItemAvatar>
        <ListItemText
          primary="Secretaria de Hacienda"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                2017
              </Typography>
              {" Oficina de Recaudo - Valledupar"}
            </React.Fragment>
          }
        />
      </ListItem>
      </div> */}

      {/* <div className='experience__main-exp'>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      </div> */}
        </div>
              </div>

              </div>

    </div>
  )
}

export default About