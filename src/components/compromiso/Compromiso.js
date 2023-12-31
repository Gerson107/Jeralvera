import React from 'react'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Compromiso.css'
const Compromiso = () => {
  return (
    <div id="compromiso" className='comprom__main'>
        <div className='comprom__main-prin'>
        <div className='comprom__main-prin_item'>
        <VolunteerActivismIcon sx={{ fontSize: 50, color:'var(--color-main)' }}/>
        <h3>Lucha Anticorrupción</h3>
        <p>Continuaré mi lucha contra la corrupción, a través del control politico que permite la vigilancia y defensa de los recursos públicos, así como lo hice en el concejo Municipal, donde denuncié por hechos de corrupción a los miembros de la corporación.</p>
        <a href="" ><p></p>Leer mas <ArrowForwardIcon/> </a>

        </div>


        <div className='comprom__main-prin_item'>
        <BeenhereIcon sx={{ fontSize: 50, color:'var(--color-main)' }}/>
        <h3>Gestión y Liderazgo</h3>
        <p>Gestionaré ante el Gobierno Nacional, proyectos y recursos encaminados a fortalecer el desarrollo social y económico del departamento, ya que soy la única candidata que ha venido defendiendo las politícas públicas del gobierno del Cambio.</p>
        <a href="" ><p></p>Leer mas <ArrowForwardIcon/> </a>

        </div>

        <div className='comprom__main-prin_item'>
        <DynamicFormIcon sx={{ fontSize: 50, color:'var(--color-main)' }}/>
        <h3>Determinación y Compromiso</h3>
        <p>Actuaré con independencia en la Asamblea Departamental aprobando los proyectos y politicas públicas que beneficien a la sociedad cesarence. Asi mismo, votare negativamente las que sean contrarias al interes general como lo hice anteriormente.</p>
        <a href="" ><p></p>Leer mas <ArrowForwardIcon/> </a>

        </div>
        </div>
    </div>
  )
}

export default Compromiso