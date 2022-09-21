import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import businessicon from "../../../assets/business-security.png";

const Business = () => {
  return (
    <div id="business" className="container-business">
      <div className="business-text">
        <div className="business-text-left">
          <span className="title">Empresa</span>
          <p>Conheça as soluções de conectividade para sua empresa</p>
          <span className="business-detail">
            Desenvolvemos projetos de telecomunicação personalizados que atendem
            as necessidades de empresas exigentes que buscam segurança, alta
            qualidade e ultravelocidade.
          </span>
          <a href="http://wa.me/5519999705420/">Saiba Mais</a>
        </div>
        <div className="business-list">
          <span>O que oferecemos:</span>
          <List
            sx={{ width: "100%", maxWidth: 660 }}
            arial-label="business-services"
          >
            <ListItem disablePadding data-aos="fade-right" data-aos-delay="300">
              <ListItemText
                sx={{ fontSize: "20px" }}
                disableTypography
                primary="Internet banda larga (fibra óptica)"
              />
            </ListItem>
            <ListItem disablePadding data-aos="fade-right" data-aos-delay="600">
              <ListItemText
                sx={{ fontSize: "20px" }}
                disableTypography
                primary="IP dinâmico ou fixo"
              />
            </ListItem>
            <ListItem disablePadding data-aos="fade-right" data-aos-delay="900">
              <ListItemText
                sx={{ fontSize: "20px" }}
                disableTypography
                primary="SLA de 12 ou 24 horas"
              />
            </ListItem>
            <ListItem
              disablePadding
              data-aos="fade-right"
              data-aos-delay="1200"
            >
              <ListItemText
                sx={{ fontSize: "20px" }}
                disableTypography
                primary="90% de garantia de banda"
              />
            </ListItem>
            <ListItem
              disablePadding
              data-aos="fade-right"
              data-aos-delay="1500"
            >
              <ListItemText
                sx={{ fontSize: "20px" }}
                disableTypography
                primary="50% de upload da velocidade contratada"
              />
            </ListItem>
            <ListItem
              disablePadding
              data-aos="fade-right"
              data-aos-delay="1800"
            >
              <ListItemText
                sx={{ fontSize: "20px" }}
                disableTypography
                primary="Suporte técnico especializado das 8h às 23h"
              />
            </ListItem>
            <ListItem
              disablePadding
              data-aos="fade-right"
              data-aos-delay="2100"
            >
              <ListItemText
                sx={{ fontSize: "20px" }}
                disableTypography
                primary="Segurança dos dados da sua empresa"
              />
            </ListItem>
          </List>
          <a href="http://wa.me/5519999705420/">
            Conheça tudo que a GN pode oferecer
          </a>
        </div>
      </div>
      <img src={businessicon} alt="business-icon" className="business-icon" />
    </div>
  );
};

export default Business;
