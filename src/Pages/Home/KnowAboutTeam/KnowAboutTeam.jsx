import { Fade, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import PageSectionTitle from "../../../Components/PageSectionTitle/PageSectionTitle";
import "./KnowAboutTeam.css";
import ReactVisibilitySensor from "react-visibility-sensor";
import dg17 from "../../../Images/dg32.png";

function KnowAboutTeam() {
  const [knowUsVisible, setKnowUsVisible] = useState(false);
  const isMatch = useMediaQuery("max-width: 480px");
  function knowOurTeamVisible(isVisible) {
    if (isVisible) {
      setKnowUsVisible(true);
    }
  }

  return (
    <div className="moreServices">
      <React.Fragment>
        <ReactVisibilitySensor onChange={knowOurTeamVisible}>
          <PageSectionTitle
            pageTitle={"Want to know more about what we do?"}
            pageSubTitle={
              "We are a diverse and dynamic group of individuals dedicated to achieving excellence and driving innovation together."
            }
          />
        </ReactVisibilitySensor>
        <div className="container90">
          <Grid container style={{ marginBottom: "50px" }}>
            <Grid item md={3} xs={12}>
              <Fade
                in={knowUsVisible}
                timeout={1000}
                style={{ transitionDelay: `1000ms` }}
              >
                <Paper className="know-about-team-paper know-about-team-paper-upper">
                  <Typography
                    style={{ color: " rgb(7, 63, 152)" }}
                    variant="h6"
                  >
                    Paid Search
                  </Typography>
                </Paper>
              </Fade>
              <Fade
                in={knowUsVisible}
                timeout={1000}
                style={{ transitionDelay: `1500ms` }}
              >
                <Paper className="know-about-team-paper know-about-team-paper-lower">
                  <Typography
                    style={{ color: " rgb(7, 63, 152)" }}
                    variant="h6"
                  >
                    UX + Strategy
                  </Typography>
                </Paper>
              </Fade>
            </Grid>
            <Grid item md={3} xs={12}>
              <Fade
                in={knowUsVisible}
                timeout={1000}
                style={{ transitionDelay: `1800ms` }}
              >
                <Paper className="know-about-team-paper know-about-team-paper-upper know-about-team-paper-even">
                  <Typography
                    style={{ color: " rgb(7, 63, 152)" }}
                    variant="h6"
                  >
                    Paid Social
                  </Typography>
                </Paper>
              </Fade>
              <Fade
                in={knowUsVisible}
                timeout={1000}
                style={{ transitionDelay: `1000ms` }}
              >
                <Paper className="know-about-team-paper know-about-team-paper-lower know-about-team-paper-even">
                  <Typography
                    style={{ color: " rgb(7, 63, 152)" }}
                    variant="h6"
                  >
                    Creative
                  </Typography>
                </Paper>
              </Fade>
            </Grid>
            <Grid item md={3} xs={12}>
              <Fade
                in={knowUsVisible}
                timeout={1000}
                style={{ transitionDelay: `1000ms` }}
              >
                <Paper className="know-about-team-paper know-about-team-paper-upper">
                  <Typography
                    style={{ color: " rgb(7, 63, 152)" }}
                    variant="h6"
                  >
                    Organic Search
                  </Typography>
                </Paper>
              </Fade>
              <Fade
                in={knowUsVisible}
                timeout={1000}
                style={{ transitionDelay: `1800ms` }}
              >
                <Paper className="know-about-team-paper know-about-team-paper-lower">
                  <Typography
                    style={{ color: " rgb(7, 63, 152)" }}
                    variant="h6"
                  >
                    Video
                  </Typography>
                </Paper>
              </Fade>
            </Grid>
            <Grid item md={3} xs={12}>
              <Fade
                in={knowUsVisible}
                timeout={1000}
                style={{ transitionDelay: `1500ms` }}
              >
                <Paper className="know-about-team-paper know-about-team-paper-upper know-about-team-paper-even">
                  <Typography
                    style={{ color: " rgb(7, 63, 152)" }}
                    variant="h6"
                  >
                    Email + Marketing Automation
                  </Typography>
                </Paper>
              </Fade>
              <Fade
                in={knowUsVisible}
                timeout={1000}
                style={{ transitionDelay: `1800ms` }}
              >
                <Paper className="know-about-team-paper know-about-team-paper-lower know-about-team-paper-even">
                  <Typography
                    style={{ color: " rgb(7, 63, 152)" }}
                    variant="h6"
                  >
                    Web + Technical Services
                  </Typography>
                </Paper>
              </Fade>
            </Grid>
          </Grid>
        </div>
        </React.Fragment>
    </div>
  );
}

export default KnowAboutTeam;
