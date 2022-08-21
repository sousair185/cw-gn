import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Business = () => {
  return (
    <div className="container-business">
      <div className="business-text">
        <span className="title">PARA SUA EMPRESA</span>
        <p>CONHEÇA AS SOLUÇÕES DE CONECTIVIDADE PARA SUA EMPRESA</p>
        <span>
          Desenvolvemos projetos de telecomunicação personalizados que atendem
          as necessidades de empresas exigentes que buscam segurança, alta
          qualidade e ultravelocidade.
        </span>
        <span className="title">O QUE OFERECEMOS:</span>
        <List
          sx={{ width: "100%", maxWidth: 660 }}
          arial-label="business-services"
        >
          <ListItem disablePadding>
            <ListItemText primary="Internet banda larga (fibra óptica)" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="IP dinâmico ou fixo" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="SLA de 12 ou 24 horas" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="90% de garantia de banda" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="50% de upload da velocidade contratada" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Suporte técnico especializado das 8h às 23h" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Segurança dos dados da sua empresa" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Business;
