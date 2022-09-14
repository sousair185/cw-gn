import { Facebook, Instagram } from "@mui/icons-material";
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

const Footer2 = () => {
  return (
    <footer className="lg-p-top">
      <Box className="footer">
        <Container
          style={{
            background: `url(${footerbg})`,
            width: "100%",
          }}
        >
          <Row>
            <Column>
              <Heading>QUEM SOMOS</Heading>
              <span>A melhor conexão para você e sua família.</span>
            </Column>
            <Column>
              <Heading>FALE CONOSCO</Heading>
              <span>Whatsapp: (19) 9 9893-0633</span>
              <span>E-mail: atendimento@geracaonet.com.br</span>
            </Column>
            <Column>
              <Heading>REDES SOCIAIS</Heading>
              <FooterLink href="https://web.facebook.com/geracaonet">
                <i className="fab fa-facebook-f">
                  <span>
                    <Facebook style={{ marginLeft: "120px", fontSize: 30 }} />
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://www.instagram.com/geracaonet">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "120px" }}>
                    <Instagram sx={{ fontSize: 30 }} />
                  </span>
                </i>
              </FooterLink>
            </Column>
            <Column>
              <Heading>PLANOS</Heading>
              <FooterLink href="/planos">Saiba mais</FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer2;
