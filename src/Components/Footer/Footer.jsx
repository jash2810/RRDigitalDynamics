import React, { FC, ReactElement } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";
import "./Footer.css";
import { SocialMediaLinks } from "../../data/data";
import { Link } from "react-router-dom";
import dg17 from "../../Images/dg19.jpg";

function Footer() {
  const isMatch = useMediaQuery("max-width: 480px");
  const theme = useTheme();
  return (
    <div
      className={"image-wrapper " + isMatch ? "image_wrapper-height70vh" : ""}
      style={{ backgroundColor: "rgb(0 34 89)" }}
    >
      <img src={dg17} alt="" className="overlayed-image-footer rrwhite" />
      <div class="overlay-footer">
        <Paper elevation={0} className="transparent-background home-paper">
          <div className="container80">
            <Grid container>
              <Grid item xs={12} className="footer">
                <Typography
                  className="footer-title"
                  variant="h4"
                  component={"h4"}
                  color={"white"}
                >
                  Let us build the bridge
                  <br />
                  between your brand and
                  <br />
                  customer
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{ textAlign: "center", fontSize: "small" }}
                  // className="footer-title"
                  variant="h6"
                  component={"h6"}
                  color={"white"}
                >
                  "Embark on a journey of meaningful connections and
                  unparalleled experiences. Our commitment to bridging the gap
                  ensures a solid foundation for trust, loyalty, and mutual
                  growth.
                  <br />
                  Together, let's shape a bridge that transcends transactions,
                  fostering a lasting bond between your brand and the hearts of
                  your customers."
                </Typography>
              </Grid>

              <div style={{ marginTop: "1rem" }} class="fade_rule"></div>

              <Grid container style={{ top: "4rem", position: "relative" }}>
                <Grid item xs={12}>
                  <Typography
                    style={{ textAlign: "center", fontSize: "large", marginInlineEnd:"2.5rem" }}
                    className="copyRight"
                    variant="h6"
                    component={"h6"}
                    color={"white"}
                  >
                    Stay in Touch
                  </Typography>
                </Grid>
                <Grid
                  //  className="border"
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "1rem",
                    paddingTop: "1rem",
                  }}
                >
                  {SocialMediaLinks.map((element, key) => (
                    <Link
                      to={element.url}
                      style={{ marginRight: "38px" }}
                      className="link-footer"
                    >
                      {element.component}
                    </Link>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    style={{ textAlign: "center", fontSize: "small" }}
                    className="copyRight"
                    variant="h6"
                    component={"h6"}
                    color={"white"}
                  >
                    Copyright @2024 RR Digital Dynamics
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Footer;
