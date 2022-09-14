import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { Particles } from "@blackbox-vision/react-particles";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    borderRadius: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(1),
  },
  bg: {
    height: "100%",
    width: "100%",
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
});

const ParticlesJs = () => (
  <Particles
    id="simple"
    width="auto"
    height="100vh"
    style={{
      backgroundColor: "blue",
    }}
    params={{
      particles: {
        number: {
          value: 200,
        },
        size: {
          value: 4,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          parallax: {
            force: 2,
            smooth: 10,
          },
        },
      },
    }}
  />
);

function HeadSection(props) {
  const { classes } = props;

  return (
    <Fragment>
      <div className={classNames(classes.bg)}>
        <div className={classNames("container-fluid-standard")}>
          <Box
            data-aos-delay="200"
            data-aos="zoom-in"
            display="flex"
            justifyContent="start"
          >
            <div
              className={classNames(classes.containerFix, "header-container")}
            >
              <div
                className="header-container-text"
                data-aos-delay="1000"
                data-aos="zoom"
              >
                <p>Conecte-se sem limites</p>
              </div>
              <ParticlesJs />
            </div>
          </Box>
        </div>
        <a className="btn-home" href="/planos">
          <div className="home-button">Contrate Aqui</div>
        </a>
      </div>
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
