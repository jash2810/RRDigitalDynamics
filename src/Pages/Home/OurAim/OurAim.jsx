import React, { useState } from "react";
import "./OurAim.css";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import PageSectionTitle from "../../../Components/PageSectionTitle/PageSectionTitle";
import ReactVisibilitySensor from "react-visibility-sensor";
import dg23 from "../../../Images/dg22.png";

function OurAim() {
  const theme = useTheme();
  const AIMS = [
    "Increase online visibility through SEO, content, and social media.",
    "Generate leads and conversions with strategic marketing tactics.",
    "Build and strengthen brand awareness through consistent messaging.",
    "Maximize ROI by analyzing data and adjusting strategies.",
    "Engage target audience through social media and interactive content.",
    "Stay ahead of industry trends and leverage emerging technologies.",
    "Provide data-driven insights for continuous strategy optimization.",
  ];

  const isMatch = useMediaQuery("(max-width:600px)");
  const [showAim, setShowAim] = useState(false);

  function checkOurAimVisible(isVisible) {
    if (isVisible) {
      setShowAim(isVisible);
    }
  }

  return (
    <div>
      <React.Fragment>
        <ReactVisibilitySensor onChange={checkOurAimVisible}>
          <PageSectionTitle
            pageTitle={"Our Aim"}
            pageSubTitle={
              "It doesn’t matter if you’re buying media or earning it through SEO and content. Following these 5 undying principles is the secret ingredient to our clients’ success. Ignore these at your peril."
            }
          />
        </ReactVisibilitySensor>
        <div className="container90" style={{ paddingBottom: "40px" }}>
          <Grid container>
            <Grid item sm={8}>
              <List>
                {AIMS.map((aim, key) => (
                  <Slide
                    in={showAim}
                    direction="right"
                    timeout={500}
                    style={{ transitionDelay: `${key * 200}ms` }}
                  >
                    <ListItem key={key}>
                      <ListItemIcon >
                        <KeyboardDoubleArrowRight style={{color:'rgb(54 92 154)'}} />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: isMatch ? "18px" : "24px",
                          fontWeight: 500,
                          color: "rgb(54 92 154)",
                        }}
                        primary={aim}
                      />
                    </ListItem>
                  </Slide>
                ))}
              </List>
            </Grid>
            <Grid
              item
              sm={4}
              style={{
                display: isMatch ? "flex" : "",
                justifyContent: isMatch ? "center" : "",
              }}
            >
              <img src={dg23} width={isMatch ? "70%" : "100%"} />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    </div>
  );
}

export default OurAim;
