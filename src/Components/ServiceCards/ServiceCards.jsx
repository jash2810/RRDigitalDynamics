import { Button, Fade, Grid, Link, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import "./ServiceCards.css";
import VisibilitySensor from "react-visibility-sensor";
import KnowAboutTeam from "../../Pages/Home/KnowAboutTeam/KnowAboutTeam";

function ServiceCards({ serviceCardsContentArray }) {
  return (
    <React.Fragment>
      <div className="container90">
        <Grid container spacing={2}>
          {serviceCardsContentArray.map((service, key) => (
            <ServiceCardsContent serviceCardsContent={service} key={key} />
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
}

function ServiceCardsContent({ serviceCardsContent }) {
  const [show, setShow] = useState(false);
  function checkServicesVisible(isVisible) {
    if (isVisible) {
      setShow(isVisible);
    }
  }
  const color = "4px solid " + serviceCardsContent.color;
  return (
    <>
      <React.Fragment>
        <VisibilitySensor onChange={checkServicesVisible}>
          <Fade in={show} timeout={2000}>
            <Grid item md={3} xs={12}>
              <div>
              <div
                className="character-circle"
                style={{ borderColor: serviceCardsContent.color }}
              >
                {serviceCardsContent.title[0]}
              </div>
              <div className="service-title">
                <h4>{serviceCardsContent.title}</h4>
                {/* <div className="services-subtitle">Discover | Model</div> */}
                <p style={{ color: "#033a91" }}>
                  {serviceCardsContent.description}<br/>
                  <Link href={serviceCardsContent.serviceURL} target='_blank'>{'Learn More >>'}</Link>
                </p>
              </div>
              </div>
            </Grid>
          </Fade>
        </VisibilitySensor>
      </React.Fragment>
     

    </>
  );
}

export default ServiceCards;
