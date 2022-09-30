import React from "react";
import { List, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const clients = [
  {
    label:
      "Empresa competente e eficaz quando acionada, tanto em atendimento técnico como em atendimento de suporte obrigado a todos os colabores pela atenção.",
    icon: <FormatQuoteIcon />,
    cliente: "Reinaldo Oliveira Couto",
  },
  {
    label:
      "Internet com excelente qualidade, preço acessível e suporte técnico super atenciosos. Super recomendo!! Melhor internet e zero dor de cabeça!",
    icon: <FormatQuoteIcon />,
    cliente: "Keyse Silva",
  },
  {
    label:
      "Internet super rapida e estável, atendimento nota 10 até agora somente  experiencias positivas com essa empresa.",
    icon: <FormatQuoteIcon />,
    cliente: "João Boadnarchuk",
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
            <FormatQuoteIcon sx={{ marginLeft: 18 }} />
            <Typography>{element.label}</Typography>
            <Typography
              variant="h7"
              sx={{ marginLeft: "4em", position: "absolute", bottom: 0 }}
            >
              {element.cliente}
            </Typography>
          </List>
        ))}
      </List>
      <Typography>
        <a
          href="https://www.google.com/search?q=geracao+net&oq=ger&aqs=chrome.0.69i59l2j69i61l3j69i65l2j69i60.2310j0j7&sourceid=chrome&ie=UTF-8#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique aqui{" "}
        </a>
        para ver mais avaliações no Google
      </Typography>
    </div>
  );
};

export default ClientsCarrocel;
