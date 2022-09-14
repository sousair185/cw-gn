import React from "react";
import { List, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const clients = [
  {
    label:
      "Empresa competente e eficaz quando acionada, tanto em atendimento técnico como em atendimento de suporte obrigado a todos os colabores pela atenção.",
    icon: <FormatQuoteIcon />,
  },
  {
    label:
      "Internet com excelente qualidade, preço acessível e suporte técnico super atenciosos. Super recomendo!! Melhor internet e zero dor de cabeça!",
    icon: <FormatQuoteIcon />,
  },
  {
    label:
      "A melhor internet de Limeira, atendimento rápido, os técnicos super educados e prestativos. Indico e recomendo Geração Net.",
    icon: <FormatQuoteIcon />,
  },
];

export const ClientsCarrocel = () => {
  return (
    <div className="container-clients">
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
        O que dizem sobre nós
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{ paddingBottom: 2, fontWeight: "bold" }}
      >
        Buscamos diariamente entregar nosso melhor para você
      </Typography>
      <List className="testemunhal">
        {clients.map((element, index) => (
          <List key={index} className="testemunhal-list">
            <FormatQuoteIcon sx={{marginLeft: 18}} />
            <Typography>{element.label}</Typography>
          </List>
        ))}
      </List>
    </div>
  );
};

export default ClientsCarrocel;
