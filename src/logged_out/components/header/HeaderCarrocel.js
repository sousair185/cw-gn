import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const banners = [
  { nome: "cliente", icon: banner1 },
  { nome: "cliente", icon: banner2 },
];

export const HeaderCarrocel = () => {
  return (
    <div className="container-banners">
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        deviceType={responsive}
      >
        {banners.map((element) => (
          <img
            className="banner-icon"
            key={element.nome}
            data-aos="zoom-in-up"
            data-aos-delay="200"
            src={element.icon}
            alt={element.nome}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeaderCarrocel;
