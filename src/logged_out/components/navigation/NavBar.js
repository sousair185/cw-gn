import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Hidden, IconButton } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
// import HowToRegIcon from "@mui/icons-material/HowToReg";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookIcon from "@mui/icons-material/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import logo from "../../../assets/menu-logo.png";
import mascote from "../../../assets/mascote.png";

import classNames from "classnames";
const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
  logo: {
    width: "300px",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function NavBar(props) {
  const linkcontrate =
    "https://api.whatsapp.com/send?phone=5519999705420&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20um%20plano";

  const linkatendimento =
    "https://api.whatsapp.com/send?phone=5519999705420&text=Oi%2C%20sou%20assinante%20e%20preciso%20de%20atendimento";
  const {
    classes,
    // openRegisterDialog,
    // openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "/precos",
      name: "Planos",
      icon: <BookIcon className="text-white" />,
    },
    {
      link: "/sobre",
      name: "Sobre nós",
      icon: <BookIcon className="text-white" />,
    },
    {
      link: linkcontrate,
      name: "Para você",
      icon: <BookIcon className="text-white" />,
    },
    {
      link: linkcontrate,
      name: "Para sua empresa",
      icon: <BookIcon className="text-white" />,
    },
    {
      link: linkcontrate,
      name: "Contrate",
      icon: <BookIcon className="text-white" />,
    },
    {
      link: linkatendimento,
      name: "Área do Assinante",
      icon: <BookIcon className="text-white" />,
    },
    // {
    //   name: "Registro",
    //   onClick: openRegisterDialog,
    //   icon: <HowToRegIcon className="text-white" />,
    // },
    // {
    //   name: "Login",
    //   onClick: openLoginDialog,
    //   icon: <LockOpenIcon className="text-white" />,
    // },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <a href="/">
              <img
                src={logo}
                className={classNames(classes.logo, "gn-logo")}
                alt="gn-logo"
              />
            </a>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Abrir nselectAboutavegação"
                size="large"
              >
                <MenuIcon color="secondary" />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              {menuItems.map((element) => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button className="menu-text">{element.name}</Button>
                    </Link>
                  );
                }
                return (
                  <Button className="menu-text" key={element.name}>
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
        <a href="https://wa.me/5519999705420">
          <span
            className="mascote-texto"
            data-hover="Olá, eu sou o Geh, como posso te ajudar?"
          >
            <img
              src={mascote}
              alt="mascote-geração-net"
              className="mascote-gn"
            />
          </span>
        </a>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
