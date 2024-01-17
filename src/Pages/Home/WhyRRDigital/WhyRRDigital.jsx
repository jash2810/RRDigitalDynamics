import React from 'react';
import './WhyRRDigital.css';
import { Grid, Typography, useTheme } from '@mui/material';
import Typewriter from 'typewriter-effect';

function WhyRRDigital() {

    const theme = useTheme();

    return ( 
        <React.Fragment>
            <div className='dark-container' style={{backgroundColor: theme.palette.primary.light, height: '100px'}}>
                <Grid container className='container90'>
                    <Grid item sm="12" style={{marginBottom: '20px'}}>
                        <Typography variant='p' color={theme.palette.primary.main} className='whyus'>Why RRDigital?</Typography>
                    </Grid>
                    <Grid item sm="12">
                        {/* <Typography variant='p' color={'white'} >Why RRDigital?</Typography> */}
                        <Typography variant='h3' color={theme.palette.primary.main} className='whyus-main-line'>We <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Elevate')
                                .callFunction(() => {
                                })
                                .pauseFor(1500)
                                .deleteAll()
                                .callFunction(() => {
                                })
                                .start();
                            }}
                            options={{
                                strings: ['Transform', 'Enhance'],
                                autoStart: true,
                                loop: true,
                                cursor: '|',
                                delay: '75'
                            }}
                        /> your brand with our proven strategies.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
     );
}

export default WhyRRDigital;

// "Elevate your brand with our proven strategies."
// "Transform your brand with our proven strategies."
// "Enhance your brand with our proven strategies."