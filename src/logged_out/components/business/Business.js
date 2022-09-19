import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import businessicon from "../../../assets/business-security.png";



const Business = () => {


  return (
    <div className="container-business" >
      <div className="business-text">
        <span className="title">Empresa</span>
        <p>Conheça as soluções de conectividade para seu comércio</p>
        <span className="business-detail">
          Desenvolvemos projetos de telecomunicação personalizados que atendem
          as necessidades de empresas exigentes que buscam segurança, alta
          qualidade e ultravelocidade.
        </span>
        <span className="title">O que oferecemos:</span>
        <List
          sx={{ width: "100%", maxWidth: 660 }}
          arial-label="business-services"
        >
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="300">
            <ListItemText
              sx={{ fontSize: "25px" }}
              disableTypography
              primary="Internet banda larga (fibra óptica)"
            />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="600">
            <ListItemText
              sx={{ fontSize: "25px" }}
              disableTypography
              primary="IP dinâmico ou fixo"
            />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="900">
            <ListItemText
              sx={{ fontSize: "25px" }}
              disableTypography
              primary="SLA de 12 ou 24 horas"
            />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="1200">
            <ListItemText
              sx={{ fontSize: "25px" }}
              disableTypography
              primary="90% de garantia de banda"
            />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="1500">
            <ListItemText
              sx={{ fontSize: "25px" }}
              disableTypography
              primary="50% de upload da velocidade contratada"
            />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="1800">
            <ListItemText
              sx={{ fontSize: "25px" }}
              disableTypography
              primary="Suporte técnico especializado das 8h às 23h"
            />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="2100">
            <ListItemText
              sx={{ fontSize: "25px" }}
              disableTypography
              primary="Segurança dos dados da sua empresa"
            />
          </ListItem>
        </List>
      </div>
      <img src={businessicon} alt="business-icon" className="business-icon" />
    </div>
  );
};

export default Business;
