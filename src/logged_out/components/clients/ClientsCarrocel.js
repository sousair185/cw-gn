import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { Typography } from "@mui/material";
import a from "../../../assets/a.png";
import c from "../../../assets/c.png";
import h from "../../../assets/h.png";
import p from "../../../assets/p.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const clients = [
  { nome: "cliente", icon: a },
  { nome: "cliente", icon: c },
  { nome: "cliente", icon: h },
  { nome: "cliente", icon: p },
  { nome: "cliente", icon: a },
  { nome: "cliente", icon: c },
  { nome: "cliente", icon: h },
  { nome: "cliente", icon: p },
];

export const ClientsCarrocel = () => {
  return (
    <div className="container-clients">
      <Typography
        variant="h4"
        align="center"
        sx={{ paddingBottom: 2, fontWeight: "bold" }}
      >
        Alguns de nossos clientes
      </Typography>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* <div className="client-container"> */}
        {clients.map((element) => (
          <img
            className="client-icon"
            key={element.nome}
            data-aos="zoom-in-up"
            data-aos-delay="200"
            src={element.icon}
            alt={element.nome}
          />
        ))}
        {/* </div> */}
      </Carousel>
    </div>
  );
};

export default ClientsCarrocel;
