import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Button, Hidden, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import Headerbg from "../../../assets/header-bg.jpg"

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
    paddingBottom: theme.spacing(2),
  },
  bg: {
    height: "100%",
    width: "70%",
    padding: "20px",
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    // boxShadow: theme.shadows[6],
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
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid-standard", classes.container)}>
          <Box  data-aos-delay="200"
              data-aos="zoom-in"
          display="flex" justifyContent="start" className={classes.bg}>
            {/* <Card style={{backgroundColor: "#000", opacity: 0.1}}
              // className={classes.bg}
              
            > */}
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="start" className="row">
                  {/* <Grid item xs={12} md={5}> */}
                    <Box 
                      display="flex"
                      flexDirection="column"
                      justifyContent="start"
                      height="100%"
                    >
                      {/* <Box mb={4}>
                        <Typography variant={isWidthUpLg ? "h3" : "h4"}>
                          Geração Net - Internet Fibra Ótica de Ultravelocidade
                        </Typography>
                      </Box> */}
                      <div >
                        <Box mb={1}
                        style={{textAlign: "left"}}
                        >
                          <Typography
                            variant={isWidthUpLg ? "h3" : "body1"}
                            color="#fff"
                          >
                            A ULTRAVELOCIDADE DA GERAÇÃO NET IRÁ TE SURPREENDER
                            {/* <BuscaCep2 /> */}
                          </Typography>
                          <Typography
                            variant={isWidthUpLg ? "h5" : "body1"}
                            color="#fff"
                          >
                            Conheça nossas melhores opções de planos de internet para você e sua família! Muito mais diversão, qualidade e entretenimento!
                            {/* <BuscaCep2 /> */}
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="secondary"
                          // fullWidth
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          href="/planos"
                        >
                          Planos
                        </Button>
                      </div>
                    </Box>
                  {/* </Grid> */}
                  {/* <Hidden mdDown>
                    <Grid item md={1}>
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/logged_out/co-face.png`}
                        className={classNames(classes.image, "logo-home")}
                        
                        alt="header example"
                      />
                    </Grid>
                  </Hidden> */}
                </Box>
              </div>
            {/* </Card> */}
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
