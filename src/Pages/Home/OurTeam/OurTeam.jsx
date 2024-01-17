import React, { useState } from 'react';
import './OurTeam.css';
import { Fade, Grid, Typography, useTheme } from '@mui/material';
import nancy from "../../../Images/nancy.jpeg";
import ReactVisibilitySensor from 'react-visibility-sensor';
import PageSectionTitle from '../../../Components/PageSectionTitle/PageSectionTitle';

function OurTeam() {
    
    const [teamVisible, setTeamVisible] = useState(false);
    
    function knowourTeamVisible(isVisible) {
        if (isVisible) {
        setTeamVisible(true);
        }
    }
    
    const theme = useTheme();

    const team = [
        {
          image: "team1.png",
          name: "Jash Patel",
          role: "Software Developer",
        },
        {
          image: nancy,
          name: "Nancy Patel",
          role: "Software Developer",
        },
        {
          image: "team1.png",
          name: "Jash Patel",
          role: "Software Developer",
        },
        {
          image: nancy,
          name: "Nancy Patel",
          role: "Software Developer",
        },
      ];

    return ( 
        <div style={{ backgroundColor: theme.palette.primary.light,paddingBottom:'40px' }}>
            <div>
                <ReactVisibilitySensor onChange={knowourTeamVisible}>
                <PageSectionTitle
                    pageTitle={"Know our team"}
                    pageSubTitle={
                    "Top 1% media buying prowess. Performance-driven creative genius. God-tier technical and analytics capabilities. All working together as an extension of your team, accountable to your goals and KPIs. This is how you win."
                    }
                />
                </ReactVisibilitySensor>
            </div>
            <Grid container spacing={2} className="container80">
                {team.map((teamMember, key) => (
                <Grid item md={3} xs={12} key={key}>
                    <Fade
                    in={teamVisible}
                    timeout={2000}
                    style={{ transitionDelay: `${key * 200}ms` }}
                    >
                    <div className="team-frame">
                        <img src={teamMember.image} width={"100%"} />
                        <Typography variant="h5" align="center" className="team-name" style={{color:'rgb(54 92 154)'}}>
                        {teamMember.name}
                        </Typography>
                        <Typography variant="h6" align="center" className="team-role">
                        {teamMember.role}
                        </Typography>
                    </div>
                    </Fade>
                </Grid>
                ))}
            </Grid>
        </div>
     );
}

export default OurTeam;