import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DescriptionIcon from "@mui/icons-material/Description";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SpeedIcon from "@mui/icons-material/Speed";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 5,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 900 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

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
    <div className="container-fluid lg-p-top">
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Acesse com facilidade
      </Typography>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={8000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={800}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {features.map((element) => (
          <Card className="card" key={element.headline}>
            <CardActionArea href={element.url} className="card2">
              <CardContent>
                {element.icon}
                <Typography>{element.headline}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrocel;
