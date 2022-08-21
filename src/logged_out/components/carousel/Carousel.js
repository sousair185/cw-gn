import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DescriptionIcon from "@mui/icons-material/Description";
import ComputerIcon from "@mui/icons-material/Computer";
import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 6,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 900 },
    items: 5,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 464 },
    items: 4,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const iconSize = 30;

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
    headline: "Recarga",
    text: "Texto descritivo",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#480CA8",
    url: "https://www.google.com.br",
    headline: "Consumo de internet",
    text: "Texto descritivo",
    icon: <CompassCalibrationIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#4895EF",
    url: "https://www.google.com.br",
    headline: "Mudar senha do Wi-Fi",
    text: "Texto descritivo",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#4361EE",
    url: "https://www.google.com.br",
    headline: "Suporte",
    text: "Whatsapp (11) 99991-0621",
    icon: <WhatsAppIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#4CC9F0",
    url: "https://www.google.com.br",
    headline: "Todos os serviços",
    text: "Texto descritivo",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },
];

export const Carrocel = () => {
  return (
    <div>
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
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* <Grid
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: 20,
            width: "fit-content",
          }}
        > */}
        {features.map((element) => (
          <Card
            style={{ width: 200, height: 150, margin: "5px" }}
            data-aos="zoom-in-up"
            key={element.headline}
          >
            <CardActionArea href={element.url}>
              <CardContent>
                <Typography>{element.headline}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        {/* </Grid> */}
      </Carousel>
    </div>
  );
};

export default Carrocel;
