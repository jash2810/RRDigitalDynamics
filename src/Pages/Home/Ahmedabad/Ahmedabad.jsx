import React from 'react';
import './Ahmedabad.css';
import { Typography } from '@mui/material';
import { Favorite, Launch } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Ahmedabad() {

    const locationlink = 'https://www.google.com/maps/place/Ahmedabad,+Gujarat,+India/@23.0204741,72.4149334,11z/data=!3m1!4b1!4m6!3m5!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621!16zL20vMDFkODhj?entry=ttu'
    return ( 
        <React.Fragment>
            <div className='image_wrapper' style={{background:'rgb(12 28 56)'}}>
                <img src='ahmedabad.jpg' className='overlayed-image-ahmedabad' />
                <div className='overlay container90'>
                    <Typography variant='h2' align='center' marginTop={'100px'}>We are deep rooted in the <span style={{color: 'orange'}} >Western India!</span></Typography>
                    <Typography align='center' marginTop={'30px'} fontSize={'30px'}>Ahmedabad <Favorite style={{position: 'relative', top: '5px', left: '5px', fontSize: '35px', color: 'red'}}/></Typography>
                    <Typography align='center' style={{position: 'relative', right: '5px'}} ><Link to={locationlink} target='_blank' style={{color: 'white'}} ><Launch style={{fontSize: '20px', position: 'relative', top: '5px', right: '5px'}} />Check our location</Link></Typography>
                </div>
            </div>
        </React.Fragment>
     );
}

export default Ahmedabad;