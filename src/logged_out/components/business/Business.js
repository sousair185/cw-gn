import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Business = () => {
  return (
    <div className="container-business">
      <div className="business-text">
        <p>Conheça as soluções de conectividade</p>
        <span className="title">Para sua empresa</span>
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
            <ListItemText primary="Internet banda larga (fibra óptica)" />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="600">
            <ListItemText primary="IP dinâmico ou fixo" />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="900">
            <ListItemText primary="SLA de 12 ou 24 horas" />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="1200">
            <ListItemText primary="90% de garantia de banda" />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="1500">
            <ListItemText primary="50% de upload da velocidade contratada" />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="1800">
            <ListItemText primary="Suporte técnico especializado das 8h às 23h" />
          </ListItem>
          <ListItem disablePadding data-aos="fade-right" data-aos-delay="2100">
            <ListItemText primary="Segurança dos dados da sua empresa" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Business;