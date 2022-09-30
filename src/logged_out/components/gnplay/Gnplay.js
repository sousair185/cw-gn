import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import gnplaylogo from "./../../../assets/gnplay-logo.png";
import SpeedIcon from "@mui/icons-material/Speed";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WifiIcon from "@mui/icons-material/Wifi";
import DownloadIcon from "@mui/icons-material/Download";
import TvIcon from "@mui/icons-material/Tv";
import studios from "../../../assets/gnplaystudios.png";

const Gnplay = () => {
  return (
    <Fragment>
      <div className="box-gnplay">
        <img
          data-aos="zoom-in-down"
          data-aos-delay="200"
          src={gnplaylogo}
          alt="gnplay"
          className="gnplay-logo"
        />
        <div className="gn-title">O melhor combo para se conectar</div>
        <div className="gn-subtitle">Com o que realmente importa</div>
        <div className="gnplay-card">
          <Card
            className="gnplay-card-card"
            sx={{
              margin: 3,
              minWidth: 300,
              borderRadius: 4,
              boxShadow: "0px 3px 9px 3px rgba(0,0,0,0.45)",
            }}
          >
            <CardContent
              sx={{
                fontWeight: "600",
                backgroundColor: "#170061",
                color: "#fff",
                fontSize: 20,
              }}
            >
              Fala Fácil
            </CardContent>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <SpeedIcon sx={{ marginRight: 1, color: "darkviolet" }} />{" "}
                    100Mb
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <PhoneInTalkIcon
                      sx={{ marginRight: 1, color: "darkviolet" }}
                    />{" "}
                    100min
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <WifiIcon sx={{ marginRight: 1, color: "darkviolet" }} />
                    Wi-fi Grátis
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <DownloadIcon
                      sx={{ marginRight: 1, color: "darkviolet" }}
                    />{" "}
                    Downloads ilimitados
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <TvIcon sx={{ marginRight: 1, color: "darkviolet" }} />+ de
                    50 Canais
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <a href="http://wa.me/5519999705420/" className="about-btn">
              Confira Nossos Preços
            </a>
          </Card>
          <Card
            className="gnplay-card-card"
            sx={{
              margin: 3,
              minWidth: 300,
              borderRadius: 4,
              boxShadow: "0px 3px 9px 3px rgba(0,0,0,0.45)",
            }}
          >
            <CardContent
              sx={{
                fontWeight: "600",
                backgroundColor: "#170061",
                fontSize: 20,
                color: "#fff",
              }}
            >
              Standard
            </CardContent>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <SpeedIcon sx={{ marginRight: 1, color: "darkviolet" }} />{" "}
                    200Mb
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <PhoneInTalkIcon
                      sx={{ marginRight: 1, color: "darkviolet" }}
                    />
                    100min + 30 min
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <WifiIcon sx={{ marginRight: 1, color: "darkviolet" }} />
                    Wi-fi Grátis
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <DownloadIcon
                      sx={{ marginRight: 1, color: "darkviolet" }}
                    />{" "}
                    Downloads ilimitados
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <TvIcon sx={{ marginRight: 1, color: "darkviolet" }} />+ de
                    50 Canais
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <a
              href="http://wa.me/5519999705420/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn"
            >
              Confira Nossos Preços
            </a>
          </Card>
          <Card
            className="gnplay-card-card"
            sx={{
              margin: 3,
              minWidth: 300,
              borderRadius: 4,
              boxShadow: "0px 3px 9px 3px rgba(0,0,0,0.45)",
            }}
          >
            <CardContent
              sx={{
                fontSize: 20,
                fontWeight: "600",
                backgroundColor: "#170061",
                color: "#fff",
              }}
            >
              Premium
            </CardContent>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <SpeedIcon sx={{ marginRight: 1, color: "darkviolet" }} />
                    300Mb
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <PhoneInTalkIcon
                      sx={{ marginRight: 1, color: "darkviolet" }}
                    />
                    250min + 50min
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <WifiIcon sx={{ marginRight: 1, color: "darkviolet" }} />
                    Wi-fi Grátis
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <DownloadIcon
                      sx={{ marginRight: 1, color: "darkviolet" }}
                    />{" "}
                    Downloads ilimitados
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <TvIcon sx={{ marginRight: 1, color: "darkviolet" }} />+ 50
                    Canais
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <a href="http://wa.me/5519999705420/" className="about-btn">
              Confira Nossos Preços
            </a>
          </Card>
          <Card
            className="gnplay-card-card"
            sx={{
              margin: 3,
              minWidth: 300,
              borderRadius: 4,
              boxShadow: "0px 3px 9px 3px rgba(0,0,0,0.45)",
            }}
          >
            <CardContent
              sx={{
                fontSize: 20,
                fontWeight: "600",
                backgroundColor: "#170061",
                color: "#fff",
              }}
            >
              Gold
            </CardContent>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <SpeedIcon sx={{ marginRight: 1, color: "darkviolet" }} />
                    500Mb
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <PhoneInTalkIcon
                      sx={{ marginRight: 1, color: "darkviolet" }}
                    />
                    500min + 100min
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <WifiIcon sx={{ marginRight: 1, color: "darkviolet" }} />
                    Wi-fi Grátis
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <DownloadIcon
                      sx={{ marginRight: 1, color: "darkviolet" }}
                    />{" "}
                    Downloads ilimitados
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontWeight: "600" }}>
                    <TvIcon sx={{ marginRight: 1, color: "darkviolet" }} />+ 50
                    Canais
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <a
              href="http://wa.me/5519999705420/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn"
            >
              Confira Nossos Preços
            </a>
          </Card>
        </div>
        <div className="gnplay-studio">
          Alguns de nossos estúdios
          <img src={studios} alt="gnplay-studios" />
        </div>
      </div>
    </Fragment>
  );
};

export default Gnplay;
