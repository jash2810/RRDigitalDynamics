import React from 'react';
import PageSectionTitle from '../../../Components/PageSectionTitle/PageSectionTitle';
import { Grid, Typography } from '@mui/material';

function KnowUs() {
    return ( 
        <React.Fragment>
            <PageSectionTitle pageTitle={'Know Us'} />
            <Grid container className='container90' >
                <Grid item sm={6} style={{display: 'flex', margin: 'auto'}}>
                    <Typography variant='p' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eveniet aut aspernatur, exercitationem vitae vero culpa in earum totam provident doloremque cupiditate suscipit, alias odit obcaecati deleniti consequatur vel quos?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eveniet aut aspernatur, exercitationem vitae vero culpa in earum totam provident doloremque cupiditate suscipit, alias odit obcaecati deleniti consequatur vel quos?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eveniet aut aspernatur, exercitationem vitae vero culpa in earum totam provident doloremque cupiditate suscipit, alias odit obcaecati deleniti consequatur vel quos?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eveniet aut aspernatur, exercitationem vitae vero culpa in earum totam provident doloremque cupiditate suscipit, alias odit obcaecati deleniti consequatur vel quos?</Typography>
                </Grid>
                <Grid item sm={6}>
                    <img src='knowusimage.png' width={'100%'} height={'600px'} />
                </Grid>
            </Grid>
        </React.Fragment>
     );
}

export default KnowUs;