import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import AboutUs from "../components/aboutus/AboutUs";

function AboutPage() {
  return (
    <Fragment>
      <Typography variant="h2" sx={{ fontWeight: 600 }}>
        Sobre a GN
      </Typography>
      <AboutUs />
    </Fragment>
  );
}

export default AboutPage;
