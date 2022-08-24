import { Email, Facebook, Instagram } from "@mui/icons-material";
import footerbg from "../../../assets/fbgtexture.png";
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import Phone from "@mui/icons-material/Phone";
import WaveBorder from "../../../shared/components/WaveBorder";

const Footer2 = () => {
  return (
    <footer className="lg-p-top">
      <WaveBorder
        upperColor="#FFFFFF"
        lowerColor="#3900E7"
        animationNegativeDelay={4}
      />
      <Box style={{ backgroundColor: "#3900E7" }}>
        <Container
          style={{
            background: `url(${footerbg})`,
            width: "100vw",
          }}
        >
          <Row>
            <Column>
              <Heading>Sobre Nós</Heading>
              <span>A melhor conexão para você e sua família.</span>
            </Column>
            <Column>
              <Heading>Contato</Heading>
                <Phone />
              <span>
                (19) 9 9893-0633
              </span>
                <Email />
              <span>
                atendimento@geracaonet.com.br
              </span>
            </Column>
            <Column >
              <Heading>Redes Sociais</Heading>
              <FooterLink href="https://web.facebook.com/geracaonet">
                <i className="fab fa-facebook-f">
                  <span>
                    <Facebook style={{ marginLeft: "40px", fontSize: 30 }} />
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://www.instagram.com/geracaonet">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "40px" }}>
                    <Instagram sx={{ fontSize: 30}} />
                  </span>
                </i>
              </FooterLink>
            </Column>
            <Column>
              <Heading>Planos</Heading>
              <FooterLink href="/planos">Saiba mais</FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer2;
