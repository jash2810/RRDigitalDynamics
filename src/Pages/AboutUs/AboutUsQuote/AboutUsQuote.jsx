import React from 'react';
import './AboutUsQuote.css';
import { Typography } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

function AboutUsQuote() {

    const font = 'Dosis'
    return ( 
        <div className='quote-wrapper-wrap'>
            <div className='quote-wrapper'>
                <FormatQuote style={{transform: 'rotate(180deg)', position: 'relative', bottom: '10px'}} className='about-us-quote-icon' />
                <Typography variant='p'  className='about-us-quote' >At RRDigitalDynamics, we are not just a digital marketing brand; we are architects of online success stories. Our journey began with a passion for innovation and a commitment to transforming the digital landscape. In a world where every click matters, we stand at the forefront, ready to redefine your digital presence.</Typography>
                <FormatQuote className='about-us-quote-icon' />
            </div>
        </div>
     );
}

export default AboutUsQuote;