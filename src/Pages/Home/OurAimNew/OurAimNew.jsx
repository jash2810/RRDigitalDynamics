import React, { useState } from "react";
import "./OurAimNew.css";
import PageSectionTitle from "../../../Components/PageSectionTitle/PageSectionTitle";
import { Grid, Typography, useTheme, Slide, Zoom, Fade,useMediaQuery } from "@mui/material";
import {
  AutoGraph,
  BubbleChart,
  Email,
  QueryStats,
  StackedBarChart,
} from "@mui/icons-material";
import dg23 from "../../../Images/dg22.png";
import ReactVisibilitySensor from "react-visibility-sensor";
import dg17 from "../../../Images/dg31.png";

function OurAimNew() {
  const theme = useTheme();
  const isMatch = useMediaQuery("max-width: 480px");
  const [showAim, setShowAim] = useState(false);

  function checkOurAimVisible(isVisible) {
    if (isVisible) {
      setShowAim(true);
    }
  }
  const AimsList = ({ icon, title, content }) => {
    return (
      <div>
        <div className="aim-list-item">
          <div className="aim-bullet-wrapper">{icon}</div>
          <div className="aim-point-wrapper">
            <Typography
              style={{ paddingTop: "0px" }}
              variant="h2"
              //align="center"
              className="page-section-title-aim"
              color={theme.palette.primary.main}
            >
              {title}
            </Typography>
          </div>
        </div>
        <div
          style={{ paddingLeft: "65px", position: "relative", bottom: "10px" }}
        >
          <Typography
            variant="h4"
            // align="center"
            className="page-subtitle-aim"
            color={theme.palette.primary.main}
          >
            {content}
          </Typography>
        </div>
      </div>
    );
  };
  const data = [
    {
      title: "First, Move the needle",
      content:
        "Fact: you’re probably wasting (a lot of) money somewhere. Find that waste, cut it and reallocate to what’s working right now. Increase your results immediately and create momentum.",
      icon: <AutoGraph />,
    },
    {
      title: "Get the data tight",
      content:
        "Your inputs determine your outputs. Good data = good decisions. And good decisions = good results. Clean, accurate and complete data is the linchpin of any winning campaign.",
      icon: <StackedBarChart />,
    },
    {
      title: "80/20 marketing",
      content:
        "20% of your marketing efforts lead to 80% of your results. Identify the leverage points in your 20% and focus efforts there for the biggest gains in performance.",
      icon: <BubbleChart />,
    },
    {
      title: "Revenue-generating",
      content:
        "Or RGAs for short. Marketing’s not just about sexy ideas and tactics. Do the hard work of refining and testing your campaigns. Over time, you’ll beat your shiny object-chasing competitors.",
      icon: <QueryStats />,
    },
  ];

  return (
    <div
    //   style={{
    //     backgroundColor: theme.palette.primary.light,
    //     paddingTop: "30px",
    //   }}
    >
      <React.Fragment>
          <ReactVisibilitySensor onChange={checkOurAimVisible}>
            <PageSectionTitle
              pageTitle={"Our Aim"}
              pageSubTitle={
                "It doesn’t matter if you’re buying media or earning it through SEO and content. Following these 5 undying principles is the secret ingredient to our clients’ success. Ignore these at your peril."
              }
            />
          </ReactVisibilitySensor>
          <Grid container>
            <Grid item sm={6} style={{ width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={dg23} width={"90%"} className="our-aim-image" />
              </div>
            </Grid>
            <Grid
              item
              sm={6}
              style={{paddingBottom: "20px" }}
            >
              {data.map((j, key) => {
                return (
                  <Fade
                    in={showAim}
                    direction="down"
                    timeout={500}
                    style={{ transitionDelay: `${key * 700}ms`, width: '95%', margin: 'auto' }}
                  >
                    <div key={key}>
                      <div className="aim-list-item">
                        <div className="aim-bullet-wrapper">{j.icon}</div>
                        <div className="aim-point-wrapper">
                          <Typography
                            variant="h2"
                            //align="center"
                            className="page-section-title-aim"
                            color={theme.palette.primary.main}
                          >
                            {j.title}
                          </Typography>
                        </div>
                      </div>
                      <div
                        className="page-subtitle-aim-wrapper"
                      >
                        <Typography
                          variant="h4"
                          // align="center"
                          className="page-subtitle-aim"
                          color={theme.palette.primary.main}
                          style={{textAlign: 'justify', width: '90%'}}
                        >
                          {j.content}
                        </Typography>
                      </div>
                    </div>
                  </Fade>
                );
              })}
            </Grid>
          </Grid>
        </React.Fragment>
    </div>
  );
}

export default OurAimNew;
