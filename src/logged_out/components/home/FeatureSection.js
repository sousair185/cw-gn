import React from "react";
import { Grid, Typography } from "@mui/material";
// import CodeIcon from "@mui/icons-material/Code";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DescriptionIcon from "@mui/icons-material/Description";
import ComputerIcon from "@mui/icons-material/Computer";
import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import CloudIcon from "@mui/icons-material/Cloud";
// import CancelIcon from "@mui/icons-material/Cancel";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";

const iconSize = 22;

const features = [
  {
    color: "#F72585",
    headline: "2ª via da fatura",
    text: "Texto descritivo",
    icon: <DescriptionIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#7201B7",
    headline: "Recarga",
    text: "Texto descritivo",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#480CA8",
    headline: "Consumo de internet",
    text: "Texto descritivo",
    icon: <CompassCalibrationIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#4895EF",
    headline: "Mudar senha do Wi-Fi",
    text: "Texto descritivo",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#4361EE",
    headline: "Suporte",
    text: "Whatsapp (11) 99991-0621",
    icon: <WhatsAppIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#4CC9F0",
    headline: "Todos os serviços",
    text: "Texto descritivo",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },
];

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Acesse com facilidade
        </Typography>
        <div className="container-fluid" align="center">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features.map((element) => (
              <Grid
                item
                xs={2}
                md={2}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
