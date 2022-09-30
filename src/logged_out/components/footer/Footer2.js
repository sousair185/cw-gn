import footerbg from "../../../assets/fbgtexture.png";
import React from "react";
import { Box, Container } from "./FooterStyles";
import ContactForm from "../contactCard/ContactCard";

const Footer2 = () => {
  return (
    <footer className="lg-p-top2">
      <Box className="footer">
        <Container
          style={{
            background: `url(${footerbg})`,
            width: "100%",
          }}
        >
          <ContactForm />
        </Container>
      </Box>
    </footer>
  );
};

export default Footer2;
