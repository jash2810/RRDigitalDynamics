import React, { useState } from "react";
import PageSectionTitle from "../../Components/PageSectionTitle/PageSectionTitle";
import { Fade, Grid, Typography, useTheme, useThemeProps } from "@mui/material";
import "./AboutUs.css";
import ReactVisibilitySensor from "react-visibility-sensor";
import nancy from "../../Images/nancy.jpeg";
import OurTeam from "../Home/OurTeam/OurTeam";
import OurAimNew from "../Home/OurAimNew/OurAimNew";
import aboutusimage from "../../Images/aboutus.jpg";
import AboutUsQuote from "./AboutUsQuote/AboutUsQuote";
import CompanyValues from "./CompanyValues/CompanyValues";

function AboutUs() {
  const theme = useTheme();

  return (
    <div>
      <div
        className="image_wrapper_au"
        style={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <img
          src={aboutusimage}
          alt=""
          className="overlayed-image-au rrwhite-au"
        />
        <div class="overlay-au">
          <Typography variant="h3" className="about-us-title">
            Know Who We Are?
          </Typography>
        </div>
      </div>
      <AboutUsQuote />
      <CompanyValues />
      <OurAimNew />
      {/* <OurTeam /> */}
    </div>
  );
}

export default AboutUs;
