import React from "react";
import "./CompanyValues.css";
import { Grid, Typography } from "@mui/material";
import cv1 from "../../../Images/cv1.png";
import cv2 from "../../../Images/cv2.png";
import cv3 from "../../../Images/cv3.png";
import cv4 from "../../../Images/cv4.png";
import PageSectionTitle from "../../../Components/PageSectionTitle/PageSectionTitle";

function CompanyValues() {
  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "80px",
      }}
    >
      <PageSectionTitle pageTitle={"Company Values"} />
      <div className="container80">
        <div className="desktop-view">
          <Grid container columnSpacing={2} rowSpacing={5}>
            <Grid item xs={12} sm={3}>
              <img src={cv1} className="cv-image" />
            </Grid>
            <Grid item xs={12} sm={9}>
              <div className="cv-div">
                <Typography variant="h6" className="cv-content">
                  Embrace and drive change, constantly seeking innovative
                  solutions that push the boundaries of what's possible in the
                  digital realm.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={9}>
              <div className="cv-div">
                <Typography variant="h6" className="cv-content">
                  Put clients at the forefront of every decision, delivering
                  exceptional value, personalized strategies, and unparalleled
                  service to foster lasting partnerships.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img src={cv2} className="cv-image" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <img src={cv3} className="cv-image" />
            </Grid>
            <Grid item xs={12} sm={9}>
              <div className="cv-div">
                <Typography variant="h6" className="cv-content">
                  Uphold the highest standards of transparency and integrity in
                  all interactions. Communicate openly, honestly, and ethically,
                  building trust with clients, team members, and stakeholders.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={9}>
              <div className="cv-div">
                <Typography variant="h6" className="cv-content">
                  Approach every project with a fervent commitment to achieving
                  tangible and measurable results. Our success is intertwined
                  with the success of our clients.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img src={cv4} className="cv-image" />
            </Grid>
          </Grid>
        </div>

        {/* only for mobile */}
        <div className="mobile-view">
          <Grid container columnSpacing={0} rowSpacing={5}>
            <Grid item xs={12} sm={3}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={cv1} className="cv-image" />
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <div className="cv-div">
                <Typography variant="h6" className="cv-content">
                  Embrace and drive change, constantly seeking innovative
                  solutions that push the boundaries of what's possible in the
                  digital realm.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={cv2} className="cv-image" />
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <div className="cv-div">
                <Typography variant="h6" className="cv-content">
                  Put clients at the forefront of every decision, delivering
                  exceptional value, personalized strategies, and unparalleled
                  service to foster lasting partnerships.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={cv3} className="cv-image" />
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <div className="cv-div">
                <Typography variant="h6" className="cv-content">
                  Uphold the highest standards of transparency and integrity in
                  all interactions. Communicate openly, honestly, and ethically,
                  building trust with clients, team members, and stakeholders.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={cv4} className="cv-image" />
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <div className="cv-div">
                <Typography variant="h6" className="cv-content">
                  Approach every project with a fervent commitment to achieving
                  tangible and measurable results. Our success is intertwined
                  with the success of our clients.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default CompanyValues;
