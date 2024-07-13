import {
  Grid,
  Hidden,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../../Images/BgHome.jpg";
import bg2 from "../../Images/images.jpeg";
import { SocialMediaLinks } from "../../data/data";
import AboutUs from "../AboutUs/AboutUs";
import "./Home.css";
import WhyRRDigital from "./WhyRRDigital/WhyRRDigital";
import Services from "../Services/Services";
import KnowAboutTeam from "./KnowAboutTeam/KnowAboutTeam";

const images = [
  "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bg2,
  bg1,
];

function Home() {
  const theme = useTheme();
  return (
    <>
      <CarouselHome />
      <Services top={0.5} />
      <WhyRRDigital />
      <KnowAboutTeam />
      <AboutUs />
    </>
  );
}

function CarouselHome() {
  const isMatch = useMediaQuery("max-width: 480px");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
    <div
      className={
        "image-wrapper " + isMatch ? "image_wrapper-height100vh-home" : ""
      }
      style={{ backgroundColor: "rgb(1 48 122)" }}
    >
      <img src={"HomeImage.jpg"} alt="" className="overlayed-image rrwhite" />
      <div class="overlay">
        <Paper elevation={0} className="transparent-background home-paper">
          <Grid container>
            <Grid item sm={6} className="home-carousel-quote">
              <Typography
                variant="h2"
                component={"h1"}
                color={"white"}
                className={"paper-title"}
                style={{ fontWeight: "bold" }}
              >
                Business Planning,
                <br />
                Strategy and
                <br />
                Execution.
              </Typography>
              <Typography
                variant="h5"
                component={"h4"}
                color={"white"}
                className={"paper-subtitle"}
              >
                "Engage, Convert, Repeat: Digital Marketing Mastery."
              </Typography>
              <Grid container spacing={2} style={{ marginTop: "30px" }}>
                <Grid item sm="12">
                  {SocialMediaLinks.map((element, key) => (
                    <Link
                      to={element.url}
                      style={{ marginRight: "38px" }}
                      className="link"
                    >
                      {element.component}
                    </Link>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Hidden smDown>
              {/* <Grid item style={{ height: "100vh" }} sm={12}>
                <img
                  className="gif"
                  src={dg20}
                  width={"100%"}
                  style={{ position: "relative" }}
                />
              </Grid> */}
            </Hidden>
          </Grid>
        </Paper>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Home;
