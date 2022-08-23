import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DescriptionIcon from "@mui/icons-material/Description";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SpeedIcon from "@mui/icons-material/Speed";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const iconSize = 40;

const features = [
  {
    color: "#F72585",
    url: "https://www.google.com.br",
    headline: "2ª via da fatura",
    text: "Texto descritivo",
    icon: <DescriptionIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#7201B7",
    url: "https://www.google.com.br",
    headline: "Teste a velocidade da sua internet",
    text: "Texto descritivo",
    icon: <SpeedIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#480CA8",
    url: "https://www.google.com.br",
    headline: "Baixe nosso aplicativo",
    text: "Texto descritivo",
    icon: <PhoneIphoneIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#4895EF",
    url: "https://www.google.com.br",
    headline: "Fale com o Suporte",
    text: "Texto descritivo",
    icon: <ContactSupportIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#4361EE",
    url: "https://www.google.com.br",
    headline: "Fale com o Financeiro",
    text: "Whatsapp (11) 99991-0621",
    icon: <WhatsAppIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#4CC9F0",
    url: "https://www.google.com.br",
    headline: "Central do Assinante",
    text: "Texto descritivo",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },
];

export const Carrocel = () => {
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        sx={{ paddingBottom: 2, fontWeight: "bold" }}
      >
        Acesse com facilidade
      </Typography>
      <Typography variant="h5" align="left" className="carrocel-subtitle">
        Tudo o que você precisa a um clique!
      </Typography>
      <div className="container-carrocel">
        {features.map((element) => (
          <Card className="card" key={element.headline}>
            <CardActionArea href={element.url} className="card2">
              <CardContent>
                {element.icon}
                <Typography variant="h6">{element.headline}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Carrocel;
