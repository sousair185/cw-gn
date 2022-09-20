import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import withStyles from "@mui/styles/withStyles";

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

function HeadSection(props) {
  const { classes } = props;

  return (
    <Fragment>
      <div className={classNames(classes.bg)}>
        <div className={classNames("container-fluid-standard")}>
          <Box
            data-aos-delay="100"
            data-aos="zoom-in"
            display="flex"
            justifyContent="start"
          >
            <div
              className={classNames(classes.containerFix, "header-container")}
            >
              <div
                className="header-container-text"
                data-aos-delay="500"
                data-aos="zoom"
              >
                <span>Conecte-se sem limites</span>
                <List
                  sx={{ width: "100%", maxWidth: 660 }}
                  arial-label="business-services"
                >
                  <ListItem
                    disablePadding
                    data-aos="fade-right"
                    data-aos-delay="600"
                  >
                    <ListItemText
                      sx={{ fontSize: "25px", fontWeight: "normal" }}
                      disableTypography
                      primary="Internet banda larga (fibra óptica)"
                    />
                  </ListItem>
                  <ListItem
                    disablePadding
                    data-aos="fade-right"
                    data-aos-delay="900"
                  >
                    <ListItemText
                      sx={{ fontSize: "25px", fontWeight: "normal" }}
                      disableTypography
                      primary="Sem franquia de consumo"
                    />
                  </ListItem>
                  <ListItem
                    disablePadding
                    data-aos="fade-right"
                    data-aos-delay="1200"
                  >
                    <ListItemText
                      sx={{ fontSize: "25px", fontWeight: "normal" }}
                      disableTypography
                      primary="Pacotes para você, sua família e sua empresa"
                    />
                  </ListItem>
                  <ListItem
                    disablePadding
                    data-aos="fade-right"
                    data-aos-delay="1500"
                  >
                    <ListItemText
                      sx={{ fontSize: "25px", fontWeight: "normal" }}
                      disableTypography
                      primary="50% de upload da velocidade contratada"
                    />
                  </ListItem>
                  <ListItem
                    disablePadding
                    data-aos="fade-right"
                    data-aos-delay="1800"
                  >
                    <ListItemText
                      sx={{ fontSize: "25px", fontWeight: "normal" }}
                      disableTypography
                      primary="Suporte técnico especializado das 8h às 23h"
                    />
                  </ListItem>
                </List>
              </div>
            </div>
          </Box>
        </div>
        <a className="btn-home" href="http://wa.me/5519999705420/">
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
