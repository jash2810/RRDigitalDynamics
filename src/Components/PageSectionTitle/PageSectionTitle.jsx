import { Typography, useTheme } from "@mui/material";
import React from "react";
import "./PageSectionTitle.css";

function PageSectionTitle({ pageTitle, pageSubTitle }) {
  let PAGETITLE = pageTitle.toUpperCase();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Typography
        variant="h2"
        align="center"
        className="page-section-title"
        color={theme.palette.primary.main}
      >
        {PAGETITLE}
      </Typography>
      {pageSubTitle ? <Typography
        variant="h4"
        align="center"
        className="page-subtitle"
        color={theme.palette.primary.main}
      >
        {pageSubTitle ? pageSubTitle : ""}
      </Typography> : null}
    </React.Fragment>
  );
}

export default PageSectionTitle;
