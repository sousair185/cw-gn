import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import PricingSection from "./PricingSection";
import BuscaCep2 from "../BuscaCep2/BuscaCep";
import Carrocel from "../carousel/Carousel";
import AboutUs from "../aboutus/AboutUs";
import Business from "../business/Business";
import ClientsCarrocel from "../clients/ClientsCarrocel";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <BuscaCep2 />
      <PricingSection />
      <AboutUs />
      <ClientsCarrocel />
      <Business />
      <Carrocel />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
